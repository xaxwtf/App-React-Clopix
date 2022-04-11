import React from 'react';


function Product( props){
        
        return (
            <tr className='producto' style={{border: 'solid 1px black'}}>
                <td>
                    <p>{props.id}</p>
                </td>
                <td className='imagen'>
                    <img src={props.image_product}  style={{width: 100 +'px'}}/>
                </td>
                <td className='info'>
                    <p> {props.nameProduct}</p>
                </td>
                <td>
                    <p>{props.description}</p>
                </td>
                <td>
                    <p>{props.priceUnit}</p>
                </td>
                <td>
                    <p>{props.talle}</p>
                </td>
                <td>
                    <p>{props.stock}</p>
                </td>
            </tr>
        );    
}
export default Product;