import {textMessageTables} from "../API/Api";


const MESSAGE_TABLE = "MESSAGE_TABLE";


let initialization = {

    Result:''
};

let AddMessageTableReducer = (state = initialization, action) => {
    switch (action.type) {
        case MESSAGE_TABLE:
            return {
                ...state,
                Result: action.result
            };


        default:
            return state;
    }
}

export let addMessageForTable = (result) => ({type: MESSAGE_TABLE, result:result});


export const addMessageTableThunk=(name,message)=>
    async (dispatch)=>{
debugger
        let response = await textMessageTables.messageTextGamesForApi(name,message);
        if (response.data.Result === "ok") {
            dispatch(addMessageForTable(response.data.Result));

        }
    }

export default AddMessageTableReducer;
