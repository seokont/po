import React from "react";
import {Redirect} from "react-router-dom";




let RedirectAfterGood = (Component)=>(props) => {

            if (props.EditMessag.Result==="ok") return <Redirect to='/ringgames'/>
            return <Component {...props}/>

        }
export default RedirectAfterGood;
