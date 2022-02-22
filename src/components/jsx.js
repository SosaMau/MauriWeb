import React, {Fragment}  from 'react';


const jsx = () => {
    //const saludo = "hola como va"
    const temperatura = 2;
    return ( 
    <Fragment>
        <h1>Hace frio o calor</h1>
        <h4>
            { 
                temperatura > 20 ? 'calor' : 'frio'
            }
        </h4> 
    </Fragment>   
        );
}
 
export default jsx;