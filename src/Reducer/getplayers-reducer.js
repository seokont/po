import {getApiGames} from "../API/Api";

const GET_GAMES = "GET_GAMES";
const GET_RESULT_FOR_LOADER = "GET_RESULT_FOR_LOADER";

let initialization = {
    AllRingGames: [],
    Result:''
};

let GetGamesReducer = (state = initialization, action) => {

    switch (action.type) {
        case GET_GAMES:
            return {
                ...state,
                AllRingGames: [...action.data]
            };
        case GET_RESULT_FOR_LOADER:
            return {
                ...state,
                Result: action.result
            };

        default:
            return state;
    }
}
export let getGamesForAll = (data) => ({type: GET_GAMES,  data});
export let getGamesForAllLoader = (result) => ({type: GET_RESULT_FOR_LOADER, result});

export const authThunk = () =>
    async (dispatch) => {
        let response = await getApiGames.getGamesForApi();
        if (response.status === 200) {
            dispatch(getGamesForAll(response.data));
            dispatch(getGamesForAllLoader(response.data.Result));
        }
    }


export default GetGamesReducer;
