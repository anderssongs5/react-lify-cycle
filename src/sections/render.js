import React,  { Component } from 'react';

const HelloRender = () => <h2>Hi Render!!</h2>

class RenderExample extends Component {

    constructor(props) {
        console.log('constructor RenderExample')
        super(props)
        this.state = { message:'Initial message' }
    }

    UNSAFE_componentWillMount() {
        console.log('componentWillMount RenderExample')
    }

    render() {
        console.log('render RenderExample')
        return (
            <div>
                <h4>DOM element here</h4>
                <HelloRender/>
                <p>Just under a render component</p>
            </div>
        )
    }
}

export default RenderExample;