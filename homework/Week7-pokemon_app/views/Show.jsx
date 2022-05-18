const React = require('react');


    class Show extends React.Component {
        render(){
            const pokemon = this.props.pokemon
            pokemon.img.includes('.jpg')? pokemon.img: pokemon.img += '.jpg';
            console.log(pokemon.img)
            return (
                <>
                <h1>Gotta Catch 'Em All</h1>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.img}></img><br></br>
                <a href={'/pokemon'}>Back</a>
                </>
            );
        }
    }

module.exports = Show;