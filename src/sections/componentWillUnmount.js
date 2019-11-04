import React,  { Component } from 'react';

class ComponentToBeUnmounted extends Component {
    state = { windowWidth: 0 }

    _updateStateWithWindowWidth = () => {
        this.setState({ windowWidth: document.body.clientWidth })
    }

    componentDidMount() {
        this._updateStateWithWindowWidth()
        window.addEventListener('resize',
        this._updateStateWithWindowWidth)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        window.removeEventListener('resize', this._updateStateWithWindowWidth)
    }

    render() {
        return (
            <div>
                <p>Component to be unmounted</p>
                <p>Window width: {this.state.windowWidth}</p>
            </div>
        )
    }
}

class ComponentWillUnmountExample extends Component {
    state = { showComponent: true }

    render() {
        if (this.state.showComponent) {
            return (
                <div>
                    <ComponentToBeUnmounted />
                    <button onClick= {() => this.setState({ showComponent: false})}>
                        Unmount component
                    </button>
                </div>
            )
        }

        return (
            <p>Unmounted component</p>
        )
    }
}

export default ComponentWillUnmountExample