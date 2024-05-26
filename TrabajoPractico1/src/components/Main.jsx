import React from 'react'
import perf from "../assets/perf.jpeg"
import "../css/main.css"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";


const Main = () => {

    const Alumno = {
        nombre: "Santiago",
        apellido: "Rivadeneira",
        edad: 24,
        hobby: "Futbol",
        cel: "3815581613",
        mail: "jsantiagorivadeneira@gmail.com",
        carrera: "Tecnicatura en Programación Universitaria"

    }

    return (
        <div className='main'>
            <div>
                <br />
                <h3>Datos Personales</h3>
                <img src={perf} width="250px" alt="" />
                <br />
                <br />
                <ul className='lista'>
                    <li>Nombre: {Alumno.nombre} {Alumno.apellido}</li>
                    <li>Edad: {Alumno.edad}</li>
                    <li>Celular: {Alumno.cel}</li>
                    <li>E-Mail: {Alumno.mail} </li>
                    <li>Carrera: {Alumno.carrera} </li>
                </ul>
                <br />
            </div>
            
            <h3>---- Poseo Conocimientos en ----</h3>
            <br />
            <FaHtml5 style={{ width: "55px", height: "55px" }} />
            <FaCss3Alt style={{ width: "55px", height: "55px" }} />
            <TbBrandJavascript style={{ width: "65px", height: "70px" }} />
            <FaDatabase style={{ width: "60px", height: "50px" }} />
            <FaReact style={{ width: "65px", height: "55px" }} />

            <br />
            <br />
            <br />
            <hr />

        </div>
    )
}

export default Main