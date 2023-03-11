class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
  this.name = name;
  this.releaseDate = releaseDate;
  this.pagesCount = pagesCount;
  this.state = 100;
  this.type = null;
}

  fix() {
    this.state = this.state * 1.5;
  }

  set state(currentState) {
    this._state = currentState;

    if (currentState < 0) {
      this._state = 0;
    } else if (currentState > 100) {
	  this._state = 100;
	  }
  }

  get state() {
	return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
	super(name, releaseDate, pagesCount);
	this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
	this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
	super(author, name, releaseDate, pagesCount);
	this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
	super(author, name, releaseDate, pagesCount);
	this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
	super(author, name, releaseDate, pagesCount);
	this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
	this.books = [];
  }

  addBook(book) {
	if (book.state > 30) {
	  this.books.push(book);
	}
  }

  findBookBy(type, value) {
	let searchBookByType = this.books.find(book => book[type] === value);

	return searchBookByType || null;
  }

  giveBookByName(bookName) {
	let indexSearchBook = this.books.findIndex(book => book.name === bookName);
	let searchBookName = this.books[indexSearchBook];
	if (indexSearchBook === -1) {
	  return null;
	}

	this.books.splice(indexSearchBook, 1);

	return searchBookName;
  }
}

class Student {
  constructor(name, marks = {}) {
	this.name = name;
	this.marks = marks;
  }

  addMark(mark, subject) {
	if (mark >= 2 && mark <= 5) {
	  if (this.marks[subject] === undefined) {
		this.marks[subject] = [];
	  }

	  this.marks[subject].push(mark);
	}
  }

  getAverageBySubject(subject) {
	if (this.marks[subject] === undefined) {
	  return 0;
	}

	let averageBySubject = this.marks[subject].reduce((accum, current, index, arr) => {
	  accum += current;
	  if (index === arr.length - 1) {
		return accum / arr.length;
	  }

	  return accum;
	}, 0);

	return averageBySubject;
  }

  getAverage() {
	let allSubjects = Object.keys(this.marks);
	let averageByAllSubjects = allSubjects.reduce((accum, item, index, arr) => {
	  let currentAverage = this.getAverageBySubject(item);
	  accum += currentAverage;
	  if (index === arr.length - 1) {
		return accum / arr.length;
	  }

	  return accum;
	  }, 0);

	return averageByAllSubjects;
  }
}