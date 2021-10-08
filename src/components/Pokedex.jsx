import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css'
import PropTypes from 'prop-types'

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokeIndex: 0,
            pokemons: this.props.poke.map(pokemon => pokemon),
        };
        this.changePoke = this.changePoke.bind(this);
        this.typeFire = this.typeFire.bind(this);
        this.typePsychic = this.typePsychic.bind(this);
        this.changeAll = this.changeAll.bind(this);
    }

    changePoke() {
        if (this.state.pokeIndex < this.state.pokemons.length - 1) {
            this.setState((prevState) => ({
                pokeIndex: prevState.pokeIndex + 1,
            }));
        } else {
            this.setState({
                pokeIndex: 0,
            });
        }
    }

    typeFire() {
        const firePokemons = this.props.poke.filter(pokemon => pokemon.type === 'Fire')
        this.setState({
            pokeIndex: 0,
            pokemons: firePokemons,
        })
    }

    typePsychic() {
        const psychicPokemons = this.props.poke.filter(pokemon => pokemon.type === 'Psychic')
        this.setState({
            pokeIndex: 0,
            pokemons: psychicPokemons,
        })
    }

    changeAll({ target }) {
        this.setState({
            pokeIndex: 0,
            pokemons: this.props.poke,
        })
    }
    render() {

        return (
            <div className="containerPokemons">
                <Pokemon poke={this.state.pokemons[this.state.pokeIndex]}/>
                <button onClick={this.changePoke}>Próximo</button>
                <button onClick={this.changeAll}>ALL</button>
                <button onClick={this.typeFire}>Fire</button>
                <button onClick={this.typePsychic}>Psychic</button>
            </div>
        );
    }
}

Pokedex.propTypes = {
    poke: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Pokedex;
