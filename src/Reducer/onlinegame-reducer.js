import {getApiGames, getApiGamesDelete, getApiGamesOffline} from "../API/Api";

const GET_GAMES = "GET_GAMES";
const DEL_GAMES = "DEL_GAMES";
const OFFLINE_GAMES = "OFFLINE_GAMES";
const ONLINE_GAMES = "ONLINE_GAMES";


let initialization = {
    AllRingGames:[],

        Result:''

};

let GetGamesReducer = (state = initialization, action) => {

    switch (action.type) {

        case GET_GAMES:
            return {

                ...state,
                AllRingGames: [...action.data]
            };

        case OFFLINE_GAMES:
            return {

                ...state,
                Result: action.result
            };

        case ONLINE_GAMES:
            return {

                ...state,
                Result: action.result
            };
        default:
            return state;
    }
}
export let getGamesForAll = (data) => ({type: GET_GAMES, data:data});
export let delGamesForGames = (result) => ({type: DEL_GAMES, result:result});
export let offlineGamesForGames = (result) => ({type: OFFLINE_GAMES, result:result});
export let onlineGamesForGames = (result) => ({type: ONLINE_GAMES, result:result});


export const authThunk=()=>
    async (dispatch)=>{
        let response = await getApiGames.getGamesForApi();
        if (response.status === 200) {
            dispatch(getGamesForAll(response.data));
        }
    }


export const deleteGameThunk=(name)=>
    async (dispatch)=>{

        let response = await getApiGamesDelete.delGamesForApi(name);
        if (response.data.Result === 'ok') {

            dispatch(delGamesForGames(response.data.Result));

        }
    }

export const offlineGameThunk=(name)=>
    async (dispatch)=>{

        let response = await getApiGamesOffline.offlineGamesForApi(name);
        if (response.data.Result === 'ok') {
            dispatch(offlineGamesForGames(response.data.Result));
        }
    }


export const onlineGameThunk=(name)=>
    async (dispatch)=>{

        let response = await getApiGamesOffline.onlineGamesForApi(name);
        if (response.data.Result === 'ok') {
            dispatch(onlineGamesForGames(response.data.Result));
        }
    }




export default GetGamesReducer;
