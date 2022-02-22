import React,{useState,Fragment} from 'react';

const Lista = () => {

    const [arrayNumero, setArray] = useState([1,2,3,4])
    const [numero, setNumero] = useState(5)
    
    const agregarElemento =()=>{

        console.log("clic");
        setNumero(numero + 1)
        setArray([...arrayNumero,numero])
    }
    return (
        <Fragment>
          <h2>Lista de cosas</h2>
          <button onClick={agregarElemento}> agragar</button>
          {
              arrayNumero.map((item,index) =>
                  <p key={index}> {item} - {index}</p>
              )
          }
        </Fragment>
      );
}
 
export default Lista;