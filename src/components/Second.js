import { connect } from "react-redux";

const Second = (props) => {

    console.log(props)

    return (

        <section>
            <h2>Second Component</h2>
            <h4>{props.counter}</h4>
            <button>+</button>
            <button>-</button>
        </section>)
}


function mapStatetoProps(state){
 return{
    counter : state.counter
 }
}

export default connect(mapStatetoProps)(Second);

