var WIDTH=350, HEIGHT=600, pi=Math.PI;
var UpArrow=38, DownArrow=40, RightArrow=39, LeftArrow=37, SpaceBar=32;
var canvas, ctx, keystate;
var player, ai, ball, score, rect;

function Rects(){
    this.w = 40;
    this.h = 40;
    this.y = HEIGHT/2;
    this.x = WIDTH;
    this.speed = 1;

    show = function(){
        ctx.fillStyle = "#fff";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    function update(){
        this.x -= this.speed;
    }
}

function setup(){
    canvas = document.createElement("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    rect = new Rects();
}

function draw(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.save();
    rect.show();
    rect.update();
}

setup();
draw();
