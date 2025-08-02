"use strict";
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function returnStudent(name, age) {
    return new Student(name, age);
}
