let pathoflegend_getData = require('./LocalRankings').pathoflegend_getData;

let player_getData = require('./player').player_getData;

pathoflegend_getData()
.then(() => {
    console.log("Local Rankings data fetched successfully!");
    
}).catch((error) => {
    console.error(error.message);
});

player_getData()
.then(() => {
    console.log("Player data fetched successfully!");   
})
.catch((error) => {
    console.error(error.message);
});