function calculateGrade(score){
    if(score >= 90){
        return "A";
    }
    else if(score >= 80){
        return "B";
    }
    else if(score >= 70){
        return "C";
    }
    else if(score >= 60){
        return "D";
    }
    else{
        return "F";
    }
}

let grade = calculateGrade(43);
console.log(grade);