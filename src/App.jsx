import "./App.css";
import {BiTrash} from "react-icons/bi";

function App() {
  return (
    <>
      <div className="Title-div">
        <h1 className="Title">Lista de tareas de <span className="myname">Lautaro</span></h1>
      </div>
      <form>
        <input className="input-text" placeholder="ingrese el nombre de la tarea"></input>
        <button className="submit-button">AGREGAR</button>
        
      </form>
      <ul className="item-list">
        <li className="item completed">
            <input type="checkbox" defaultChecked="true"></input>
            <p className="item-text">Tarea completada #1</p>
          <BiTrash className="trash"/>
        </li>
        <li className="item pending">
            <input type="checkbox"></input>
            <p className="item-text">Tarea pendiente #1</p>
          <BiTrash/>
        </li>
        <li className="item completed">
            <input type="checkbox" defaultChecked="true"></input>
            <p className="item-text">Tarea completada #3</p>
          <BiTrash/>
        </li>
      </ul>
    </>
  )
}

export default App
