import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Card({ nombre, rango, mercados }) {

    return (
        <div className="card bg-primary my-4 mx-2" style={{ "maxWidth": "300px" }}>
            <div className='card-body d-flex'>
                <h4 className="card-title mx-3"  >
                    {nombre} </h4>
                <div className="d-flex flex-column align-items-center" style={{ "width": "600px" }}>
                    <p className="card-text my-0 text-center"  >Rango : {rango} </p>
                    <p className="card-text my-0 text-center"  > nro. Mercados: {mercados} </p>
                </div>
            </div>
        </div>
    )
}

export default Card;    