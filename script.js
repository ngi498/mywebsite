function selectCourse(course) {
    alert("🚀 Starting " + course);
}


function submitQuiz() {
    let score = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');

    if (!q1 || !q2 || !q3) {
        alert("Please answer all questions!");
        return;
    }

    // Correct answers
    if (q1.value === "a") score++;
    if (q2.value === "b") score++;
    if (q3.value === "a") score++;

    // Show score
    document.getElementById("score").innerHTML =
        "Your Score: " + score + "/3";

    // Show correct answers
    document.getElementById("answers").innerHTML =
        "<h4>Correct Answers:</h4>" +
        "1. Encapsulation = Wrapping data and methods<br>" +
        "2. Inheritance = One class uses another<br>" +
        "3. Polymorphism = One method, many forms";
}