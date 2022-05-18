const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

    class Index extends React.Component {
        render(){
            const {pokemon} = this.props;
            pokemon.forEach(e => {
                e.name = e.name[0].toUpperCase() + e.name.slice(1);
            });
            
            return (
                <>
                <h1>See All The Pokemon!</h1>
                <div style= {myStyle}>My First React Component!</div>
                <ul>
                    {pokemon.map((pokemon,i) => {
                        return (
                            <li>
                            <a href={`/pokemon/${i}`} >{pokemon.name}</a><br></br>
                            </li>
                        )}
                    )}
                </ul>
                </>
            );
        }
    }

module.exports = Index;