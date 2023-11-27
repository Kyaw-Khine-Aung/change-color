const arrayColor = [
    "#e128a9", "#7828e1", "#2a3caf", "rgb(209, 59, 59)", "#fff000", "#000"
]

let count = 0;
const colorBox = document.querySelector(".box");
const button = document.querySelector(".btn");

//get given css in javascript
const originalColor = getComputedStyle(colorBox).backgroundColor;

button.addEventListener("click", () => {
    setInterval(() => {
        if (count === 6) {
            count = 0;
            colorBox.style.backgroundColor = originalColor;
            return;
        }else {
            colorBox.style.backgroundColor = arrayColor[count];
            count++;
        }

    }, 1000)
})