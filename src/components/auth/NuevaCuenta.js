import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const NuevaCuenta = () => {

    //state para el inicio de sesion
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password:'', 
        confirmar:''
    })

    //extraer usuario
    const {nombre, email, password, confirmar} = usuario;

    const iniciarSesion = (e) => { 
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //cuando entras e inicias sesion
    const inicioSesion = e => {
        e.preventDefault();

        //validar campos vacios

        //password minimo 6 caracteres

        //que los 2 password sean iguales

        //pasarlo al action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Registro de Usuarios</h1>

                <form
                    onSubmit={inicioSesion}
                >
                    
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={iniciarSesion}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={iniciarSesion}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={iniciarSesion}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Confirma tu Password"
                            value={confirmar}
                            onChange={iniciarSesion}
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit" 
                            value="Registrarme" 
                            className="btn btn-primario btn-block" 
                        />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Volver a Inicio de Sesión
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;