import React,  { Component } from 'react';

class ComponentWillMountExample extends Component {

    constructor(props) {
        console.log('constructor ComponentWillMountExample');
        super(props);
        this.state = { message: 'Initial message' }
    }

    UNSAFE_componentWillMount() {
        console.log('componentWillMount ComponentWillMountExample')
        // this.setState({ message: 'Modified message'});
    }

    render() {
        console.log('render ComponentWillMountExample')
        return (
            <p>{this.state.message}</p>
        )
    }
}

export default ComponentWillMountExample;