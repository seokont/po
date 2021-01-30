import {Route, withRouter} from "react-router-dom";
import s from './App.module.css';
import RingGamesConteiner from "./Components/Ringgames/RinggamesConteiner";
import NewRingGameConteiner from "./Components/NewRingGame/NewRingGameConteiner";
import Footer from "./Components/Footer/Footer";
import HeaderContainer from "./Components/Header/Header";
import HeaderForPlayersContainer from "./Components/HeaderForPlayers/HeaderForPlayers";

import {compose} from "redux";
import {connect} from "react-redux";

import EditRingGameConteiner from "./Components/EditRingGame/EditRingGameConteiner";
import TournamentsConteiner from "./Components/Tournaments/TournamentsContainer";
import NewTournamentsConteiner from "./Components/NewTournaments/NewTournamentsConteiner";
import EdittournamentConteiner from "./Components/Edittournament/EdittournamentContainer";
import GetplayersConteiner from "./Components/Getplayers/GetplayersConteiner";
import {Redirect } from "react-router-dom";
import NewPlayerConteiner from "./Components/NewPlayer/NewPlayerContainer";
import EditPlayerConteiner from "./Components/EditPlayer/EditPlayerContainer";
import AddFastPlayerConteiner from "./Components/AddFastPlayer/AddFastPlayerContainer";
import AffiliateContainer from "./Components/Affiliate/AffiliateContainer";
import ConectedPlayersContainer from "./Components/ConectedPlayers/ConectedPlayersContainer";
import NavTabs from "./Components/Players/Players";
import LoginContainer from "./Components/Login/LoginContainer";
import PokerContainer from "./Components/Poker/PokerContainer";
import BalanceStatisticContainer from "./Components/BalanceStatistic/BalanceStatisticContainer";
import BalanceStatisticBetweenPlayersContainer from "./Components/BalanceStatisticBetweenPlayers/BalanceStatisticBetweenPlayersContainer";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import aces from '../src/img/magic-aces.jpg';







const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 0,
      background: `url(${aces})`,
  backgroundColor: 'black',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 50%',
    },
    paper: {
      padding: theme.spacing(0),
      
     
    },
  }));





function App(props) {
    const classes = useStyles();
    
    
    return (


// <section id="page">
//   <header>{props.token.Token !== ''? <HeaderContainer/>:''}   </header>
  
   
  



// <main className={s.App_Wrapper_wrap}>
//     <Route path="/newtournamentsgame" render={() => <NewTournamentsConteiner/>}/>
//     <Route path="/newringgame" render={() => <NewRingGameConteiner/>}/>
//     <Route path="/editringgame" render={() => <EditRingGameConteiner/>}/>
//     <Route path="/edittournament" render={() => <EdittournamentConteiner/>}/>
//     <Route path="/ringgames" render={() => <RingGamesConteiner/>}/>
//     <Route path="/tournaments" render={() => <TournamentsConteiner/>}/>
//     <Route path="/affiliate" render={() => <AffiliateContainer/>}/>
//     <Route path="/newplayers" render={() => <NewPlayerConteiner/>}/>
//     <Route path="/editplayers" render={() => <EditPlayerConteiner/>}/>
//     <Route path="/addplayersfast" render={() => <AddFastPlayerConteiner/>}/>
//     <Route path="/conplayers" render={() => <NavTabs/>}/>
//     <Route path="/login" render={() => <LoginContainer/>}/>
//     <Route path="/poker" render={() => <PokerContainer/>}/>
//     <Route path="/balance" render={() => <BalanceStatisticContainer/>}/>

//     <Route path="/balanceplayers" render={() => <BalanceStatisticBetweenPlayersContainer/>}/>

//     <Route path='/' exact={true} component={LoginContainer} />



// </main>









  
//   <footer>
// {props.token.Token !== ''?  <Footer/>:''}
// </footer>
// </section>


<div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
        
              
         {props.token.Token !== ''? <HeaderContainer/>:''}  


        </Grid>
       
      </Grid>




     
        <Grid item xs={12} >
         



    <Route path="/newtournamentsgame" render={() => <NewTournamentsConteiner/>}/>
     <Route path="/newringgame" render={() => <NewRingGameConteiner/>}/>
    <Route path="/editringgame" render={() => <EditRingGameConteiner/>}/>
     <Route path="/edittournament" render={() => <EdittournamentConteiner/>}/>
     <Route path="/ringgames" render={() => <RingGamesConteiner/>}/>
     <Route path="/tournaments" render={() => <TournamentsConteiner/>}/>
     <Route path="/affiliate" render={() => <AffiliateContainer/>}/>
     <Route path="/newplayers" render={() => <NewPlayerConteiner />}/>
     <Route path="/editplayers" render={() => <EditPlayerConteiner/>}/>
     <Route path="/addplayersfast" render={() => <AddFastPlayerConteiner/>}/>
    <Route path="/conplayers" render={() => <NavTabs/>}/>
     <Route path="/login" render={() => <LoginContainer/>}/>
     <Route path="/poker" render={() => <PokerContainer/>}/>
    <Route path="/balance" render={() => <BalanceStatisticContainer/>}/>

    <Route path="/balanceplayers" render={() => <BalanceStatisticBetweenPlayersContainer/>}/>

    <Route path='/' exact={true} component={LoginContainer} />

         
        </Grid>
        
  



        <Grid item xs={12}>
          
              


          {props.token.Token !== ''?  <Footer/>:''}
          
        </Grid>
        
      
    </div>

        
        
    );
}



let mapStateToProps = (state) => ({
    
    session: state.Session,
      
    token: state.Token


})


export default compose(connect(mapStateToProps, {
    
    
}))(App);


