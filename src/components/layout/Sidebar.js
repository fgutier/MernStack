import React from 'react';
import NuevoProyectos from '../proyectos/NuevoProyectos';
import ListadoProyectos from '../proyectos/ListadoProyectos';

const Sidebar = () => {
    return ( 
        <aside>
            <h1>Foxconn <span>Tasks</span></h1>
            <NuevoProyectos />

            <div className="proyectos">
                <h2>Tus Proyectos</h2>

                <ListadoProyectos />
            </div>
        </aside>
     );
}
 
export default Sidebar;