"use strict";
const $ = (id) => document.getElementById(id);
$(() => {
    $('#convertBtn').on('click', convertTemp);
    $('input[type=radio]').on('change', toggleDisplay);
});
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;

const toggleDisplay = (label1Text, label2Text) => {
	const fToC = $('#fahrenheit').is(':checked');
    $('#temperature').prev('label').text(fToC ? 'Fahrenheit:' : 'Celsius:');
    $('#result').text('');
    $('#temperature').val('');
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function convertTemp() {
    const temperature = parseFloat($('#temperature').val());
    const isValid = !isNaN(temperature);

    if (isValid) {
        const fToC = $('#fahrenheit').is(':checked');
        let result;
        if (fToC) {
            result = toCelsius(temperature);
            $('#result').text(`Result: ${result.toFixed(0)} °C`);
        } else {
            result = toFahrenheit(temperature);
            $('#result').text(`Result: ${result.toFixed(0)} °F`);
        }
        $('#message').text('');
    } else {
        $('#message').text('Invalid temperature. Please enter a valid number.');
        $('#result').text('');
    }
}
const convertTemp = () => {   

};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
	
	// move focus
	$("#degrees_entered").focus();
});