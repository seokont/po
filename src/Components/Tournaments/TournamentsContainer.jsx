import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";

import {authTournamentsThunk} from "../Reducer/gettournamentsgame-reducer";
import Tournaments from "./Tournaments";
import {deleteTournamentsThunk} from "../Reducer/deltournaments-reducer";
import {offlinetournamentsThunk} from "../Reducer/offlinetournaments-reducer";
import {onlineTournamentsThunk} from "../Reducer/onlinetournaments-reducer";
import {addMessageForTableTurnamentsName} from "../Reducer/messagetableturnaments-reducer";
import {eddTournThunk} from "../Reducer/edittournament-reducer";





let mapStateToProps = (state) => ({
    getgamestourn: state.Gettournaments.AllRingGamesTournaments,
    resultgetgames: state.Gettournaments.Result,


})

let TournamentsConteiner = compose(connect(mapStateToProps, {deleteTournamentsThunk,authTournamentsThunk,offlinetournamentsThunk,addMessageForTableTurnamentsName,onlineTournamentsThunk,eddTournThunk}))(Tournaments);
export default TournamentsConteiner;
