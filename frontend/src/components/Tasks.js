import React from 'react';
import api from '../services/api';
import './../css/Tasks.css';
import blackArrowUp from './../assets/blackArrowUp.png';
import blackArrowDown from './../assets/blackArrowDown.png';
import greenArrow from './../assets/greenArrow_ico.png';
import redX from './../assets/redX_ico.png';
import grayPlusSquare from './../assets/grayPlusSquare_ico.png';
import return_ico from './../assets/return_ico.png';


function Tasks(props) {
  const { setTask } = props;
  const [text, setText] = React.useState('');
  const [pom, setPom] = React.useState(1);
  const [listTask, setListTask] = React.useState([]);
  const [taskRefs, setTaskRefs] = React.useState([]);

  async function listarTasks() {
    const retorno = await api.get('/tasks');
    const arrayTasks = retorno.data.map((task) => task);
    //console.log(arrayTasks);
    //setListTask((prevState) => [...prevState, arrayTasks]);
    setListTask(arrayTasks);
  }

  React.useEffect(listarTasks, []);

  React.useEffect(() => {
    console.log(taskRefs);

    // add or remove refs
    setTaskRefs(taskRefs => (
      Array(listTask.length).fill().map((_, i) => console.log(i) || taskRefs[i] || React.createRef())
    ));
  }, [listTask]);

  // function atualizaIndex(prevState) {
  //   // setIndex((prevState) => prevState + 1);
  //   return prevState;
  // }

  async function addTask(task, po) {
    const input = document.getElementsByClassName('input_tarefa')[0];
    if (input.value === '') {
    } else {
      const save = await api.post('/tasks', {
        desc: text,
        pomodoros: pom,
      });
      console.log(save);
      setListTask(save.data);
      // this.setState({ tasks: [...this.state.tasks, [task, po]] });
      input.value = '';
    }
  }

  function aumentarPom(prevState) {
    setPom((prevState) => prevState + 1);
  }

  function diminuirPom(prevState) {
    if (pom > 1) {
      setPom((prevState) => prevState - 1);
    }
  }

  async function saveTask() {
    // const save = await api.post('/tasks', {
    //   desc: text,
    //   pomodoros: pom,
    // });
  }

  async function completeTask(e) {
    const done = await api.put('/tasks', {
      _id: e.target.parentNode.parentNode.getAttribute('data-key'),
      finished: true,
    });
    // console.log(done);
    // console.log(e.target.parentNode.parentNode.getAttribute('data-key'));
    e.target.parentNode.parentNode.classList.add('done');
  }

  async function retornarTask(e) {
    const retorna = await api.put('/tasks', {
      _id: e.target.parentNode.parentNode.getAttribute('data-key'),
      finished: false,
    });
    e.target.parentNode.parentNode.classList.remove('done');
  }

  async function removeTask(e) {
    console.log(e.target.parentNode.parentNode.getAttribute('data-key'));
    const retorna = await api.delete('/tasks', {
      data: {
        id: e.target.parentNode.parentNode.getAttribute('data-key'),
      },
    });
    setListTask(retorna.data);
    e.target.parentNode.parentNode.remove();
  }

  function handleClick(e, ref) {
    const task = taskRefs[ref].current;

    if(e.target.tagName !== 'IMG')
      setTask(
        task.getAttribute('data-key'), 
        task.getAttribute('data-pomodoros')
      );
  }

  // function resetarInput() {
  //   setText('');
  //   setPom(1);
  // }

  return (
    <section>
      <h1>Tarefas</h1>

      <div className="quadro">
        {listTask &&
          listTask.map((task, ref) => {
            // console.log(task);
            //task = JSON.parse(task);
            // console.log(task, task.desc);
            return (
              <div
                className={`tarefa ${task.finished ? 'done' : ''}`}
                key={task['_id']}
                data-key={task['_id']}
                data-pomodoros={task.pomodoros}
                ref={taskRefs[ref]}
                onClick={(e) => handleClick(e, ref)}
              >
                <p>{task.desc}</p>
                <div className="btn_task">
                  <img src={redX} alt="" onClick={removeTask}></img>

                  <img
                    src={greenArrow}
                    alt=""
                    onClick={completeTask}
                    className="greenArrow"
                  ></img>

                  <img
                    src={return_ico}
                    alt=""
                    className="ret_done"
                    onClick={retornarTask}
                  ></img>
                </div>
                <span>{task.pomodoros} pom.</span>
              </div>
            );
          })}

        {/* {tasks.map(([task, po]) => {
          // console.log(task);
          //task = JSON.parse(task);
          // console.log(task, task.desc);
          return (
            <div className="tarefa" key={task['_id']} data-key={task['_id']}>
              <p>{task}</p>
              <div className="btn_task">
                <img src={redX} alt="" onClick={removeTask}></img>

                <img
                  src={greenArrow}
                  alt=""
                  onClick={completeTask}
                  className="greenArrow"
                ></img>

                <img
                  src={return_ico}
                  alt=""
                  className="ret_done"
                  onClick={retornarTask}
                ></img>
              </div>
              <span>{po} pom.</span>
            </div>
          );
        })} */}

        <div className="clear"></div>
      </div>

      <div className="add_tarefa">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Nova tarefa..."
            onChange={(e) => setText(e.currentTarget.value)}
            className="input_tarefa"
          ></input>

          <div className="quant_pom">
            <p>{pom} pom.</p>
            <div className="box_img">
              <img src={blackArrowUp} alt="" onClick={aumentarPom}></img>
              <img src={blackArrowDown} alt="" onClick={diminuirPom}></img>
            </div>
          </div>

          <button type="submit" className="btn_add_taref" onClick={saveTask}>
            <img
              src={grayPlusSquare}
              alt=""
              onClick={() => addTask(text, pom)}
            ></img>
          </button>
        </form>
      </div>
    </section>
  );
}
//onClick={saveTask}
export default Tasks;
