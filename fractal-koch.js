
var $ = function(id) {return document.getElementById(id);}

var Koch = {

    x0: 0,
    y0: 0,
    x1: 0,
    y1: 0,
    w2: 150,
    h2: 150,
    direction: 0,
    ctx: undefined,
    canvas: undefined,

    init: function(canvasid, width, height) {

          this.canvas = $(canvasid);
          this.canvas.width = width;
          this.canvas.height = height;
          this.ctx = this.canvas.getContext('2d');
          this.ctx.beginPath();

          this.x0 = w2 = width / 2;
          this.y0 = h2 = height / 2;

    },

    begin: function(x,y) {

      this.ctx.beginPath();

      this.ctx.moveTo(this.x0 = x, this.y0 = y);

      this.ctx.fillStyle="lightgreen";

    },

    end: function() {

      this.ctx.closePath();

      this.ctx.fill();

      this.ctx.strokeStyle = "lightgreen";

      this.ctx.lineWidth="1px";

      this.ctx.stroke();
 },

 radians: function(degree) {

     return Math.PI * degree / 180;
 },

 forward: function(length) {

    this.x1 = this.x0 + length * Math.cos(this.radians(this.direction));

    this.y1 = this.y0 + length * Math.sin(this.radians(this.direction));

    this.ctx.lineTo(this.x0 = this.x1, this.y0 = this.y1);
 },


 right: function(angle) {

   this.direction -= angle;
 },

 left: function(angle) {

   this.direction += angle;
 },

koch: function(length, depth) {

  if (depth === 0) {

   this.forward(length);

  } else {

   this.koch(length / 3, depth - 1);

   this.right(60);

   this.koch(length / 3, depth - 1);

   this.left(120);

   this.koch(length / 3, depth - 1);

   this.right(60);

   this.koch(length / 3, depth - 1);

  }
 } 
};

Koch.init('koch', 700, 500)
Koch.begin(0,300-1);
Koch.koch(700,4);
Koch.end();


