import {getTokenPlayer,logoutPlayer} from "../API/Api";








const ADD_TOKEN = "ADD_TOKEN";
const PASSWORD_ERROR = "PASSWORD_ERROR";
const LOGIN_ERROR = "LOGIN_ERROR";


let initialization = {
    
    Token:'',
    Password:'',
    Login:'',
};

let TokenReducer = (state = initialization, action) => {
    switch (action.type) {
        case ADD_TOKEN:
            return {

                ...state,
                Token: action.token
            }; 
            case PASSWORD_ERROR:
            return {

                ...state,
                Password: action.token
            };    
            case LOGIN_ERROR:
            return {

                ...state,
                Login: action.token
            };           

        default:
            return state;
    }
}

export let addPlayerToken = (token) => ({type: ADD_TOKEN, token});
export let loginError = (token) => ({type: LOGIN_ERROR, token});
export let passwordError = (token) => ({type: PASSWORD_ERROR, token});


export const addPlayerTokenThunk=(args)=>
    async (dispatch)=>{
        
        let response = await getTokenPlayer.getPlayerToken(args);
        
        if(response.data === 'Login Error' )  {
            dispatch( loginError(response.data))
        } 
        
            if(response.data === 'Password Error' )  {
                dispatch(passwordError(response.data))
            } 
               
            if(response.data !== 'Login Error' && response.data !== 'Password Error' && response.data !== ''){
                dispatch(addPlayerToken(response.data));
                localStorage.setItem("token", response.data);

            }          
         
    }




    export const logoutThunk=(args)=>
    
    async (dispatch)=>{
    
        let response = await logoutPlayer.logoutPlayerAdd(args);
        
        
               
        if(response.data.Result === 'Ok'){
                dispatch(addPlayerToken(''));
                localStorage.setItem("token", '');
        }    
        
        if(response.data.Result === "Error"){
            dispatch(addPlayerToken(''));
            localStorage.setItem("token", '');
    }  
         
    }


    

export default TokenReducer;
