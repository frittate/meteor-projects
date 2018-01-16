import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function(){
    Players.insert({
        name: 'Kat',
        score: 83,
    });
    console.log(Players.find().fetch());
});