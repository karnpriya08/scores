import { ADD_PLAYER, GET_ALL_PLAYERS, REMOVE_PLAYER } from "./actionType";
// import * as actions from "./actiontypes";
import axios from "axios";

export const getPlayerData = () =>{
    return (dispacth) =>{
      try{
      axios.get('https://la-liga2.p.rapidapi.com/players',{
        headers: {
              'x-rapidapi-key': '82331ddf51msh2f447a814291ab4p1c6c4fjsn2ebb0e50b157',
    'x-rapidapi-host': 'la-liga2.p.rapidapi.com'
          }
      }).then((res)=>{
        console.log(res);
        
        dispacth(((data)=>{
        return{
          type: GET_ALL_PLAYERS,
          payload:{
          response: data,
          }
        }
        })(res.data)
      );
      })
      }catch(err){
  console.log(err);
      }
    }
  }
  
  export const addPlayer = (data) =>{
    return{
      type: ADD_PLAYER,
    payload: data,
    }
  }

  export const DeleteUser = (index) => {
    return {type: REMOVE_PLAYER, payload: index}
  }
  