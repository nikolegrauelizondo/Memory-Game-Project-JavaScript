import { Service } from "../service.js"
import { Score } from "../../models/score.js";

export class ScoresService extends Service {
    constructor(controller) {
        super(controller);
    }

    getScores() {
        var scores = [];
        var url = `https://nikole-memory-game.vercel.app/scores`;
        // var url = `http://localhost:3000/scores`;
        var request = new XMLHttpRequest();
        request.open('get', url);
        request.onload = () => {
            if (request.status === 200) {
                var data = JSON.parse(request.response);
                console.log(data);
                for (const key in data) {
                    const scoreData = data[key];
                    let score = new Score(scoreData.clicks, scoreData.score, scoreData.time, scoreData.username);
                    scores.push(score);
                }
            } else {
                console.error('Error requesting scores');
            }
            this.controller.showScores(scores);
        }
        request.send();
    }
}