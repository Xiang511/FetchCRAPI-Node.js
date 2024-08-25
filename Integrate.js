let pathoflegend_getData = require('./LocalRankings').pathoflegend_getData;
let player_getData = require('./player').player_getData;
let Getchests = require('./Getchests').Getchests;
let battleLog = require('./battleLog').battleLog;


async function main(){
    await player_getData();
    await pathoflegend_getData();
    await Getchests();
    await battleLog();
 }