const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const dbUrl = 'https://memory-game-project-javascript-default-rtdb.firebaseio.com/';

const food = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🍍', '🥥', '🥝', '🍅', '🥑', '🍆', '🌶', '🥒', '🥦', '🌽', '🥕', '🥗', '🥔', '🍠', '🥜', '🍯', '🍞', '🥐', '🥖', '🥨', '🥞', '🧀', '🍗', '🍖', '🥩', '🍤', '🥚', '🍳', '🥓', '🍔', '🍟', '🌭', '🍕', '🍝', '🥪', '🥙', '🌮', '🌯', '🍜', '🥘', '🍲', '🥫', '🍥', '🍣', '🍱', '🍛', '🍙', '🍚', '🍘', '🥟', '🍢', '🍡', '🍧', '🍨', '🍦', '🍰', '🎂', '🥧', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🥠', '🍵', '🥣', '🍼', '🥤', '🥛', '🍺', '🍻', '🍷', '🥂', '🥃', '🍸', '🍹', '🍾', '🍶', '🥄', '🍴', '🍽', '🥢', '🥡'];

const flags = ['🏳', '🏴', '🏁', '🚩', '🎌', '🏴‍☠️', '🏳️‍🌈', '🏳️‍⚧️', '🇦🇨', '🇦🇩', '🇦🇪', '🇦🇫', '🇦🇬', '🇦🇮', '🇦🇱', '🇦🇲', '🇦🇴', '🇦🇶', '🇦🇷', '🇦🇸', '🇦🇹', '🇦🇺', '🇦🇼', '🇦🇽', '🇦🇿', '🇧🇦', '🇧🇧', '🇧🇩', '🇧🇪', '🇧🇫', '🇧🇬', '🇧🇭', '🇧🇮', '🇧🇯', '🇧🇱', '🇧🇲', '🇧🇳', '🇧🇴', '🇧🇶', '🇧🇷', '🇧🇸', '🇧🇹', '🇧🇼', '🇧🇾', '🇧🇿', '🇨🇦', '🇨🇨', '🇨🇩', '🇨🇫', '🇨🇬', '🇨🇭', '🇨🇮', '🇨🇰', '🇨🇱', '🇨🇲', '🇨🇳', '🇨🇴', '🇨🇺', '🇨🇻', '🇨🇼', '🇨🇽', '🇪🇸', '🇪🇷', '🇪🇭', '🇪🇬', '🇪🇪', '🇪🇨', '🇩🇿', '🇩🇴', '🇩🇲', '🇩🇰', '🇩🇯', '🇩🇪', '🇨🇿', '🇨🇾', '🇪🇹', '🇪🇺', '🇫🇮', '🇫🇯', '🇫🇰', '🇫🇲', '🇫🇴', '🇫🇷', '🇬🇦', '🇬🇧', '🇬🇩', '🇬🇪', '🇬🇫', '🇬🇬', '🇬🇭', '🇬🇮', '🇭🇺', '🇭🇹', '🇭🇷', '🇭🇳', '🇭🇰', '🇬🇾', '🇬🇼', '🇬🇺', '🇬🇹', '🇬🇸', '🇬🇷', '🇬🇶', '🇬🇵', '🇬🇳', '🇬🇲', '🇬🇱', '🇮🇨', '🇮🇩', '🇮🇪', '🇮🇱', '🇮🇲', '🇮🇳', '🇮🇴', '🇮🇶', '🇮🇷', '🇮🇸', '🇮🇹', '🇯🇪', '🇯🇲', '🇯🇴', '🇯🇵', '🇰🇪', '🇱🇷', '🇱🇰', '🇱🇮', '🇱🇨', '🇱🇧', '🇱🇦', '🇰🇿', '🇰🇾', '🇰🇼', '🇰🇷', '🇰🇵', '🇰🇳', '🇰🇲', '🇰🇮', '🇰🇭', '🇰🇬', '🇱🇸', '🇱🇹', '🇱🇺', '🇱🇻', '🇱🇾', '🇲🇦', '🇲🇨', '🇲🇩', '🇲🇪', '🇲🇬', '🇲🇭', '🇲🇰', '🇲🇱', '🇲🇲', '🇲🇳', '🇲🇴', '🇳🇬', '🇳🇫', '🇳🇪', '🇳🇨', '🇳🇦', '🇲🇿', '🇲🇾', '🇲🇽', '🇲🇼', '🇲🇻', '🇲🇺', '🇲🇹', '🇲🇸', '🇲🇷', '🇲🇶', '🇲🇵', '🇳🇮', '🇳🇱', '🇳🇴', '🇳🇵', '🇳🇷', '🇳🇺', '🇳🇿', '🇴🇲', '🇵🇦', '🇵🇪', '🇵🇫', '🇵🇬', '🇵🇭', '🇵🇰', '🇵🇱', '🇵🇲', '🇸🇧', '🇸🇦', '🇷🇼', '🇷🇺', '🇷🇸', '🇷🇴', '🇷🇪', '🇶🇦', '🇵🇾', '🇵🇼', '🇵🇹', '🇵🇸', '🇵🇷', '🇵🇳', '🇸🇨', '🇸🇩', '🇸🇪', '🇸🇬', '🇸🇭', '🇸🇮', '🇸🇰', '🇸🇱', '🇸🇲', '🇸🇳', '🇸🇴', '🇸🇷', '🇸🇸', '🇸🇹', '🇸🇻', '🇸🇽', '🇹🇹', '🇹🇷', '🇹🇴', '🇹🇳', '🇹🇲', '🇹🇱', '🇹🇰', '🇹🇯', '🇹🇭', '🇹🇬', '🇹🇫', '🇹🇩', '🇹🇨', '🇹🇦', '🇸🇿', '🇸🇾', '🇹🇻', '🇹🇼', '🇹🇿', '🇺🇦', '🇺🇬', '🇺🇳', '🇺🇸', '🇺🇾', '🇺🇿', '🇻🇦', '🇻🇨', '🇻🇪', '🇻🇬', '🇻🇮', '🇻🇳', '🇻🇺', '🇿🇼', '🇿🇲', '🇿🇦', '🇾🇹', '🇾🇪', '🇽🇰', '🇼🇸', '🇼🇫'];

