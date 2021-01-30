import React, {useEffect, useState} from "react";
import style from './Getplayers.module.css';
import {NavLink} from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
    Button,
    makeStyles,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    withStyles
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {ChatBubbleOutline, DesktopAccessDisabled, DesktopWindows, Edit} from "@material-ui/icons";

import {authPlayersThunk} from "../Reducer/getplayers-reducer";


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
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
        minWidth: '700px',
        width: '80%',
        margin: '0 auto',
        boxShadow: '0',
    },
});


const Getplayers = (props) => {


    const [countDel, setCountDel] = useState(0);
    const [countOffline, setCountOffline] = useState(0);
    const [countOnline, setCountOnline] = useState(1);


    useEffect(() => {
        props.authPlayersThunk();
    }, [countDel, countOnline, countOffline]);


    // let offlineGames = (name) => {
    //     let k = (name.replace('#', '%23'));
    //     props.offlineGameThunk(k);
    //
    // }

    // let onlineGames = (name) => {
    //     let k = (name.replace('#', '%23'));
    //     props.onlineGameThunk(k);
    //
    // }
    //
    // let deleteGames = (name) => {
    //     let k = (name.replace('#', '%23'));
    //     props.deleteGameThunk(k);
    // }
    //
    // let formessage = (name) => {
    //     let k = (name.replace('#', '%23'));
    //     props.addMessageForTableName(k);
    // }


    const classes = useStyles();
    // const editor = (name) => {
    //     props.eddTablThunk(name)
    // }

    return (

        <div>
            <div style={{textAlign: 'center'}}>
                <Button variant="contained" color="primary" href="/newplayers"
                        style={{margin: '0px auto 9px auto'}}>Add New Pleyer</Button>
            </div>

            {props.resultgetplayers === "" ? <div style={{textAlign: 'center'}}><CircularProgress/></div> : <div>

                <TableContainer>

                    <table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Select</StyledTableCell>
                                <StyledTableCell>Player</StyledTableCell>
                                <StyledTableCell>AdminProfile</StyledTableCell>
                                <StyledTableCell>Title</StyledTableCell>
                                <StyledTableCell>Level</StyledTableCell>
                                <StyledTableCell>RealName</StyledTableCell>
                                <StyledTableCell>Gender</StyledTableCell>
                                <StyledTableCell>Location</StyledTableCell>
                                <StyledTableCell>Email</StyledTableCell>
                                <StyledTableCell>Balance</StyledTableCell>
                                <StyledTableCell>Balance2</StyledTableCell>
                                <StyledTableCell>Perms</StyledTableCell>
                                <StyledTableCell>Tickets</StyledTableCell>
                                <StyledTableCell>Chip T/A</StyledTableCell>
                                <StyledTableCell>Chat</StyledTableCell>
                                <StyledTableCell>Color</StyledTableCell>
                                <StyledTableCell>First Login</StyledTableCell>
                                <StyledTableCell>Last Login</StyledTableCell>
                                <StyledTableCell>Last Reset</StyledTableCell>
                                <StyledTableCell>Last Reset2</StyledTableCell>
                                <StyledTableCell>Logins</StyledTableCell>
                                <StyledTableCell>Val</StyledTableCell>
                                <StyledTableCell>Avatar</StyledTableCell>
                                <StyledTableCell>Custom</StyledTableCell>
                                <StyledTableCell>Note</StyledTableCell>
                                <StyledTableCell>ERake</StyledTableCell>
                                <StyledTableCell>ERake2</StyledTableCell>
                                <StyledTableCell>PRake</StyledTableCell>
                                <StyledTableCell>PRake2</StyledTableCell>
                                <StyledTableCell>TFees</StyledTableCell>
                                <StyledTableCell>TFees2</StyledTableCell>

                            </TableRow></TableHead>
                        {props.getplayers.map(u => {
                            return (
                                <TableBody>
                                    <StyledTableRow key={u.Player}>
                                        <StyledTableCell>


                                            {/*<span>*/}
                                            {/*    {u.Status === 'Offline' ?*/}
                                            {/*        <NavLink to='/editringgame' style={{color: '#000'}} onClick={() => {*/}
                                            {/*            editor(u);*/}
                                            {/*            setCountOnline(countOnline + 1);*/}
                                            {/*        }} title='Edit'>*/}
                                            {/*            <Edit/>*/}
                                            {/*        </NavLink> :*/}
                                            {/*        <div style={{color: '#ccc'}} onClick={()=>{alert('Switch to offline mode')}} title='Switch to offline mode'><Edit/>*/}
                                            {/*        </div>}*/}

                                            {/*</span>*/}

                                            {/*{u.Status === 'Offline' ?*/}
                                            {/*    <span key={u.id} className={style.del} onClick={() => {*/}
                                            {/*        deleteGames(u.Name);*/}
                                            {/*        setCountDel(countDel + 3);*/}
                                            {/*    }} title='Delete'> <DeleteIcon/>*/}
                                            {/*</span> : <div style={{color: '#ccc'}} onClick={()=>{alert('Switch to offline mode')}} title='Switch to offline mode'>*/}
                                            {/*        <DeleteIcon/></div>}*/}

                                            {/*<span>{u.Status === 'Offline' ? <p onClick={() => {*/}
                                            {/*        onlineGames(u.Name);*/}
                                            {/*        setCountOffline(countOffline + 1)*/}
                                            {/*    }} className={style.red} title='Offline'><DesktopAccessDisabled/></p> :*/}
                                            {/*    <p onClick={() => {*/}
                                            {/*        offlineGames(u.Name);*/}
                                            {/*        setCountOnline(countOnline + 1)*/}
                                            {/*    }}*/}
                                            {/*       className={style.green} title='Online'><DesktopWindows/></p>}*/}
                                            {/*</span>*/}

                                            {/*<span>*/}
                                            {/*    <a href={`#${u.Name}`} title='Message' onClick={()=>{*/}
                                            {/*        formessage(u.Name);*/}

                                            {/*    }}*/}
                                            {/*       style={{color: '#000'}}><ChatBubbleOutline/></a>*/}
                                            {/*    <div id={u.Name} className={style.modalDialog}>*/}
                                            {/*        <div>*/}
                                            {/*            <a href="#close" title="Close" className={style.close}>X</a>*/}
                                            {/*            <h3>Message From {u.Name}</h3>*/}
                                            {/*            <SendMessageTableContainer myprops={u.name}/>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</span>*/}
                                        </StyledTableCell>
                                        <StyledTableCell key={u.Player}>{u.Player}</StyledTableCell>
                                        <StyledTableCell>{u.AdminProfile}</StyledTableCell>
                                        <StyledTableCell>{u.Title}</StyledTableCell>
                                        <StyledTableCell>{u.Level}</StyledTableCell>
                                        <StyledTableCell>{u.RealName}</StyledTableCell>
                                        <StyledTableCell>{u.Gender}</StyledTableCell>
                                        <StyledTableCell>{u.Location}</StyledTableCell>
                                        <StyledTableCell>{u.Email}</StyledTableCell>
                                        <StyledTableCell>{u.Balance}</StyledTableCell>
                                        <StyledTableCell>{u.Balance2}</StyledTableCell>
                                        <StyledTableCell>{u.Permissions}</StyledTableCell>
                                        <StyledTableCell>{u.Tickets}</StyledTableCell>
                                        <StyledTableCell>{u.ChipsTransfer}/{u.ChipsAccept}  </StyledTableCell>
                                        <StyledTableCell>{u.Chat}</StyledTableCell>
                                        <StyledTableCell>{u.Color}</StyledTableCell>
                                        <StyledTableCell>{u.FirstLogin}</StyledTableCell>
                                        <StyledTableCell>{u.LastLogin}</StyledTableCell>
                                        <StyledTableCell>{u.LastReset}</StyledTableCell>
                                        <StyledTableCell>{u.LastReset2}</StyledTableCell>
                                        <StyledTableCell>{u.Logins}</StyledTableCell>
                                        <StyledTableCell>{u.ValCode}</StyledTableCell>
                                        <StyledTableCell>{u.Avatar}</StyledTableCell>
                                        <StyledTableCell>{u.Custom}</StyledTableCell>
                                        <StyledTableCell>{u.Note}</StyledTableCell>
                                        <StyledTableCell>{u.ERake}</StyledTableCell>
                                        <StyledTableCell>{u.ERake2}</StyledTableCell>
                                        <StyledTableCell>{u.PRake}</StyledTableCell>
                                        <StyledTableCell>{u.PRake2}</StyledTableCell>
                                        <StyledTableCell>{u.TFees}</StyledTableCell>
                                        <StyledTableCell>{u.TFees2}</StyledTableCell>
                                    </StyledTableRow>

                                </TableBody>
                            )
                        })}
                    </table>
                </TableContainer>
            </div>}


        </div>
    )
}

export default Getplayers;
