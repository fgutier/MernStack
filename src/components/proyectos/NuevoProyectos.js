import React, { Fragment, useState } from 'react';


const NuevoProyectos = () => {

    //definir el useState
    const [ proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    //extraer npmbre proyecto
    const { nombre } = proyecto;

    //lee los contenidos del form
    const onChangeProyecto = (e) => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    //envia los datos del form
    const onSubmitProyecto = (e) => {
        e.preventDefault();

        //validar Proyecto

        //agregar al state

        //reiniciar el form
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"  
            >
                Nuevo Proyectos
            </button>

            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />
                <input 
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                />

            </form>
        </Fragment>
     );
}
 
export default NuevoProyectos;