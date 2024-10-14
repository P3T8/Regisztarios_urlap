function addCourse() {
    const tableBody = document.getElementById('courses-table-body');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td><input type="text" placeholder="Course" required></td>
        <td><input type="text" placeholder="Level" required></td>
        <td><input type="text" placeholder="Language" required></td>
        <td><input type="date"></td>
    `;

    tableBody.appendChild(newRow);
}