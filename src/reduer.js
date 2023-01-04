//[] inital state
let lastId=0;

export default function reducer(state=[],action){
    if(action.type==="bugAdded"){
        return [
            ...state,
            {
                id:++lastId,
                description:action.payload.description,
                resolved:false
            }
       ];
    }
    else if(action.type==="bugRemoved"){
        return state.filter((bug)=>{
            return bug.id != action.payload.id;
        });
    }

    //if the type of action is neither of the mentioned above
    return state; //return the current state
}

