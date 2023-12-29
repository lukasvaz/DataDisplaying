import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Filter({onChange,options}) {    
    return (
    <div className="d-flex justify-content-center">  
        <select  className="form-select my-3" style={{"maxWidth":"800px"}} defaultValue={"None"}  onInput={onChange}>
        <option  value="None"> Mostrar Todo </option>
        {
            options.map((item)=> <option value={item}> {item} </option>)
        }
        
        </select>
    </div>
    )
}

export default Filter;