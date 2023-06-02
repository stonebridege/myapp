const initialState = {
    show: true
};

const TabbarReducer = (prevState = initialState, action) => {
    let newState = {...prevState}
    switch (action.type) {
        case "hide-tabbar":
            newState.show = false
            return newState
        case "show-tabbar":
            newState.show = true
            return newState
        default:
            return prevState
    }
}

export default TabbarReducer