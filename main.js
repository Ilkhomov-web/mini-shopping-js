const body = document.querySelector("body");

const values = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
];

function getGradientColor(){
    let color = "#";
    for(let i = 0; i < 6; i++){
        const randomIndex = Math.trunc(Math.random() * values.length)
        color += values[randomIndex]
        
    }
    return color;
}

function setGradient(){
    const color1 = getGradientColor();
    const color2 = getGradientColor();
    const randomDeg = Math.trunc(Math.random() * 360);
    const bgColor = `linear-gradient(${randomDeg}deg, ${color1}, ${color2})`;
    body.style.background = bgColor;
    console.log(bgColor);
    
}