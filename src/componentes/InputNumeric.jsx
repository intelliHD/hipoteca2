import React from 'react'
import PropTypes from 'prop-types';

import NumberFormat from 'react-number-format';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';





export const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;
  
  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix={'$'}
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function InputNumeric({values,handleChange,name,label,disabled = false}) {



  return (
    <>
      <TextField
        label={label}
        value={values}
        onChange={handleChange}
        // defaultValue={values}
        name={name}
        disabled={disabled}
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
        variant="outlined"
        
      />
     

    </>
  );
}