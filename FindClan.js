import fetch from 'node-fetch';
import fs from 'fs';


async function Clan_getData(api_key,clans) {
    encodeURI(clans);
    const url = `https://api.clashroyale.com/v1/clans?name=${clans}`;
    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + api_key
    };

    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        fs.writeFile(`json/${decodeURIComponent(clans)}.json`, JSON.stringify(json), (err) => {
            if (err) {
            console.error(err);
            } else {
            
            }
        });
        console.log("clans.json created");
    } catch (error) {
        console.error(error.message);
    }
}

export { Clan_getData };