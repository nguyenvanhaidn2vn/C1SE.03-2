import {USER_LOGIN,USER_LOGOUT} from '../../action/types'
const intitalState ={
    user:null,
    isAuthentication:false
}
const user = (state=intitalState,action)=>{
    switch(action.type){
        case USER_LOGIN: {
            return {user:action.payload,isAuthentication:true}
        }
        case USER_LOGOUT:{
            return {user:null,isAuthentication:false}
        }
        default:return state
    }

}
export default user;