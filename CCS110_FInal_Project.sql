CREATE DATABASE CCS110FINALPROJECT;
USE CCS110FINALPROJECT;

CREATE TABLE employee(
	emp_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(100),
    last_name VARCHAR(100) NOT NULL,
    birth_date DATE NOT NULL,
    position VARCHAR(100) NOT NULL,
    salary INT NOT NULL,
    date_hired DATE NOT NULL,
    
    PRIMARY KEY(emp_id)
);

CREATE TABLE department(
	dept_id INT NOT NULL AUTO_INCREMENT, 
    dept_name VARCHAR(100),
    dept_supervisor INT,
    date_establised DATE NOT NULL,
    
    PRIMARY KEY(dept_id),
    FOREIGN KEY(dept_supervisor) REFERENCES employee(emp_id)
);

CREATE TABLE project(
	proj_id INT NOT NULL AUTO_INCREMENT,
    proj_name VARCHAR(100),
    start_date DATE NOT NULL,
    end_date DATE,
    
    PRIMARY KEY(proj_id)
);

CREATE TABLE task(
	task_id INT NOT NULL AUTO_INCREMENT,
    proj_id INT,
    end_date DATE NOT NULL,
    task_desc VARCHAR(100),
    
    PRIMARY KEY(task_id, proj_id),
    FOREIGN KEY(proj_id) REFERENCES project(proj_id)
);

INSERT INTO employee (first_name, last_name, birth_date, position, salary, date_hired) VALUES
	("SMITH", "COLLINS", "1993-06-13", "CLERK", 800, "1993-06-13"),
    ("ALLEN", "WILLIAMS", "1998-08-15", "SALESMAN", 1600, "1998-08-15"),
    ("WARD", "STEPH", "1996-03-26", "SALESMAN", 1250, "1996-03-26"),
    ("JONES", "BOU", "1995-10-31", "MANAGER", 2975, "1995-10-31"),
    ("BLAKE", "SIMONS", "1992-06-11", "MANAGER", 2850, "1992-06-11"),
    ("CLARK", "PARKINSONS", "1993-06-13", "MANAGER", 2450, "1993-06-13"),
    ("SCOTT", "COLLINS", "1996-03-05", "ANALYST", 3000, "1996-03-05"),
    ("KING", "SMITH", "1990-06-09", "SUPERVISOR", 5000, "1990-06-09"),
    ("TURNER", "COLLINS", "1995-06-04", "SALESMAN", 1500, "1995-06-04"),
    ("ADAMS", "BEAU", "1999-06-04", "CLERK", 1100, "1999-06-04"),
    ("ADAMS", "SMITH", "1990-06-09", "SUPERVISOR", 5000, "1990-06-09"),
    ("JEFFERSON", "COLLINS", "1990-06-09", "SUPERVISOR", 5000, "1990-06-09"),
    ("TOM", "SMITH", "1990-06-09", "SUPERVISOR", 5000, "1990-06-09");
    


INSERT INTO department(dept_name, dept_supervisor, date_establised) VALUES 
	("Accounting", 1, "1990-06-09"),
    ("Research", 2, "1993-06-13"),
    ("Sales", 3, "1993-06-13"),
    ("Operations", 4, "1995-06-04");
    
    
INSERT INTO project (proj_name, start_date, end_date) VALUES 
	("New product release", "1990-06-09", "1996-03-05"),
    ("Utilizing AI for marketing", "1990-06-09", "1996-03-05"),
    ("Innovating new Product", "1990-06-09", "1996-03-05");

INSERT INTO task VALUES 
	(1, 1, "1996-03-05", "Market reaserach"),
    (2, 1, "1996-03-05", "Building Identity"),
    (3, 2, "1996-03-05", "Machine Learning studies"),
	(4, 2, "1996-03-05", "Integrating AI to web"),
	(5, 3, "1996-03-05", "Record Analysis"),
    (6, 3, "1996-03-05", "Data visualization");

SELECT * FROM employee;

SELECT * FROM department;

SELECT * FROM project;

SELECT * FROM task;
    
    
   
   
    


