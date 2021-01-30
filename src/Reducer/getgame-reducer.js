import {getApiGames} from "../API/Api";

const GET_GAMES = "GET_GAMES";



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


        default:
            return state;
    }
}
export let getGamesForAll = (data) => ({type: GET_GAMES, data:data});



export const authThunk=()=>
    async (dispatch)=>{
        let response = await getApiGames.getGamesForApi();
        if (response.status === 200) {
            dispatch(getGamesForAll(response.data));
        }
    }







export default GetGamesReducer;
