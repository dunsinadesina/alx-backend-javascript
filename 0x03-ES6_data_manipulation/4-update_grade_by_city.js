/* eslint-disable */
function updateStudentGradeByCity(students, city, newGrades) {
    const studentsInCity = students.filter((student) => student.location===city);
    return studentsInCity.map((student)=>{
        const filteredGrades = newGrades.filter((grade) => grade.studentId===student.id);
        if (filteredGrades.length > 0){
            return {
                ...student,
                grades: filteredGrades[0].grade,
            };
        }
        return {
            ...student,
            grades: 'N/A',
        };
    });
}

export default updateStudentGradeByCity;
