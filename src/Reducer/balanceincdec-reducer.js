import {getApiPlayers} from "../API/Api";


const GET_PLAYERS = "GET_PLAYERS";
const GET_RESULT_PLAYERS_FOR_LOADER = "GET_RESULT_PLAYERS_FOR_LOADER";

let initialization = {
    AllPlayers: [],
    Result: ''
};

let GetPlayersReducer = (state = initialization, action) => {

    switch (action.type) {
        case GET_PLAYERS:
            return {
                ...state,
                AllPlayers: [...action.data]
            };
        case GET_RESULT_PLAYERS_FOR_LOADER:
            return {
                ...state,
                Result: action.result
            };
        default:
            return state;
    }
}
export let getPlayersForAll = (data) => ({type: GET_PLAYERS, data});
export let getGamesForAllLoaderPlayers = (result) => ({type: GET_RESULT_PLAYERS_FOR_LOADER, result});

export const authPlayersThunk = () =>
    async (dispatch) => {

        let response = await getApiPlayers.getPlayersForApi();
        if (response.status === 200) {
            dispatch(getPlayersForAll(response.data));
            dispatch(getGamesForAllLoaderPlayers(response.data.Result));
        }
    }


export default GetPlayersReducer;
