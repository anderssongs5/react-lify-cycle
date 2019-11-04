import React,  { Component } from 'react'
import ComponentWillMountExample from './sections/componentWillMount'
import RenderExample from './sections/render'
import ComponentDidMountExample from './sections/componentDidMount'
import UpdateCycleExample from './sections/updateCycle'
import ComponentWillUnmountExample from './sections/componentWillUnmount'
import ComponentDidCatchExample from './sections/componentDidCatch'
import './App.css'

class App extends Component {
    render() {
    return (
      <div className="App">
        <h1>ComponentWillMount</h1>
        <ComponentWillMountExample />
        <br/><br/>
        <h1>Render</h1>
        <RenderExample />
        <br/><br/>
        <h1>ComponentDidMount</h1>
        <ComponentDidMountExample />
        <br/><br/>
        <h1>UpdateCycle</h1>
        <UpdateCycleExample />
        <br/><br/>
        <h1>ComponentWillUnmount</h1>
        <ComponentWillUnmountExample />
        <br/><br/>
        <h1>ComponentDidCatch</h1>
        <ComponentDidCatchExample />
      </div>
    );
  }
}

export default App;
