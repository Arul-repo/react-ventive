import * as actionTypes from "../Actions/ActionTypes";

// init docs state here
const docState ={
    files: []
}

const DocReducer = (state=docState, action) => {

    const readDocs = (state, action) => {
        return (state, {
            
        })
    }

    switch(action.type){
        case actionTypes.ATTACHMENT:
            return readDocs(state, action)
        default:
            return state;
    }
    
}

export default DocReducer;