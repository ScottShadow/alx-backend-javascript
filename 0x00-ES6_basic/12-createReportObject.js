export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(newObj) {
      return Object.keys(newObj).length;
    },
  };
}
