# FetchCRAPI-Node.js
![GitHub last commit](https://img.shields.io/github/last-commit/Xiang511/FetchCRAPI-Node.js?display_timestamp=committer&style=flat-square) ![GitHub commit activity](https://img.shields.io/github/commit-activity/y/Xiang511/FetchCRAPI-Node.js?style=flat-square) ![GitHub Created At](https://img.shields.io/github/created-at/Xiang511/FetchCRAPI-Node.js?style=flat-square) ![GitHub License](https://img.shields.io/github/license/Xiang511/FetchCRAPI-Node.js?style=flat-square)

This module utilizes a Node.js web scraping approach to fetch data from the Clash Royale API. The retrieved data is in JSON format, allowing users to easily customize the content they desire. Here's a usage example:
```
https://xiang511.com/hydromechanics/TCRS.html
```

## Require
 ```Node.js```
 
 ```Visual studio code```

 ## Features

- [x] Player personal information
- [x] Local ladder ranking information
- [ ]  Clan information
- [ ]  Global ladder ranking information

 ## Preparation

1. Go to [ClashRoyale](https://developer.clashroyale.com/#/) 
2. Log in and click My Account (top right corner)
3. Click "Create New KEY" => ``` The official needs your IP address, remember to check your IP first ``` 
4. Save your token (you will need it later)
5. Okay, we’re all set. Let’s start!

## Usage

1. ``` npm i fetchcrapi ```

2. Go to ```config.env``` Add your Token

3. There is some sample information in it
```
API_KEY= ``` your Token ````
local=57000228 ( You can check AreaCodeFile to find out )
player_tag=%2322R920J00 ( You can check in your game ) ```Due to transcoding issues all "#" must be converted to "%23" ```
player_name=Xiang  ( your name )
```
4.```node integrate.js```

5.The generated data will be displayed in the json folder

6.Done

## License

This project is published under Apache-2.0 license




