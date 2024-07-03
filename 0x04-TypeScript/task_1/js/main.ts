interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [key: string]: any;
}

class TeacherClass implements Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;

    constructor(
        firstName: string,
        lastName: string,
        fullTimeEmployee: boolean,
        location: string,
        yearsOfExperience?: number,
        additionalProperties?: { [key: string]: any }
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        if (yearsOfExperience !== undefined) {
            this.yearsOfExperience = yearsOfExperience;
        }
        if (additionalProperties) {
            for (const key in additionalProperties) {
                if (additionalProperties.hasOwnProperty(key)) {
                    (this as any)[key] = additionalProperties[key];
                }
            }
        }
    }
}