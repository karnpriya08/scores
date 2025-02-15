import { ADD_PLAYER, GET_ALL_PLAYERS, REMOVE_PLAYER } from "./actionType";

const initState ={  
   playerData : [],
   
    Scores : []

}
const reducer = (state = initState, action) =>{

    switch(action.type){
      case GET_ALL_PLAYERS:
      return {...state, Players: action.payload.response}  
      case ADD_PLAYER:
      console.log(action.payload);
      return {...state, Scores: [...state.Scores, action.payload]}  
      
      default:
      return state;
    }
      
    }
    
    export default reducer;