import React from 'react';
import { useEffect, useState } from 'react';

import Product from './product';

function InformeProductos (){
        const [productos,setProductos]=useState([]);

        useEffect(() => {
                fetch("api/products").then(r=>r.json()
                ).then(r2=>{
                        setProductos(r2.products);
                       
                })
        }, []);
        
         return(
             
                <table id='Prodoductos' style={{width: 50 +'vw', border: 'solid 1px black', textAlign: 'center'}}>
                        <thead>
                                <th>id</th>
                                <th></th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price Unit</th> 
                                <th>Size</th>
                                <th>Stock</th>
                        </thead>
                        <tbody>
                                { productos.map((valor,i)=>{ return <Product {...valor} key={i}/> }) }
                        </tbody>
                        
                </table>
                
        )
}
export default InformeProductos;