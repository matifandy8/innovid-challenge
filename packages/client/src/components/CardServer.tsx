import axios from "axios";
import * as React from "react";
import { useState } from "react";
import off from '../assets/pc-off.png';
import on from '../assets/pc-on.gif';
import styles from "./CardServer.module.scss";

interface Props {
  number: string;
}

const CardServer: React.FC<Props> = ({number}) => {
  const [status, setStatus ] = useState(false)
  const [usage, setUsage ] = useState("")


  // si hago click en prender server hago la llamada a api y paso a true el setinoff 
  // despues de 5 segundos hago otra llamada para actualizar
  const ChangeStatus = async () => {
    setStatus(!status);
    if(status === false){
     const data: any = await axios.get(`http://localhost:8000/status/${number}`)
    setUsage(data.data.load)
        console.log(data.data.load)
    }
  }
  
  return (
    <main className={styles.container}>
      <div className="window" style={{width: 220, margin: "auto"}}>
        <div className="title-bar">
          <div className="title-bar-text">Server {number}</div>
        </div>
        <div className="window-body">
          <img className={styles.image} src={status ? on : off}/>
        </div>
        <div className="status-bar">
          <p className="status-bar-field">Status: {status ? "ON" : "OFF"}</p>
          <p className="status-bar-field" onClick={ChangeStatus}>{status ? "Turn OFF" : "Turn ON"}</p> 
          <p className="status-bar-field">CPU Usage: {status ? usage + "%" : "0%"}</p>
        </div>
      </div>
    </main>
  );
};

export default CardServer;
