import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
    _id: '1',
    name: 'Basti',
    score: 50,
}, {
    _id: '2',
    name: 'Kat',
    score: 99,
}, {
    _id: '3',
    name: 'Erik',
    score: 12,
}];

const renderPlayers = function(playersList){
    return playersList.map(function(player){
        return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
    });
};

Meteor.startup(function(){
    let headline = 'Score Keep';
    let name = 'Sebastian Martin';
    let jsx = (
    <div>
        <h1>{headline}</h1>
        {renderPlayers(players)} 
    </div>
    );
    ReactDOM.render(jsx,document.getElementById('app'));
});