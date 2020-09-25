import React from "react";
// import PropTypes from "prop-types";


class ClassApp extends React.Component {

    constructor(p) {
        super(p);
        console.log("Hello, world!");
    }

    // 바뀌는 데이터를 담는 그릇, State
    state = {
        count: 0
    };

    // React re-render page for every setState execution
    plus = () => {
        this.setState(c => ({ count: c.count + 1 }));
    };

    minus = () => {
        this.setState(c => ({ count: c.count - 1 }));
    };

    /** Component Lifecycle Call stack
     *  - mounting
     *      constructor
     *      render
     *      componentDidMount
     *  - updating
     *      render
     *      componentDidUpdate
     *  - unmounting
     *      componentWillUnmount
     */

    componentDidMount() {
        console.log("rendered");
    }

    componentDidUpdate() {
        console.log("updated");
    }

    componentWillUnmount() {
        console.log("Goodbye, cruel world...!")
    }

    // React는 자동적으로 Class component의 render 메소드를 실행한다!
    render() {
        console.log("rendering");
        return <div>
            <h1>I'm a class component</h1>
            <div>
                <p>The number is : {this.state.count}</p>
                <button onClick={this.plus}>+</button>
                <button onClick={this.minus}>-</button>
            </div>
        </div>
    }
}

export default ClassApp