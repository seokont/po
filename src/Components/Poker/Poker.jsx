import React, {useEffect, useState} from 'react';
import * as axios from "axios";
import {CircularProgress} from "@material-ui/core";
import BalanceTransferContainerContainer from '../BalanceTransfer/BalanceTransfer';




class Poker extends React.Component {

  state = {
    session: '',
    login:''
  }

constructor(props){
    super(props);   
    
}

    async componentDidMount(){      
     // let x = localStorage.getItem("token"); 
        
      
          axios.post(`https://texasroom.club/wp-json/pokerapi/v1/authsession/?token=${this.props.token.Token}`)
            .then(res => {             
              this.setState({ session: res.data.session,login:res.data.name});
              this.props.addSessionThunk(res.data.role);
              this.props.addNameThunk(res.data.name);
            })
       
        
    }

//     componentDidUpdate(prevProps,prevState,snapshot){
// if(this.props.session.Session!=prevProps.session.Session)
// {
//   let x = localStorage.getItem("token");
//   this.props.addPlayerSessionThunk(x) 

// }
        
//     }

    linkPoker(){
        let link = `https://narine.pp.ua/?LoginName=${this.state.login}&SessionKey=${this.state.session}`;    
        return link;    
    }
    render() {    
    return (this.state.session ? <div><iframe allowFullScreen src={this.linkPoker()} width='100%' height='850' display="initial" frameBorder='0' ></iframe> </div> : <div style={{textAlign:'center'}}><CircularProgress/></div>)
       
    }
  }





export default Poker;