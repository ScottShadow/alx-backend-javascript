interface Teacher {
    readonly firstName:string;
    readonly lastName:string;
    fullTimeEmployee:boolean;
    yearsOfExperience:number;
    location:string;

    [propName: string]: any
}

interface Directors extends Teacher {
    numberOfReports:number;
}

interface printTeacherFunction {
    (firstName:string, lastName:string):string;
}
const printTeacher: printTeacherFunction = (firstName:string, lastName:string):string => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface StudentClassInterface  {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface  {
    firstName: string;
    lastName: string;

    constructor(firstname: string, lastname: string) {
        this.firstName = firstname;
        this.lastName = lastname;
    }
    
    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return this.firstName;
    }
}
