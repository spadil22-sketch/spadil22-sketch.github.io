window.addEventListener("load", function () {
    const greeting = document.getElementById("greeting");
    const hour = new Date().getHours();

    if (hour < 12) {
        greeting.textContent = "Good Morning!";
    } else if (hour < 18) {
        greeting.textContent = "Good Afternoon!";
    } else {
        greeting.textContent = "Good Evening!";
    }
});


document.getElementById("themeBtn").addEventListener("click", function () {
    document.body.style.background =
        document.body.style.background === "lightblue" ? "#f4f4f4" : "lightblue";
});


document.getElementById("menuBtn").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
});


document.getElementById("addTask").addEventListener("click", function () {
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function () {
        li.remove();
    });

    document.getElementById("taskList").appendChild(li);
    input.value = "";
});