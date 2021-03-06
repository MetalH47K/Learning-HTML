class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents;
  }
  
  get name() {
    return this._name}
  
  get level() {
    return this._level}
  
  get numberOfStudents() {
    return this._numberOfStudents
  }
  
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === "number") {
      _numberOfStudents = newNumberOfStudents
    } else {
      return 'Invalid input: numberOfStudents must be set to a Number.'
    }
  }
  
 quickFacts() {
   	console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)}
  
  static pickSubstituteTeacher(substituteTeachers) {
    return substituteTeachers[Math.floor(Math.random() * (substituteTeachers.length - 1))]
  }
  
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents)
    this._pickupPolcy = pickupPolicy
    this._numberOfStudents = numberOfStudents
  }
  
  get pickupPolcy() {
    return this._pickPolicy
  }
}

class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, 'middle', numberOfStudents)
    this._numberOfStudents = numberOfStudents
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeam) {
    super(name, 'high', numberOfStudents)
    this._sportsTeam = sportsTeam
    this._numberOfStudents = numberOfStudents
  }
  
  get sportsTeam() {
    return this._sportsTeam
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])

console.log(alSmith.sportsTeam)

alSmith.quickFacts()
lorraineHansbury.quickFacts()