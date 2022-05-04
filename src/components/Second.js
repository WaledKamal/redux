import { connect } from "react-redux";

const Second = (props) => {

    console.log(props)

    return (

        <section>
            <h2>Second Component</h2>
            <h4>{props.counter}</h4>
            <button onClick={props.increse}>+</button>
            <button onClick={props.dicrese}>-</button>
        </section>)
}



function mapStatetoProps(state) {
    return {
        counter: state.counter
    }
}

const actions = [
    {
        type: 'increse'
    },
    {
        type: 'dicrese'
    }
]

function mapDispatch(dispatch) {
    return {
        increse: () => dispatch(actions[0]),
        dicrese: () => dispatch(actions[1])
    }
}

export default connect(mapStatetoProps, mapDispatch)(Second);

