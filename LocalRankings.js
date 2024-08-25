const fs = require('fs');
const dotenv = require('dotenv');
const path = require("path");

dotenv.config({path:"./config.env"}); //讀取環境變數
let api_key = process.env.API_KEY;
let local = process.env.local;
let Local =""
fs.readFile("./json/AreaCodeFile.json", (err, data) => {
    if (err) {
        console.error(err);
    } else {
        let json = JSON.parse(data);
        json.items.forEach(item => {
            if (item.id == local) {
                Local = item.name               
                return Local;
            }
        });
        
    }
}); 



async function pathoflegend_getData() {
    const url = `https://api.clashroyale.com/v1/locations/${local}/pathoflegend/players`;
    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + api_key
    };

    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        fs.writeFile(`json/${Local}RankingsList.json`, JSON.stringify(json), (err) => {
            if (err) {
            console.error(err);
            } else {
            
            }
        });
    } catch (error) {
        console.error(error.message);
    }
}

pathoflegend_getData();

exports.pathoflegend_getData = pathoflegend_getData;