// 1.定义初始状态
const initialState = {
    list: []
};

const CinemaListReducer = (prevState = initialState, action) => {
    let newState = {...prevState}
    switch (action.type) {
        case "change-list":
            newState.list = action.payload
            return newState
        default:
            return prevState
    }
}

export default CinemaListReducer