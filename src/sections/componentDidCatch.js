import React,  { Component } from 'react';

class TriggeringErrorButton extends Component {
    state = { throwError: false }

    render() {
        if (this.state.throwError) {
            throw new Error('Thrown error by button')
        }

        return (
            <div>
                <button onClick= {() => this.setState({ throwError: true })}>
                    Throw error!
                </button>
            </div>
        )
    }
}

class ComponentDidCatchExample extends Component {
    state = { hasError: false, errorMsg: '' }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch')
        console.log({ error, errorInfo })
        this.setState({ hasError: true, errorMsg: error.toString() })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <p>Error in component: {this.state.errorMsg}</p>
                    <button onClick= {() => this.setState({ hasError: false, errorMsg: '' })}>
                        Go back app
                    </button>
                </div>
            )
        }

        return (
            <div>
                <TriggeringErrorButton />
            </div>
        )
    }
}

export default ComponentDidCatchExample