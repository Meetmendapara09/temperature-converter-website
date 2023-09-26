function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("input").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (inputTemperature * 9/5) + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (inputTemperature - 32) * 5/9;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = inputTemperature + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = inputTemperature - 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = (inputTemperature - 32) * 5/9 + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = (inputTemperature - 273.15) * 9/5 + 32;
    } else {
        result = inputTemperature; // Same unit conversion (e.g., Celsius to Celsius)
    }

    const fromUnitText = document.getElementById("fromUnit").options[document.getElementById("fromUnit").selectedIndex].text;
    const toUnitText = document.getElementById("toUnit").options[document.getElementById("toUnit").selectedIndex].text;

    document.getElementById("output").textContent = `Conversion: ${inputTemperature} ${fromUnitText} to ${result.toFixed(2)} ${toUnitText}`;
}
window.addEventListener("load", function () {
    const container = document.querySelector(".container");
    container.style.opacity = 1;
    container.style.transform = "scale(1)";
    container.style.transition = "opacity 1s ease-in, transform 1s ease-in";
});
