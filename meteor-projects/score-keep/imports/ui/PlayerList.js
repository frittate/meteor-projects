import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component {
    renderPlayers(){
        //console.log(this.props.players.length);

        if(this.props.players.length === 0) {
            return (
                <div className="item item__message">
                    <p>Add a new name to get started!</p>
                </div>
            );
        } else {
            return this.props.players.map((player) => {
                return <Player key={player._id} player={player}/>
            });
        }
    }

    render(){
        return (
            <div>
                <FlipMove maintainContainerHeight={true} easing="ease">
                  {this.renderPlayers()}
                </FlipMove>
            </div>
            
        )
    }
}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired,
}; 
