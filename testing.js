function gradefinder(totalcredits, grades, credits) {
    let total = 0;
    for (let i = 0; i < grades.length; i++) {

        switch (grades[i]) {
            case "A+":
                total = total + 4.5 * credits[i];
                break;
            case "B+":
                total = total + 3.5 * credits[i];
                break;
            case "C+":
                total = total + 2.5 * credits[i];
                break;
            case "D+":
                total = total + 1.5 * credits[i];
                break;
            case "A":
                total = total + 4.0 * credits[i];
                break;
            case "B":
                total = total + 3.0 * credits[i];
                break;
            case "C":
                total = total + 2.0 * credits[i];
                break;
            case "D":
                total = total + 1 * credits[i];
                break;
            case "F":
                break;
        }
    }
    return total / totalcredits;
}
exports.gradefinder=gradefinder;
