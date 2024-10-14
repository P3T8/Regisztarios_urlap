function addCourse() {
    const tableBody = document.getElementById('courses-table-body');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td><input type="text" placeholder="Course"></td>
        <td><input type="text" placeholder="Level"></td>
        <td><input type="text" placeholder="Language"></td>
        <td><input type="date"></td>
    `;

    tableBody.appendChild(newRow);
}