export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = Array.isArray(students) ? students : [];
  }

  // Getter for name attribute
  get name() {
    return this._name;
  }

  // Setter for name attribute
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter for length attribute
  get length() {
    return this._length;
  }

  // Setter for length attribute
  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Getter for students attribute
  get students() {
    return this._students;
  }

  // Setter for students attribute
  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}
