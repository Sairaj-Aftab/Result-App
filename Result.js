function Result () {

    this.sgpa = function (marks) {

        let gpa;

        if (marks >= 0 && marks <= 32) {
            gpa = 0;
        } else if (marks >= 33 && marks <= 39) {
            gpa = 1;
        } else if (marks >= 40 && marks <= 49) {
            gpa = 2;
        } else if (marks >= 50 && marks <= 64) {
            gpa = 3;
        } else if (marks >= 65 && marks <= 79) {
            gpa = 4;
        } else if (marks >= 80 && marks <= 100) {
            gpa = 5;
        } else {
            return `Pagol`
        }

        return gpa;
    }


    this.sgrade = function (marks) {
        if (marks >= 0 && marks < 1) {
            return `F`
        } else if (marks >= 1 && marks < 2) {
            return `D`
        } else if (marks >= 2 && marks < 3) {
            return `C`
        } else if (marks >= 3 && marks < 3.5) {
            return `B`
        } else if (marks >= 3.5 && marks < 4) {
            return `A-`
        } else if (marks >= 4 && marks < 5) {
            return `A`
        } else if (marks == 5) {
            return `A+`
        }
    }


    this.tgpa = function (bn, en, ma, ss, s, re) {

        let tmarks = bn + en + ma + ss + s + re;
        let  tgpa  = tmarks / 6;

        if (bn == 0 || en == 0 || ma == 0 || ss == 0 || s == 0 || re == 0) {
            return({
                totalgpa : `<p style="font-weight: bold;">0.00</p>`,
                totalgrade : `<p style="font-weight: bold;">F</p>`
            })
        } else {
            return({
                totalgpa : `<p style="font-weight: bold;">${tgpa.toFixed(2)}</p>`,
                totalgrade : `<p style="font-weight: bold;">${this.tgrade(tgpa)}</p>`
            })
        }
    }

    this.tgrade = function (grade) {
        if (grade >= 0 && grade < 1) {
            return `F`;
        } else if (grade >= 1 && grade < 2) {
            return `D`;
        } else if (grade >= 2 && grade < 3) {
            return `C`;
        } else if (grade >= 3 && grade < 3.5) {
            return `B`;
        } else if (grade >= 3.5 && grade < 4) {
            return `A-`;
        } else if (grade >= 4 && grade < 5) {
            return `A`;
        } else if (grade == 5) {
            return `A+`;
        }
    }
}