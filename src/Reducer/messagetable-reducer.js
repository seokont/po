import {addTableApiGames} from "../API/Api";


const ADD_TABLE = "ADD_TABLE";
const ADD_TABLE_RESULT_OK = "ADD_TABLE_RESULT_OK";

let initialization = {
    Error:'',
    Result:''
};

let AddTableReducer = (state = initialization, action) => {
    switch (action.type) {
        case ADD_TABLE:
            return {

                ...state,
                Error: action.result
            };

        case ADD_TABLE_RESULT_OK:
            return {

                ...state,
                Result: action.result
            };

        default:
            return state;
    }
}

export let addTableForGames = (result) => ({type: ADD_TABLE, result:result});
export let addTableForGamesResult = (result) => ({type: ADD_TABLE_RESULT_OK, result:result});

export const addTableThunk=(args)=>
    async (dispatch)=>{

        let response = await addTableApiGames.addTableForApi(args);

        if (response.data.Result === "Error") {
            dispatch(addTableForGames(response.data.Error));
            dispatch(addTableForGamesResult(response.data.Result));
        } else{
            dispatch(addTableForGamesResult(response.data.Result));
            dispatch(addTableForGames(''));
        }
    }

export default AddTableReducer;
