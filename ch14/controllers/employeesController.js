const Employee = require("../model/Employee");

const getAllEmployees = async (req, res) => {
  try {
    const allEmployees = await Employee.find();

    res.json(allEmployees);
  } catch (err) {
    console.error(err);
  }
};

const createNewEmployee = async (req, res) => {
  try {
    const { first_name, last_name } = req.body;

    if (!first_name || !last_name) {
      return res
        .status(400)
        .json({ message: "First and last names are required." });
    }

    const result = await Employee.create({
      first_name: first_name,
      last_name: last_name,
    });

    res.status(201).json(result);
  } catch (err) {
    console.error(err);
  }
};

const updateEmployee = (req, res) => {
  const employee = data.employees.find(
    (emp) => emp.id === parseInt(req.body.id)
  );

  if (!employee) {
    return res
      .status(400)
      .json({ message: `Employee ID ${req.body.id} not found` });
  }

  if (req.body.first_name) employee.first_name = req.body.first_name;

  if (req.body.last_name) employee.last_name = req.body.last_name;

  const filteredArray = data.employees.filter(
    (emp) => emp.id !== parseInt(req.body.id)
  );

  const unsortedArray = [...filteredArray, employee];

  data.setEmployees(unsortedArray.sort((a, b) => a.id - b.id));

  res.json(data.employees);
};

const deleteEmployee = async (req, res) => {
  const employee = data.employees.find(
    (emp) => emp.id === parseInt(req.body.id)
  );

  if (!employee) {
    return res
      .status(400)
      .json({ message: `Employee ID ${req.body.id} not found` });
  }

  const filteredArray = data.employees.filter(
    (emp) => emp.id !== parseInt(req.body.id)
  );

  data.setEmployees([...filteredArray]);

  const allEmployees = await Employee.find();

  res.json(allEmployees);
};

const getEmployee = async (req, res) => {
  const employee = await Employee.findById(parseInt(req.params.id)).exec();

  if (!employee) {
    return res
      .status(400)
      .json({ message: `Employee ID ${req.params.id} not found` });
  }

  res.json(employee);
};

module.exports = {
  getAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};
