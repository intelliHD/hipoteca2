
import React from 'react';
import NumberFormat from 'react-number-format';

const Resultado = ({total, cantidad, plazo}) => {
    return ( 
        <div className="resultado">
            <h2>Cotizacion:</h2>
            <p>Total a pagar: {'  '}
            <NumberFormat 
                displayType={'text'}
                thousandSeparator={true} 
                prefix={'$'} 
                value={(total.toFixed(1))}
                />
                </p>
            <p>Su pago mensual es de:  {' '}
                <div className='pago' >
                    <NumberFormat 
                    displayType={'text'}
                    thousandSeparator={true} 
                    prefix={'$'} 
                    value={(total / (plazo * 12 )).toFixed(1)}
                    />
                    {' '}
                
                </div>
                ( {plazo * 12} meses )
            </p>
           
            <p>A pagar en:  {plazo} años </p>
            <p>La cantidad solicitada es:  {' '}
            <NumberFormat 
            displayType={'text'}
            thousandSeparator={true} 
            prefix={'$'} 
            value={cantidad}
            />
            </p>
            
            
        </div>
    );
}
 
export default Resultado;