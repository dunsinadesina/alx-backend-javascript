const getStudentIdsSum = (students) => students.reduce((preval, cur) => preval + cur.id, 0);

export default getStudentIdsSum;
