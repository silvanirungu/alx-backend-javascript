export default function createIteratorObject(report) {
  const employee = [];
  // eslint-disable-next-line no-unused-vars
  for (const [depts, emplys] of Object.entries(report.allEmployees)) {
    for (const emp of emplys) {
      employee.push(emp);
    }
  }
  return employee;
}
