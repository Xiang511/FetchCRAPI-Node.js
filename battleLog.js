import fetch from 'node-fetch';
import fs from 'fs';

async function battleLog(api_key,player_tag) {
    const url = `https://api.clashroyale.com/v1/players/${player_tag}/battlelog`;
    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + api_key
    };

    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status} ${response.statusText} Please check if your API key is correct, replace # with %23 in PlayerTag`);
        }

        const json = await response.json();
        fs.writeFile(`json/${player_tag}battleLog.json`, JSON.stringify(json), (err) => {
            if (err) {
            console.error(err);
            } else {
            
            }
        });
        console.log("battleLog.json created");
    } catch (error) {
        console.error(error.message);
    }
}
export { battleLog };