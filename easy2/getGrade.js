function getGrade(score1, score2, score3) {
  let avg = (score1 + score2 + score3) / 3;
  
  if (90 <= avg && avg <= 100) {
    return 'A';
  } else if (80 <= avg && avg < 90) {
    return 'B';
  } else if (70 <= avg && avg < 80) {
    return 'C';
  } else if (60 <= avg && avg  < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(80, 80, 83));    // "B"
console.log(getGrade(50, 50, 95));    // "D"