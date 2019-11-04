import React,  { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGES= {
    cat: 'https://goo.gl/PoQQXb',
    dolphin: 'https://goo.gl/BbiKCd',
    panda: 'https://goo.gl/oNbtoq'
}

const animals = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends /*PureComponent*/ Component {
    state = { src: ANIMAL_IMAGES[this.props.animal] }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.clear()
        console.log('1. componentWillReceiveProps UpdateCycleExample')
        console.log(nextProps)
        if (this.props.animal !== nextProps.animal) {
            console.log('condition UpdateCycleExample')
            this.setState({ src: ANIMAL_IMAGES[nextProps.animal] });
        }
    }

    shouldComponentUpdate(nextProps) {
        console.log('2. shouldComponentUpdate')
        console.log('Last: ', this.props.animal)
        console.log('New: ', nextProps.animal)

        return this.props.animal !== nextProps.animal
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('3. componentWillUpdate')
        console.log('nextProps', nextProps)
        console.log('nextState', nextState)
        const img = document.querySelector('img')
        console.log('From img element', { alt: img.alt })

        img.animate([ {
            filter: 'blur(0px)'
        }, {
            filter: 'blur(5px)'
        } ], {
            duration: 1000,
            easing: 'ease'
        } )
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('4. componentDidUpdate')
        const img = document.querySelector('img')
        img.animate([ {
            filter: 'blur(5px)'
        }, {
            filter: 'blur(0px)'
        } ], {
            duration: 2500,
            easing: 'ease'
        })
        console.log('From img element', { alt: img.alt })
    }

    render() {
        console.log('-> render AnimalImage')
        return (
            <div>
                <p>Selected {this.props.animal}</p>
                <img 
                    alt={this.props.animal}
                    src={this.state.src}
                    width='250' 
                />
                
            </div>
        )
    }
}

AnimalImage.propTypes = {
    //animal: PropTypes.oneOf(['cat', 'dolphin', 'panda'])
    animal: PropTypes.oneOf(animals)
}

class UpdateCycleExample extends /*Component*/ PureComponent {
    state = { animal: 'panda' }

    _renderAnimalButton = (animal) => {
        return (
            <button 
                //disabled={animal === this.state.animal}
                key={animal} 
                onClick= {() => this.setState({ animal })}
            >
                { animal }
            </button>
        )
    }

    render() {
        console.log('-> render UpdateCycleExample')
        return (
            <div>
                {/*<button onClick= {() => this.setState({ animal: 'panda'})}>
                    Panda
                </button>
                <button onClick= {() => this.setState({ animal: 'cat'})}>
                    Cat
                </button>
                <button onClick= {() => this.setState({ animal: 'dolphin'})}>
                    Dolphin
                </button>*/}
                {/*{this._renderAnimalButton('panda')}
                {this._renderAnimalButton('cat')}
                {this._renderAnimalButton('dolphin')}*/}
                
                { animals.map(this._renderAnimalButton) }
                <AnimalImage animal = {this.state.animal} />
            </div>
        )
    }
}

export default UpdateCycleExample