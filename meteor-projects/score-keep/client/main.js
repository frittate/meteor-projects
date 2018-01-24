import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players, calculatePlayerPositions} from './../imports/api/players';

import App from './../imports/ui/App';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      'Nunito:regular,bold',
      'Lato:regular,bold,italic',
      'Roboto:light,regular,bold',
    ],
  },
});

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find({}, {
            sort: {
                score: -1,
            }
        }).fetch(); //converting the DB into an array!

        let positionedPlayers = calculatePlayerPositions(players);
        let title = 'Score Keep';
        let subTitle = 'Made by frittate';
        ReactDOM.render(<App title={title} subTitle={subTitle} players={positionedPlayers}/>,document.getElementById('app'));
    });
});