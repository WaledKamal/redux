var initValues = {
    counter: 10
}

const reducer = (state = initValues, action) => {
    if (action.type == "increse") {
        return { counter: state.counter + 1 }
    } else if (action.type == "dicrese") {
        return { counter: state.counter - 1 }

    }
    return state
}

export default reducer;