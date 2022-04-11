import React from 'react';

import { useEffect, useState } from 'react';
import Product from './product';
import Footer from './Footer';


function Menu (){
    const [productos,setproductos]=useState([]);
    const [users,setusers]=useState([]);
    const [ultimop,setUltimoP]=useState([]);
    const [countByCategoria,setCategoria]=useState([]);
        useEffect(() => {
            fetch("/api/products").then(r=>r.json()
            ).then(r2=>{
                setproductos(r2);
                setUltimoP(r2.products.pop());
                setCategoria(r2.countByCategory);
                
            })
        }, []);
        
        useEffect(()=>{
            fetch("/api/users").then(r=>r.json()
            ).then(r2=>{
                setusers(r2);
                console.log("USUARIOS");
                console.log(users);

            })
        },[]);
        
        return (
            <div className='container my-auto'>
                <h1 class="h3 mb-0 text-gray-800">HOME</h1>

                <div class="col-md-4 mb-4">
                <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                <p> Total de Productos: {productos.count}</p>
                </div>
                <div class="col-md-4 mb-4">
                <i class="fas fa-user-check fa-2x text-gray-300"></i>
                <p> Total Usuarios: {users.count}</p>
                </div>
                
               <div>
                   <h4>Ultimo Producto Creado</h4>
                   <table className='table-responsive'>
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
                        <Product {...ultimop} />
                    </tbody>
                        
                   </table >

                    <h4>Cantidad de Productos por Categoria</h4>
                    <div className='row'>
                    
                        <div className="col-md-4 mb-4">
                            <div className={`card border-left-primary shadow h-100 py-2`}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}> XXL</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{countByCategoria.XXL}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className={`fas fa-clipboard-list fa-2x text-gray-300`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className={`card border-left-primary shadow h-100 py-2`}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}> XL</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{countByCategoria.XL}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className={`fas fa-clipboard-list fa-2x text-gray-300`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className={`card border-left-primary shadow h-100 py-2`}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}> S</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{countByCategoria.S}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className={`fas fa-clipboard-list fa-2x text-gray-300`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className={`card border-left-primary shadow h-100 py-2`}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}> L</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{countByCategoria.L}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className={`fas fa-clipboard-list fa-2x text-gray-300`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className={`card border-left-primary shadow h-100 py-2`}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}> M</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{countByCategoria.M}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className={`fas fa-clipboard-list fa-2x text-gray-300`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className={`card border-left-primary shadow h-100 py-2`}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}> XXXL</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{countByCategoria.XXXL}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className={`fas fa-clipboard-list fa-2x text-gray-300`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    


               </div>
               <Footer />
            </div>
        );    
   
}
export default Menu;