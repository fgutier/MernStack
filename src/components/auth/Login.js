import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {

    //state para el inicio de sesion
    const [usuario, guardarUsuario] = useState({
        email: '',
        password:''
    })

    //extraer usuario
    const {email, password} = usuario;

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


        //pasarlo al action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={inicioSesion}
                >
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
                        <input 
                            type="submit" 
                            value="Iniciar Sesiòn" 
                            className="btn btn-primario btn-block" 
                        />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtner Cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;