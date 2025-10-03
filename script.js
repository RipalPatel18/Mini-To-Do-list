document.getElementById("button").addEventListener("click", function () {
    const input = document.getElementById("taskinput");
    const task = input.value.trim();
    if (task === "") return;

    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById("TaskList").appendChild(li);

    input.value = "";
});
