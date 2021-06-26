const initialState = {
    formDetails: {},
    users: []
}

const userReducer = (state = initialState, action) => {
    const newState = { ...state }

    if(action.type === "USER_FORM_INPUTS") {
        Object.assign(newState.formDetails, action.value)
    }

    if(action.type === "SAVE_USER"){
        newState.users = newState.users.concat(action.value)
    }

    return newState
}

export default userReducer