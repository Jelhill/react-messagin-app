const USER_FORM_DETAILS = "USER_FORM_DETAILS"


export function getUserInputs(value) {
    return {
        type: USER_FORM_DETAILS,
        value
    }
}