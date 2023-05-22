
interface Person {
    name: string,
    age: number
}


class Student implements Person {

    readonly name: string;
    readonly age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

function returnStudent(name: string, age: number): Student {
    return new Student(name, age);
}

