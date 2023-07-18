SELECT student.id, student.firstName, student.firstName, student.lastName, student.title, student.studNumber, student.userType, student.disciplineId, 
			(SELECT IFNULL(GROUP_CONCAT(JSON_OBJECT('firstName', users.firstName, 'lastName', users.lastName, 'title', users.title, 'email', users.email,'userType', users.userType)), false) FROM users WHERE users.id = projects.supervisorId) supervisor
FROM users student, projects
WHERE student.disciplineId = 9
AND projects.userId = student.id -- These are all students who have a project - and their supervisors.
AND student.userType = 1;

-- adminGetAllNewUsers
BEGIN
    SELECT * 
    FROM users, projects
    WHERE users.disciplineId = disciplineId
    AND projects.userId = users.id;
END


BEGIN
    SELECT student.id, 
            student.firstName, 
            student.firstName, 
            student.lastName, 
            student.email,
            student.title, 
            student.studNumber, 
            student.userType, 
            student.disciplineId, 
            (SELECT IFNULL(GROUP_CONCAT(JSON_OBJECT('firstName', users.firstName, 'lastName', users.lastName, 'title', users.title, 'email', users.email,'userType', users.userType)), false) FROM users WHERE users.id = projects.supervisorId) supervisor,
            (SELECT IFNULL(GROUP_CONCAT(JSON_OBJECT('name', projects.name, 'description', projects.description, 'id', projects.id)), false) FROM projects WHERE projects.userId = student.id) project
    FROM users student, projects
    WHERE student.disciplineId = disciplineId
    AND projects.userId = student.id -- These are all students who have a project - and their supervisors.
    AND student.userType = 1;
END