import React from 'react';


function User( props){
        
        return (
            <tr className='user' style={{border: 'solid 1px black'}}>
                <td className='imagen'>
                    <img src={props.avatar_image}  style={{width: 100 +'px'}}/>
                </td>
                <td className='info'>
                    <p> {props.username}</p>
                </td>
                <td>
                    <p>{props.full_name}</p>
                </td>
                <td>
                    <p>{props.email}</p>
                </td>
                <td>
                    <p>11-{props.phone}</p>
                </td>
            </tr>
        );    
}
export default User;