interface StudentScores {
    readonly [studentName:string]:number
}

const studentScores:StudentScores ={
    Alya:90,
    Bima:85,
    Citra: 88,
}

console.log(studentScores)
console.log("Score Alya:", studentScores["Alya"])