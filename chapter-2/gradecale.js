function calculaterGrade(score){
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
        return "D"
    }
    else{
        return "F"
    }
}

let result = calculaterGrade(59);
console.log(result);