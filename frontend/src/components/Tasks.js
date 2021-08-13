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
  const { tasks, addTask } = props;
  const [text, setText] = React.useState('');
  const [pom, setPom] = React.useState(1);
  const [index, setIndex] = React.useState(0);

  async function listarTasks() {
    const retorno = await api.get('/tasks');
    console.log(retorno);
  }

  React.useEffect(listarTasks, []);

  function atualizaIndex(prevState) {
    // setIndex((prevState) => prevState + 1);
    return prevState;
  }

  function aumentarPom(prevState) {
    setPom((prevState) => prevState + 1);
  }

  function diminuirPom(prevState) {
    if (pom > 0) {
      setPom((prevState) => prevState - 1);
    }
  }

  function completeTask(e) {
    e.target.parentNode.parentNode.classList.add('done');
  }

  function retornarTask(e) {
    e.target.parentNode.parentNode.classList.remove('done');
  }

  function removeTask(e) {
    console.log(e.target.parentNode.parentNode);
    e.target.parentNode.parentNode.remove();
  }

  // function resetarInput() {
  //   setText('');
  //   setPom(1);
  // }

  return (
    <section>
      <h1>Tarefas</h1>

      <div className="quadro">
        {tasks.map(([task, po]) => {
          return (
            <div className="tarefa">
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
        })}

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

          <button type="submit" className="btn_add_taref">
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

export default Tasks;
