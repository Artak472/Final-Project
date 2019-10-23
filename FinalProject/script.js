function setup() {
    var socket = io();
    var side = 30;
    var matrix = [];
    
    var weatherElement = document.getElementById('weather');
    var grassCountElement = document.getElementById('grassCount');
    var grassLiveCountElement = document.getElementById('grassLiveCount');
    var grassEaterCountElement = document.getElementById('grassEaterCount');
    var grassEaterLiveCountElement = document.getElementById('grassEaterLiveCount');
    var predCountElement = document.getElementById('predCount');
    var predLiveCountElement = document.getElementById('predLiveCount');
    var peopleCountElement = document.getElementById('peopleCount');
    var peopleLiveCountElement = document.getElementById('peopleLiveCount');
    var snakeCountElement = document.getElementById('snakeCount');
    var snakeLiveCountElement = document.getElementById('snakeLiveCount');
    var peacCountElement = document.getElementById('peacCount');
    var peacLiveCountElement = document.getElementById('peacLiveCount');
    var peacFCountElement = document.getElementById('peacFCount');
    var peacFLiveCountElement = document.getElementById('peacFLiveCount');

    socket.on("data", drawCreatures);

    function drawCreatures(data) {

        matrix = data.matrix;
        weatherElement.innerText = data.weather;
        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;
        grassEaterCountElement.innerText = data.eatCounter;
        grassEaterLiveCountElement.innerText = data.eatLiveCounter;
        predCountElement.innerText = data.predCounter;
        predLiveCountElement.innerText = data.predLiveCounter;
        peopleCountElement.innerText = data.peopleCounter;
        peopleLiveCountElement.innerText = data.peopleLiveCounter;
        snakeCountElement.innerText = data.snakeCounter;
        snakeLiveCountElement.innerText = data.snakeLiveCounter;
        peacCountElement.innerText = data.peacCounter;
        peacLiveCountElement.innerText = data.peacLiveCounter;
        peacFCountElement.innerText = data.peacFCounter;
        peacFLiveCountElement.innerText = data.peacFLiveCounter;

        createCanvas(matrix[0].length * side, matrix.length * side)

        background('#acacac');

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if(data.weather == "summer"){
                        fill("green");
                    }else if (data.weather == "autumn"){
                        fill("orange");
                    }else if (data.weather == "winter"){
                        fill("white");
                    }else if(data.weather == "spring"){
                        fill("#2fff02");
                    }
                } else if (matrix[i][j] == 2) {
                    if(data.weather == "summer"){
                        fill("yellow");
                    }else if (data.weather == "autumn"){
                        fill("#d1d100");
                    }else if (data.weather == "winter"){
                        fill("#ffff7a");
                    }else if(data.weather == "spring"){
                        fill("#e3e33b");
                    }
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                } else if (matrix[i][j] == 3) {
                    if(data.weather == "summer"){
                        fill("red");
                    }else if (data.weather == "autumn"){
                        fill("#c70000");
                    }else if (data.weather == "winter"){
                        fill("#ff7373");
                    }else if(data.weather == "spring"){
                        fill("#e64545");
                    }
                } else if (matrix[i][j] == 4) {
                    if(data.weather == "summer"){
                        fill("purple");
                    }else if (data.weather == "autumn"){
                        fill("#5a00ad");
                    }else if (data.weather == "winter"){
                        fill("#b66afc");
                    }else if(data.weather == "spring"){
                        fill("#842bd6");
                    }
                } else if (matrix[i][j] == 5) {
                    if(data.weather == "summer"){
                        fill("#ff00b0");
                    }else if (data.weather == "autumn"){
                        fill("#ff03cd");
                    }else if (data.weather == "winter"){
                        fill("#ff82d8");
                    }else if(data.weather == "spring"){
                        fill("#ff42c4");
                    }
                } else if (matrix[i][j] == 6) {
                    if(data.weather == "summer"){
                        fill("#5c2506");
                    }else if (data.weather == "autumn"){
                        fill("#541f00");
                    }else if (data.weather == "winter"){
                        fill("#78503a");
                    }else if(data.weather == "spring"){
                        fill("#a33a00");
                    }
                } else if (matrix[i][j] == 7) {
                    if(data.weather == "summer"){
                        fill("#cf6c08");
                    }else if (data.weather == "autumn"){
                        fill("#a35507");
                    }else if (data.weather == "winter"){
                        fill("#e69340");
                    }else if(data.weather == "spring"){
                        fill("#d96f04");
                    }
                } else if (matrix[i][j] == 8) {
                    fill("black");
                    
                }
                rect(j * side, i * side, side, side);        
            }
        }
    }
}