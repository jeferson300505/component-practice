import React from 'react'

export const MyComponent = () => {
    const name = "jefeseon";
    const repository = "https://github.com/dashboard";
    const student = {
        name:"jeferson",
        lastName:"charris",
        mobile:"3005056811",
        perfil: "bmx"
    };
  return (
    <div>
        <hr />
        <ul>
            <li>Componente</li>
            <li>Evento</li>
            <li>estado - Hooks</li>
            <li>Comunicacion</li>
        </ul>
        <hr />
        <h2>dato de estudiante</h2>
        <p>Nombre: { name }</p>
        <p>Repositorip: { repository }</p>
        <hr />
        <h2>Datos del estudiante</h2>
        <p>Nombre: {student.name }</p>
        <p>Apellido: { student.lastName}</p>
        <p>Celular: { student.mobile} </p>
        <p> perfil: {student.perfil}</p>

    </div>
    
  )
}
