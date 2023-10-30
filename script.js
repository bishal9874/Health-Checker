document.getElementById("calculateButton").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value);
    var gender = document.getElementById("gender").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var temperature = parseFloat(document.getElementById("temperature").value);

    if (temperature > 98) {
        document.getElementById("result").innerHTML = "High fever! Please seek medical attention.";
        return;
    }

    if (name && age && gender && weight && height) {
        var calorieRequirement;

        if (gender === "male") {
            calorieRequirement = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
        } else if (gender === "female") {
            calorieRequirement = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
        }

        var gymTime;
        if (calorieRequirement > 2500) {
            gymTime = "You should consider spending at least 30 minutes in the gym daily.";
        } else {
            gymTime = `${gender} Consider light  exercises to maintain your health.`;
        }

        document.getElementById("result").innerHTML = `
            Hello, ${name}! Your estimated daily calorie requirement is ${calorieRequirement.toFixed(2)} calories. ${gymTime}
        `;
    } else {
        document.getElementById("result").innerHTML = "Please fill in all fields.";
    }
});
