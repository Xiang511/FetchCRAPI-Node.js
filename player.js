const fs = require('fs');
const dotenv = require('dotenv');
const path = require("path");

dotenv.config({path:"./config.env"}); //讀取環境變數
let api_key = process.env.API_KEY;
let player_tag = process.env.player_tag;
let player_name = process.env.player_name;

async function player_getData() {
    const url = `https://api.clashroyale.com/v1/players/${player_tag}`;
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
        fs.writeFile(`json/${player_name}.json`, JSON.stringify(json), (err) => {
            if (err) {
            console.error(err);
            } else {
            
            }
        });
    } catch (error) {
        console.error(error.message);
    }
}

player_getData()

exports.player_getData = player_getData;