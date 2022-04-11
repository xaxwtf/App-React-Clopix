import React from 'react';
import { useEffect, useState } from 'react';

import User from './user';

function InformeUser (){
        const [user,setUser]=useState([]);

        useEffect(() => {
                fetch("api/users").then(r=>r.json()
                ).then(r2=>{
                        setUser(r2.users);
                        console.log(user);
                })
        }, []);
         return(
                <table id='users' style={{width: 50 +'vw', border: 'solid 1px black', textAlign: 'center'}}>
                        <thead>
                                <th></th>
                                <th>Usuario</th>
                                <th>Full Name</th>
                                <th>mail</th>
                                <th>phone</th> 
                        </thead>
                        <tbody>
                                { user.map((valor,i)=>{ return <User {...valor} key={i}/> }) }
                        </tbody>
                        
                </table>
                
        )
}
export default InformeUser;