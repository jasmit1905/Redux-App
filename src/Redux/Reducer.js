const initialState = {
    data: [],
    editdata: {}
}

const userReducer = (state = initialState, action) => {
    // console.log(action,'reducer=>>>>>>>>>>');

    switch (action.type) {
        case 'USER_SUBMIT':
            return {
                ...state, data: action.payload
            }

        case 'USER_EDIT':
            const editdata = state.data.find((item, index) => index === action.payload)
            return {
                ...state, editdata: editdata
            }

        case 'USER_DELETE':
            const deleteData = state.data.filter((item, index) => index !== action.payload)
            return {
                ...state, data: deleteData
            }

        default:
            break;
    }

}
export default userReducer;