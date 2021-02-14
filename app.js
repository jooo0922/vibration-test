'use strict';

const canvas1 = document.querySelector('.canvas1');
const ctx = canvas1.getContext('2d');

const canvas2 = document.querySelector('.canvas2');
const ctx2 = canvas2.getContext('2d');

canvas1.width = 500;
canvas1.height = 500;

canvas2.width = 1200;
canvas2.height = 500;

const PI2 = Math.PI * 2
const x = canvas1.width / 2;
const y = canvas1.height / 2;

const targetRadius = 50;
const BOUNCE = 0.82;
let radius = 0;
let radiusV = 0;

let t = 0;

ctx2.beginPath();
ctx2.strokeStyle = 'white';
ctx2.moveTo(0, 250);
ctx2.lineTo(1200, 250);
ctx2.stroke();

function drawGraph(t, valueY, color) {
  ctx2.save();

  ctx2.translate(0, 250);
  ctx2.beginPath();
  ctx2.fillStyle = color;
  ctx2.arc(t, -valueY, 2, 0, PI2, false);
  ctx2.fill();

  ctx2.restore();
}

function vibration() {
  ctx.clearRect(0, 0, canvas1.width, canvas1.height);

  const accel = (targetRadius - radius) / 2;
  radiusV += accel;
  radiusV *= BOUNCE;
  radius += radiusV;

  t += 15;

  drawGraph(t, radius, 'red');
  drawGraph(t, accel, 'green');
  drawGraph(t, radiusV, 'blue');

  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.arc(x, y, radius, 0, PI2, false);
  ctx.fill();

  window.requestAnimationFrame(vibration);
}

window.requestAnimationFrame(vibration);