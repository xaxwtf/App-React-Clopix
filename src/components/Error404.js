import React from "react";
import imagen from '../assets/images/error404.gif'

function Error404(){
    return(
        <React.Fragment>
            <div className="w-100 ">
                <img  className="w-100" src={imagen}  alt="Error 404"/>
            </div>
        </React.Fragment>
    )
}
export default Error404;