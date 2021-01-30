import React from "react";
import {addTableThunk} from "../../Reducer/addtable-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import AddTable from "./NewRingGame";





let mapStateToProps = (state) => ({
adtablenew:state.Addtablereducer

})

let NewRingGameConteiner = compose(connect(mapStateToProps, {addTableThunk}))(AddTable);
export default NewRingGameConteiner;
