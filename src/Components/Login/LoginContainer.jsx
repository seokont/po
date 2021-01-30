import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import LoginAdmin from "./Login";

import {addPlayerTokenThunk} from "../../Reducer/auth-reducer";
import {addPlayerSessionThunk} from "../../Reducer/session-reducer";
import AuthRedirect from "./../../Hoc/AuthRedirect";


let mapStateToProps = (state) => ({
    token: state.Token,
    


})

let LoginContainer = compose(connect(mapStateToProps, {
    addPlayerTokenThunk,addPlayerSessionThunk
    
}),AuthRedirect)(LoginAdmin);
export default LoginContainer;
