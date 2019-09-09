function Human() {
    this.answer = 'What is the purpose of my life?';
}
Human.prototype.talk = function () {
    console.log('what can I do? Maybe i will be a programmer?');
}
function Student () {
    Human.call(this);
    this.answer = 'Dont understand anything!';
}
Student.prototype = Object.create(Human.prototype);

function Developer() {
    this.answer = 'I realized!';
}
Developer.prototype.talk=function(){
    console.log('I can die for it!')
}
function FrontAndDeveloper() {
    this.answer='Im super!';
}
FrontAndDeveloper.prototype.talk=function(){
    console.log('I became what I wanted!')
}
var human = new Human(),
    student = new Student(),
    developer = new Developer(),
    frontAndDeveloper = new FrontAndDeveloper();

human.talk();
student.talk();
developer.talk();
frontAndDeveloper.talk();

console.log(human, student, developer, frontAndDeveloper);
