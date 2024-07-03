interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    contract: any;
}

interface Directors extends Teacher {
    numberOfReports: number
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher('John', 'Doe'));

class studentClass {
    firstName: string;
    lastName: string;

    constructor(
        firstName: string,
        lastName: string
    ) {
        this.firstName = firstName,
            this.lastName = lastName
    }

    workOnHomework() {
        console.log('Currently working')
        return ('Currently working')
    }

    displayName() {
        console.log(this.firstName);
        return this.firstName;
    }
}