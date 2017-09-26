// Client
// Canvas

import * as colors from './colorPallete';

let canvas, ctx;
let clientsConnected = 1;
let totalSize = {
  width: 0,
  height: 0
}
let allSizes, yourSize;

let color = colors[Math.floor(Math.random() * 199)][Math.floor(Math.random() * 5)];
let ranking = document.getElementById('ranking');

let create = () => {
  canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  ctx = canvas.getContext('2d');
  resize();
}

let resize = () => {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.fillStyle = "#AAAAAA";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawClientRect();
}

let getWindowSize = () => {
  return {
    height: window.innerHeight,
    width: window.innerWidth,
  }
}

let partitionCanvas = (data) => {
  clientsConnected = data.clients;
  allSizes = data.sizes;
  yourSize = data.yourSize;
  totalSize.width = data.totalWidth;
  totalSize.height = data.totalHeight;

  resize();
}

let sortNumber = (a, b) => {
  return a - b;
}

let drawClientRect = () => {
  if (totalSize.width > 0 && totalSize.height > 0) {
    let canvasWidth = (window.innerWidth / totalSize.width) * window.innerWidth;
    let canvasHeigth = (window.innerHeight / totalSize.height) * window.innerHeight;

    let rank = [];

    for (let userSize in allSizes) {
      rank.push(allSizes[userSize]);
    }
    rank = rank.sort(sortNumber).reverse();

    ctx.fillStyle = color;
    ranking.innerText = `You are N${rank.indexOf(window.innerHeight+window.innerWidth)+1} `
    // console.log(`
    // - Window innerWidth is ${window.innerWidth} and innerHeight is: ${window.innerHeight} 
    // - totalSize.width is ${totalSize.width} and totalSize.height ${totalSize.height}
    // - Result for red window is width ${canvasWidth} and height ${canvasHeigth}
    // - Clients Connected are ${clientsConnected}
    // `)
    ctx.fillRect(window.innerWidth / 2 - canvasWidth / 2, window.innerHeight / 2 - canvasHeigth / 2, canvasWidth, canvasHeigth);
  }
}

export { create, resize, getWindowSize, partitionCanvas }