import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Getplayers from "./Getplayers";
import {authPlayersThunk} from "../Reducer/getplayers-reducer";



let mapStateToProps = (state) => ({
    getplayers: state.GetPlayers.AllPlayers,
    resultgetplayers: state.GetPlayers.Result,

})

let GetplayersConteiner = compose(connect(mapStateToProps, {authPlayersThunk}))(Getplayers);
export default GetplayersConteiner;
