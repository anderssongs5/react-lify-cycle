import React,  { Component } from 'react'

class ComponentDidMountExample extends Component {
    constructor(props) {
        console.log('constructor ComponentDidMountExample')
        super(props)
        this.state = { scrollY: 0 }
        //debugger
    }

    UNSAFE_componentWillMount() {
        console.log('componentWillMount ComponentDidMountExample')
        //debugger
    }

    componentDidMount() {
        console.log('componentDidMount ComponentDidMountExample')
        //debugger
        this.setState({ anotherState: 'Another State' })
        document.addEventListener('scroll', () => {
            this.setState({ scrollY : window.scrollY })
        });
    }

    render() {
        console.log('render ComponentDidMountExample')
        //debugger
        return (
            <div>
                <p>{ this.state.scrollY }</p>
                <p>This component shows how we can use the componentDidMount function</p>
                <p>{ this.state.anotherState }</p>
            </div>
        )
    }
}

export default ComponentDidMountExample