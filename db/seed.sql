USE employees;

INSERT INTO department
    (name)
VALUES
    ("Engineering"), 
    ("Sales"),
    ("HR"),
    ("IT");

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Software Engineer", 120000, 1),
    ("Mechanical Engineer", 120000, 1),
    ("Junior Engineer", 85000, 1),
    ("Sales Person", 100000, 2),
    ("HR Manager", 130000, 3),
    ("IT Tech", 70000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Andie", "Wheeler", 1, 1),
    ("Manoli", "Koutouzosm", 1, NULL),
    ("Monica", "Geller", 1, NULL),
    ("Chandler", "Bing", 2, 2),
    ("Rachel", "Green", 3, NULL),
    ("Ross", "Geller", 4, 4);
