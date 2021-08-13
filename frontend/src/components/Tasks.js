import React from 'react';
import './../css/Tasks.css';
import blackArrowUp from './../assets/blackArrowUp.png';
import blackArrowDown from './../assets/blackArrowDown.png';
import greenArrow from './../assets/greenArrow_ico.png';
import redX from './../assets/redX_ico.png';
import grayPlusSquare from './../assets/grayPlusSquare_ico.png';

function Tasks(props) {
  const { tasks, addTask } = props;
  const [text, setText] = React.useState('');
  const [pom, setPom] = React.useState(1);

  function aumentarPom(prevState) {
    setPom((prevState) => prevState + 1);
  }

  function diminuirPom(prevState) {
    if (pom > 0) {
      setPom((prevState) => prevState - 1);
    }
  }

  function removeTask() {
    const task = document.getElementById('doing');
    task.remove();
  }

  return (
    <section>
      <h1>Tarefas</h1>
      <div className="quadro">
        {tasks.map(([task, po]) => {
          return (
            <div class="tarefa" id="doing">
              <p>{task}</p>
              <img src={redX} alt="" onClick={removeTask}></img>
              <img src={greenArrow} alt=""></img>
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
          ></input>
        </form>

        <div className="quant_pom">
          <p>{pom} pom.</p>
          <div className="box_img">
            <img src={blackArrowUp} alt="" onClick={aumentarPom}></img>
            <img src={blackArrowDown} alt="" onClick={diminuirPom}></img>
          </div>
        </div>

        <img
          src={grayPlusSquare}
          alt=""
          onClick={() => addTask(text, pom)}
        ></img>
      </div>
    </section>
  );
}

export default Tasks;
