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

function sendMessage() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let chat = document.getElementById("chatBody");

    let response = "Sorry, I don't understand.";

    if (input.includes("oop")) {
        response = "OOP stands for Object-Oriented Programming.";
    } 
    else if (input.includes("encapsulation")) {
        response = "Encapsulation means wrapping data and methods together.";
    }
    else if (input.includes("inheritance")) {
        response = "Inheritance allows one class to use another class.";
    }
    else if (input.includes("polymorphism")) {
        response = "Polymorphism means one method can have many forms.";
    }

    chat.innerHTML += "<p><b>You:</b> " + input + "</p>";
    chat.innerHTML += "<p><b>AI:</b> " + response + "</p>";

    document.getElementById("userInput").value = "";
}

function toggleChat() {
    let chat = document.getElementById("chatbot");
    chat.classList.toggle("hidden");
}

