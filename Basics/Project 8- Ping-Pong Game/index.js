document.addEventListener("DOMContentLoaded", () => {

    let table = document.getElementById('ping-pong-table');
    let ball = document.getElementById("ball"); //targeting the ball element

    //here the ballX and ballY will be helping us to set a starting point of ball w.r.t table 
    let ballX = 50; //distance of the top of the ball w.r.t ping pong table
    let ballY = 50; //distance of the left of the ball w.r.t. ping pong table

    let dx = 2; // displacement factor in x-direction, 2 -> you will displace by 2 px in +x direction, -2 -> you will displace by 2px in -ve x direction
    let dy = 2; // displacemenet factor in y-direction, 2 -> you will displace by 2 px in +y direction, -2 -> you will displace by 2px in -ve y direction
    
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
    setInterval(function exec() {
    
        ballX += dx;
        ballY += dy;

        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;

        // if(ballX > 600-20 || ballX <= 0) dx *= -1;
        // if(ballY > 300-20 || ballY <= 0) dy *= -1;

        if(ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx *= -1;
        if(ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1;
    });



});