import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import BalanceAddOrClear from "./Balance";
import {authIncBalanceThunk} from "../../Reducer/balanceincdec-reducer";




let mapStateToProps = (state) => ({

    balance:state.Balance

})

let BalanceContainer = compose(connect(mapStateToProps, {authIncBalanceThunk}))(BalanceAddOrClear);
export default BalanceContainer;
