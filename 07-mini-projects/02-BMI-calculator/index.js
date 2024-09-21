const form = document.querySelector('form')
const results = document.querySelector("#results")

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
      } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
      } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>BMI: ${bmi}</span>`;
      }
})

/*

const form = document.querySelector('form') as HTMLFormElement | null;
const results = document.querySelector("#results") as HTMLElement | null;

if (form && results) {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();
        
        const heightInput = document.querySelector("#height") as HTMLInputElement | null;
        const weightInput = document.querySelector("#weight") as HTMLInputElement | null;

        const height = heightInput ? parseInt(heightInput.value) : NaN;
        const weight = weightInput ? parseInt(weightInput.value) : NaN;

        if (!height || height < 0 || isNaN(height)) {
            results.innerHTML = `Please give a valid height ${height}`;
        } else if (!weight || weight < 0 || isNaN(weight)) {
            results.innerHTML = `Please give a valid weight ${weight}`;
        } else {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            results.innerHTML = `<span>BMI: ${bmi}</span>`;
        }
    });
} else {
    console.error("Form or results element not found.");
}
*/