interface Student {
    firstname: string;
    lastname: string;
    age: number;
    location: string;
}

function createStudent(student: Student): Student {
    return {
        firstname: student.firstname,
        lastname: student.lastname,
        age: student.age,
        location: student.location
    };
}

const student1 = createStudent({ firstname: 'Jesudunsin', lastname: 'Adesina', age: 10, location: 'Nigeria' })
const student2 = createStudent({ firstname: 'Joy', lastname: 'orioke', age: 11, location: 'Ghana' })

const studentList: Student[]= [student1, student2];

const table = document.createElement('table');
const headerRow = document.createElement('tr');
const header = ['First Name','Last Name','Age', 'Location'];

header.forEach(headerText =>{
    const header = document.createElement('th');
    header.textContent=headerText;
    headerRow.appendChild(header);
});

table.appendChild(headerRow);

studentList.forEach(student=>{
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstname;
    row.appendChild(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = student.lastname;
    row.appendChild(lastNameCell);

    const age = document.createElement('td');
    age.textContent = student.location;
    row.appendChild(age);

    const location = document.createElement('td');
    location.textContent = student.location;
    row.appendChild(location);

    table.appendChild(row);
});

document.body.appendChild(table);