
const initialState = {name: ""}

const UsReducer = ( state = initialState, action ) => {

        switch (action.type) {
            case "CHANGE_NAME":
                const {n} = action;
                return {name: n};
        
            default:
                return state ;
        }
    
}

export default UsReducer