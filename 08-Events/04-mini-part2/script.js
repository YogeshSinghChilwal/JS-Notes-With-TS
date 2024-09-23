// const body = document.querySelector('body');
// const start = document.querySelector("#start")
// const stop = document.querySelector("#stop")

// let interval;
// const red = () => {
//     return Math.floor(Math.random() * 255);
// }
// const blue = () => {
//     return Math.floor(Math.random() * 255);
// }
// const green = () => {
//     return Math.floor(Math.random() * 255);
// }

// const colorChange = () => {
//     interval = setInterval(() => {
//         body.style.backgroundColor = `rgb(${red()}, ${blue()}, ${green()})`
        
//     }, 500)
// }

// start.addEventListener('click', () =>{ 
//     colorChange()
// })

// stop.addEventListener('click', () => {
//     clearInterval(interval);
// })

//generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
    }
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;      // dereferencing, to free up memory
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  

  /*
  const randomColor = function (): string {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId: number | null = null;  // Explicitly defining the type

const startChangingColor = function (): void {
  if (!intervalId) {
    intervalId = window.setInterval(changeBgColor, 1000);
  }

  function changeBgColor(): void {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function (): void {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;  // Dereferencing to free up memory
  }
};

document.querySelector<HTMLButtonElement>('#start')?.addEventListener('click', startChangingColor);

document.querySelector<HTMLButtonElement>('#stop')?.addEventListener('click', stopChangingColor);
*/