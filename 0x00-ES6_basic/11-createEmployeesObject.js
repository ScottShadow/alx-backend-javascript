export default function createEmployeesObject(departmentName, employees) {
    let myObject = {
        [departmentName]: employees,
    };
    return myObject;
}