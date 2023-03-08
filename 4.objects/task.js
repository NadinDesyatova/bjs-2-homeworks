function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks !== undefined) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if (this.marks === undefined || this.marks.length === 0) {
  	return 0;
  }

  averageMarks = this.marks.reduce((accum, current, index, arr) => {
    accum += current;
    if (index === arr.length - 1) {
      return accum / arr.length;
    }
    
    return accum;
  }, 0);

  return averageMarks;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
