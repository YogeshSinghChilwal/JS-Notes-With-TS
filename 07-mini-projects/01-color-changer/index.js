const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        console.log(event.target.id);
        const bgColor = event.target.id

        body.style.backgroundColor = `${bgColor}`
    })
})

/* same code in Type script
const buttons = document.querySelectorAll(".button") as NodeListOf<HTMLButtonElement>;
const body = document.querySelector("body") as HTMLBodyElement | null;

buttons.forEach((btn) => {
    btn.addEventListener('click', (event: MouseEvent) => {
        const target = event.target as HTMLButtonElement;
        console.log(target.id);
        const bgColor = target.id;

        if (body) {
            body.style.backgroundColor = `${bgColor}`;
        } else {
            console.error("Body element not found.");
        }
    });
});
*/