const Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const Student1: Student{
    firstName: 'Dan';
    lastName: 'Kamau';
    age: 10;
    location: 'Nairobi';
};

const Student2: Student{
    firstName: 'Ian';
    lastName: 'Zach';
    age: 53;
    location: 'Kisumu';
}

const studentsList: Student[] = [Student1, Student2];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = table.createTBody();

studentsList.forEach((student) => {
    const row: HTMLTableRowElement = tbody.insertRow();
    row.firstNameCell(): HTMLTableCellElement = row.insertCell();
    row.locationCell(): HTMLTableCellElement = row.insertCell();

    firstNameCell.textContent = student.firstName
    locationCell.textContent = student.location;
});

document.body.appendChild(table);
