type Employee = {
    name:string,
    id:number;
}


const emp:Employee={
    id:2,
    name:'Kiran'
}


interface EmployeeInterface{
    name:string,
    id:1|2
}

interface EmployeeInterface{
   phone:number
}

const em:EmployeeInterface={
    name:'Kiran',
    id:1,
    phone:920292922374
}

type AgeAndPhone ={
    age:number
}

type EmployeeWithAge = Employee &AgeAndPhone;

const empwithage:EmployeeWithAge={
    id:1,
    age:21,
    name:"Kiran"
}