import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyecto = [
        {nombre:'Elegir Plataforma', estado: true},
        {nombre:'Estampado de etiqueta', estado: false},
        {nombre:'Carrier', estado: false},
        {nombre:'Elegir computadoras', estado: true}
    ]

    return ( 
        <Fragment>
            <h2>Proyecto: Computadoras</h2>

            <ul className="listado-tareas">
                { tareasProyecto.length === 0
                    ? (<li className="tarea"> <p>No hay tareas</p> </li>)
                    : tareasProyecto.map( tarea => (
                        <Tarea 
                            tarea={tarea}
                        />
                    ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
            >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;