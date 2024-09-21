const clock = document.querySelector("#clock")



setInterval(() => {
    const time = new Date().toLocaleTimeString()
    
    clock.innerHTML = time
}, 1000)

/*

const clock = document.querySelector("#clock") as HTMLElement | null;

if (clock) {
    setInterval(() => {
        const time: string = new Date().toLocaleTimeString();
        clock.innerHTML = time;
    }, 1000);
} else {
    console.error("Clock element not found.");
}

*/