const faces = ['😀', '😬', '😁', '😂', '😃', '😄', '🤣', '😅', '😆', '😇', '😉', '😊', '🙂', '🙃', '😋', '😌', '😍', '😘', '😗', '😙', '😚', '🤪', '😜', '😝', '😛', '🤑', '😎', '🤓', '🧐', '🤠', '🤗', '🤡', '😏', '😶', '😐', '😑', '😒', '🙄', '🤨', '🤔', '🤫', '🤭', '🤥', '😳', '😞', '😟', '😠', '😡', '🤬', '😔', '😕', '🙁', '😣', '😖', '😫', '😩', '😤', '😮', '😱', '😨', '😰', '😯', '😦', '😧', '😢', '😥', '😪', '🤤', '😓', '😭', '🤩', '😵', '😲', '🤯', '🤐', '😷', '🤕', '🤒', '🤮', '🤢', '🤧', '😴', '😈', '👿', '👹', '👺', '💩', '👻', '💀', '👽', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'];

const animals = ['🦍', '🐣', '🐥', '🦓', '🦒', '🦌', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦗', '🕷', '🦂', '🐢', '🐍', '🦎', '🦀', '🦑', '🐙', '🦐', '🐠', '🐟', '🐡', '🐬', '🦈', '🐳', '🐋', '🐊', '🐆', '🐅', '🐃', '🐂', '🐄', '🐪', '🐫', '🐘', '🦏', '🐐', '🐏', '🐑', '🐎', '🐖', '🦇', '🐓', '🦃', '🕊', '🦅', '🦆', '🦉', '🐕', '🐩', '🐈', '🐇', '🐀', '🐁', '🐿', '🦔', '🦕', '🦖'];

const nature = ['🌵', '🎄', '🌲', '🌳', '🌴', '🌱', '🌿', '🍀', '🎍', '🎋', '🍃', '🍂', '🍁', '🌾', '🌺', '🌻', '🌹', '🥀', '🌷', '🌼', '🌸', '💐', '🍄', '🌰', '🐚'];

app.get('/cards/:difficulty/:theme', (request, response) => {

    var data = { cards: [] };

    if (request.params !== null) {
        if (request.params.difficulty !== null && request.params.theme !== null) {
            const difficulty = request.params.difficulty;
            const theme = request.params.theme;
            var cards = getCards(difficulty, theme);
            cards.forEach(card => {
                data.cards.push(card);
            });

            cards.forEach(card => {
                data.cards.push(card);
            });

            shuffleArray(data.cards);
        }
    }

    response.send(JSON.stringify(data));
});

app.get('/scores', (request, response) => {
    const url = 'https://memory-game-project-javascript-default-rtdb.firebaseio.com/data/scores.json';
    axios.get(url).then(function (result) {
        console.log(result.data);
        response.send(result.data);
    }).catch(function (error) {
        console.log(error);
        response.send('Error getting scores');
    }).finally(function () {
    });
});

app.post('/score', (request, response) => {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        const jsonData = Buffer.concat(body).toString();
        if (jsonData !== undefined) {
            const url = 'https://memory-game-project-javascript-default-rtdb.firebaseio.com/data/scores.json';
            const score = JSON.parse(jsonData);
            if (score !== undefined &&
                score.clicks !== undefined &&
                score.time !== undefined &&
                score.score !== undefined) {
                axios.post(url, score).then(function (result) {
                    response.send('Score saved');
                }).catch(function (error) {
                    response.send(error);
                });
            } else {
                response.send('Score undefined or null');
            }
        } else {
            response.send('request.body undefined or null');
        }
    });
})

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getIconIndex(iconIndex, iconList) {
    let newIconIndex = randomInteger(0, (iconList.length - 1));
    if (iconIndex === newIconIndex) {
        return getIconIndex(iconIndex, iconList);
    }
    return newIconIndex;
}

function getCards(difficulty, theme) {
    var cards = [];
    var iconList = null;
    switch (theme) {
        case 'food':
            iconList = food;
            break;
        case 'flags':
            iconList = flags;
            break;
        case 'faces':
            iconList = faces;
            break;
        case 'animals':
            iconList = animals;
            break;
        case 'nature':
            iconList = nature;
            break;
        default:
            iconList = food;
            break;
    }

    for (let i = 0; i < difficulty; i++) {
        var iconIndex = getIconIndex(-1, iconList);
        var card = {
            "isDiscovered": false,
            "icon": iconList[iconIndex],
            "id": iconIndex
        }
        cards.push(card);
    }
    return cards;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

module.exports = app;