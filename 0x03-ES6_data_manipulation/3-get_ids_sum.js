#!/usr/bin/node
export default function getStudentIdsSum(getListStudents) {
    return getListStudents.reduce((sum, value) => sum + value.id, 0);
}
