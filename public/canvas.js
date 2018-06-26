var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
const pi = Math.PI;
const tau = Math.PI * 2;
var width = window.innerWidth;
var height = window.innerHeight;
canvas.width = width;
canvas.height = height;

function Circle(x, y, dx, dy, rad, col) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = rad;
  this.color = col;
  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, tau, false);
    c.strokeStyle = this.color;
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
  };

  this.update = () => {
    if (this.x >= width - this.radius || this.x <= this.radius) {
      this.dx = -this.dx;
    };

    if (this.y >= height - this.radius || this.y <= this.radius) {
      this.dy = -this.dy;
    };

    this.x += this.dx;
    this.y += this.dy;
  };
};

var circles = [];
var numCircles = Math.floor(Math.random() * 25 + 10);
for (let i = 0; i < numCircles; i++) {
  let dx = (Math.random() - 0.5) * 8;
  let dy = (Math.random() - 0.5) * 8;
  let x = Math.random() * width;
  let y = Math.random() * height;
  let radius = Math.random() * 90 + 10;
  let color = 'rgba(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.random() + ')';
  if (x < radius) {
    x += radius;
  } else if (x > width - radius) {
    x -= radius;
  };

  if (y < radius) {
    y += radius;
  } else if (y > height - radius) {
    y -= radius;
  };

  circles.push(new Circle(x, y, dx, dy, radius, color));
};

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, width, height);
  for (let i = 0; i < circles.length; i++) {
    circles[i].draw();
    circles[i].update();
  };
};

animate();
