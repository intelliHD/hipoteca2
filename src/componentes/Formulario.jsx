import { MenuItem, Select, Slider, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { calcularTotal } from '../helpers';
import InputNumeric from './InputNumeric';


const Formulario = ({cantidad, setCantidad, plazo, setPlazo, setTotal,deposito,setDeposito,interes,setInteres}) => {

    const [error, setError] = useState(false);

    const calcularPrestamo = e => {
        e.preventDefault();
        if (cantidad === 0 || plazo ==="") {
            setError(true);
            return;
        }
        setError(false);
        
        const total = calcularTotal(cantidad, plazo,interes,deposito);
        setTotal(total);
        //console.log(total);
    }

    const onChange = ({target}) => {
        console.log(target);
        // console.log(target.value * interes / 100);
        switch (target.name) {
            case 'precio':
                setCantidad(parseInt(target.value));
                setDeposito(target.value * interes / 100)
                
                break;
            case 'plazo':
                
                setPlazo(parseInt(target.value))

                break;
            case 'interes':
                
                setInteres(parseInt(target.value))
                setDeposito( (cantidad *target.value / 100).toFixed(0))
                break;
        
            default:
                break;
        }

    } 
    
    useEffect(() => {
        setDeposito(cantidad * interes / 100)
    }, [cantidad])
    const [value, setValue] = React.useState(1000);



    return ( 
        <>
            <form onSubmit={ calcularPrestamo }>
                <div className="column">
                    <div>
                        <label >Cantidad total del préstamo</label>
                        
                        <InputNumeric
                        label={''}
                        name='precio'
                        values={cantidad}
                        handleChange={(e) => onChange(e)  }
                        />
                       
                    </div>
                    <div>
                        <label>Tasa de interés (%)</label>
                        <Select
                            // value={values.interes}
                            className='selected'
                            onChange={(e) => onChange(e)}
                            name='interes'
                            // autoWidth
                            defaultValue={"7"}
                            >
                                <MenuItem value="1">1%</MenuItem>
                                <MenuItem value="2">2%</MenuItem>
                                <MenuItem value="3">3%</MenuItem>
                                <MenuItem value="4">4%</MenuItem>
                                <MenuItem value="5">5%</MenuItem>
                                <MenuItem value="6">6%</MenuItem>
                                <MenuItem value="7">7%</MenuItem>
                            </Select>
                     
                    </div>
                    <div>
                        <label >Plazo en años</label>
                        
                        <TextField
                        type="number" 
                        onChange={(e) => onChange(e)}
                    
                        name='plazo'
                        value={plazo}
                        placeholder='12 años'
                       
                        variant="outlined"
                        
                        />
                        
                    </div>
                </div>
                <div className="btnSubmit">
                    <input type="submit" value="Calcular" />
                </div>
            </form>
            {(error) ? <p className='error'>Todos los campos son obligatorios...</p> : ""}
            
        </>
    );
}
 
export default Formulario;