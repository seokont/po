import React, {useEffect, useState} from "react";
import style from './Tournaments.module.css';
import {NavLink} from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
    Button,
    makeStyles, Modal, Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    withStyles
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {ChatBubbleOutline, DesktopAccessDisabled, DesktopWindows, Edit} from "@material-ui/icons";
import {offlinetournamentsThunk} from "../Reducer/offlinetournaments-reducer";
import {onlineTournamentsThunk} from "../Reducer/onlinetournaments-reducer";
import SendMessageTableTurnamentsContainer from "../SendMesageTableTurnaments/SendMessageTableTurnamentsContainer";


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 12,

    },
    root:{
        padding:'5px',

    }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,

        },
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        width: '100%',
        margin: '0 auto',
        boxShadow: '0',
    },
});





const Tournaments = (props) => {

    const [countDel, setCountDel] = useState(0);
    const [countOffline, setCountOffline] = useState(0);
    const [countOnline, setCountOnline] = useState(1);


    useEffect(() => {
        props.authTournamentsThunk();
    }, [countDel, countOnline, countOffline]);


    let offlineTournaments = (name) => {
        let k = (name.replace('#', '%23'));
        props.offlinetournamentsThunk(k);

    }

    let onlineTournaments = (name) => {
        let k = (name.replace('#', '%23'));
        props.onlineTournamentsThunk(k);

    }
    let nameAddStateTournaments = (name) => {
        let k = (name.replace('#', '%23'));
        props.addMessageForTableTurnamentsName(k);

    }

    let deleteTournaments = (name) => {
        let k = (name.replace('#', '%23'));
        props.deleteTournamentsThunk(k);


    }
    const classes = useStyles();

    const editor = (name) => {

        props.eddTournThunk(name)
    }


    return (
        <div>
            <div style={{textAlign:'center'}}><Button variant="contained" color="primary" href="/newtournamentsgame"
                                                      style={{margin: '0px auto 9px auto'}}>Add tournament</Button></div>
            {props.resultgetgames === "" ? <div style={{textAlign: 'center'}}><CircularProgress/></div> : <div>

                <TableContainer>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>Edit</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(1)">Name</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(2)">Desc</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(3)">Auto</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(4)">Status</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(5)">Game</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(6)">PW</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(7)">Perms</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(8)">SChat</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(9)">Tables</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(10)">St/Tb</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(11)">SFull</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(12)">SNow</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(13)">SCode</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(14)">Start time</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(15)">Reg</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(16)">Late</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(17)">MinPlay</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(18)">Recur</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(19)">Runs</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(20)">NoShow</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(21)">PCur</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(22)">Buy-in</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(23)">Bty</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(24)">Ticket</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(25)">Bonus</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(26)">Chips</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(27)">Clocks</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(28)">Level</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(29)">Break</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(30)">SChop</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(31)">Unreg</StyledTableCell>
                                <StyledTableCell className="sort" onClick="sort(32)">Note</StyledTableCell>
                            </StyledTableRow></TableHead><TableBody>
                        {props.getgamestourn.map(u => (

                                <StyledTableRow key={u.name}>
                                    <StyledTableCell>




                                               <table style={{verticalAlign:'middle'}}>

                                                   <tr>
                                                       <td> <span>
                                                {u.Status === 'Offline' ?
                                                    <NavLink to='/edittournament' style={{color: '#000'}}
                                                             onClick={() => {
                                                                 editor(u);
                                                                 setCountOnline(countOnline + 1);
                                                             }} title='Edit'>
                                                        <Edit/>
                                                    </NavLink> :
                                                    <div style={{color: '#ccc'}} onClick={() => {
                                                        alert('Switch to offline mode')
                                                    }} title='Switch to offline mode'><Edit/>
                                                    </div>}

                                            </span></td><td>
                                                       {u.Status === 'Offline' ?
                                                           <span key={u.id} className={style.del} onClick={() => {
                                                               deleteTournaments(u.Name);
                                                               setCountDel(countDel + 3);
                                                           }} title='Delete'> <DeleteIcon/>
                                            </span> : <div style={{color: '#ccc'}} onClick={() => {
                                                               alert('Switch to offline mode')
                                                           }} title='Switch to offline mode'>
                                                               <DeleteIcon/></div>}
                                                   </td>
                                                   </tr>


                                                   <tr>
                                                       <td>
                                                           <span>{u.Status === 'Offline' ? <p onClick={() => {
                                                               onlineTournaments(u.Name);
                                                               setCountOffline(countOffline + 1)
                                                           }} className={style.red} title='Offline'><DesktopAccessDisabled/></p> :
                                                           <p onClick={() => {
                                                               offlineTournaments(u.Name);
                                                               setCountOnline(countOnline + 1)
                                                           }}
                                                              className={style.green} title='Online'><DesktopWindows/></p>}
                                            </span>
                                                       </td>

                                                       <td>

                                                           <span>
                                                <a href={`#${u.Name}`} title='Message' onClick={() => {

                                                    nameAddStateTournaments(u.Name);
                                                }}
                                                   style={{color: '#000'}}><ChatBubbleOutline/></a>
                                                <div id={u.Name} className={style.modalDialog}>
                                                    <div>
                                                        <a href="#close" title="Close" className={style.close}>X</a>
                                                        <h3>Message From {u.Name}</h3>
                                                        <SendMessageTableTurnamentsContainer/>
                                                    </div>
                                                </div>
                                            </span>

                                                       </td>
                                                   </tr>

                                               </table>










                                    </StyledTableCell>
                                    <StyledTableCell className={style.ad_s} key={u.id}>{u.Name}</StyledTableCell>
                                    <StyledTableCell>{u.Description}</StyledTableCell>
                                    <StyledTableCell>{u.Auto}</StyledTableCell>
                                    <StyledTableCell>{u.Status}</StyledTableCell>
                                    <StyledTableCell>{u.Game}</StyledTableCell>
                                    <StyledTableCell>{u.PW}</StyledTableCell>
                                    <StyledTableCell>{u.PermObserve}</StyledTableCell>
                                    <StyledTableCell>{u.SChat}</StyledTableCell>
                                    <StyledTableCell>{u.Tables}</StyledTableCell>
                                    <StyledTableCell>{u.Seats}</StyledTableCell>
                                    <StyledTableCell>{u.StartFull}</StyledTableCell>
                                    <StyledTableCell>{u.SNow}</StyledTableCell>
                                    <StyledTableCell>{u.SCode}</StyledTableCell>
                                    <StyledTableCell>{u.StartTime}</StyledTableCell>
                                    <StyledTableCell>{u.RegMinutes}</StyledTableCell>
                                    <StyledTableCell>{u.LatePenalty}</StyledTableCell>
                                    <StyledTableCell>{u.MinPlayers}</StyledTableCell>
                                    <StyledTableCell>{u.RecurMinutes}</StyledTableCell>
                                    <StyledTableCell>{u.MaxRuns}</StyledTableCell>
                                    <StyledTableCell>{u.NoShow}</StyledTableCell>
                                    <StyledTableCell>{u.PrimaryCurrency}</StyledTableCell>
                                    <StyledTableCell>{u.BuyIn}</StyledTableCell>
                                    <StyledTableCell>{u.Bty}</StyledTableCell>
                                    <StyledTableCell>{u.Ticket}</StyledTableCell>
                                    <StyledTableCell>{u.BonusTicket}</StyledTableCell>
                                    <StyledTableCell>{u.Chips}</StyledTableCell>
                                    <StyledTableCell>{u.TurnClock !== '' ? `${u.TurnClock} / ${u.TimeBank}` : ""}</StyledTableCell>
                                    <StyledTableCell>{u.Level}</StyledTableCell>
                                    <StyledTableCell>{u.BreakTime !== '' ? `${u.BreakTime} / ${u.BreakInterval}` : ""} </StyledTableCell>
                                    <StyledTableCell>{u.StopOnChop}</StyledTableCell>
                                    <StyledTableCell>{u.UnregLogout}</StyledTableCell>
                                    <StyledTableCell>{u.Note}</StyledTableCell>
                                </StyledTableRow>

                            )
                        )}
                    </TableBody>
                    </Table>
                </TableContainer>
            </div>}


        </div>
    )
}


export default Tournaments;

