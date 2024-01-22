const employee = {
    name: "OS",
    streetAddress: "123 main",};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newemployee = {...employee};
    newemployee[key] = value;
    return newemployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newemp = {...employee};
    delete newemp[key];
    return newemp;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}