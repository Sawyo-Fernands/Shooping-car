

const STATE_INICIAL={
    showMessage:false,
    
}



export default function Reducer(state=STATE_INICIAL,action){

    switch(action.type){

        case "Show_Message":
            return  {...state,showMessage:true};
        
        case "Hide_Message":

            return {...state,showMessage:false};

        default: 
                return state;
        
    }


};

export  const ShowMessage=()=>{
    return{

    type:"Show_Message"
    }

}

export const HideMessage=()=>{
    return{

    type:"Hide_Message"
    }

}