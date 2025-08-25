document.getElementById("employeeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const position = document.getElementById("position").value;

  if(name && age && position) {
    const table = document.getElementById("employeeTable").querySelector("tbody");
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${name}</td>
      <td>${age}</td>
      <td>${position}</td>
    `;

    table.appendChild(row);

    // reset form
    document.getElementById("employeeForm").reset();
  }
});
