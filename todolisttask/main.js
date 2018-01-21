var users = [];

var uname = document.getElementById('uname');
var surname = document.getElementById('surname');
var specialization = document.getElementById('specialization');
var job = document.getElementById('job');
var type = document.getElementById('role');
var addUser = document.getElementById('createuser');

var simpletask = document.getElementById('simpletask');
var hometask = document.getElementById('hometask');
var projecttask = document.getElementById('projecttask');

var simpleblock = document.getElementById('simpleblock');
var simpletitle = document.getElementById('simpletitle');
var simplestatus = document.getElementById('simplestatus');
var addsimple = document.getElementById('addsimple');

var homeblock = document.getElementById('homeblock');
var hometitle = document.getElementById('hometitle');
var homestatus = document.getElementById('homestatus');
var homedescription = document.getElementById('homedescription');
var addhome = document.getElementById('addhome');

var projectblock = document.getElementById('projectblock');
var projecttitle = document.getElementById('projecttitle');
var projectstatus = document.getElementById('projectstatus');
var projectdescription = document.getElementById('projectdescription');
var projectdeadline = document.getElementById('projectdeadline');
var addproject = document.getElementById('addproject');

var tasks = document.getElementById('tasks');


function User(iname, isurname){
    this.name = iname;
    this.surname = isurname;
    this.tasks = [];
}

User.prototype.addTask = function (task) {
    tasks.push(task);
};

function Student(iname, isurname, ispecialization) {
    this.name = iname;
    this.surname = isurname;
    this.specialization = ispecialization;
    this.tasks = [];
}

Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;

function Developer(iname, isurname, ispecialization, ijob) {
    this.name = iname;
    this.surname = isurname;
    this.specialization = ispecialization;
    this.job = ijob;
    this.tasks = [];
}

Developer.prototype = Object.create(Student.prototype);
Developer.prototype.constructor = Developer;


addUser.addEventListener("click", function () {
   switch (type.value){
       case "User" :
           var user = new User(uname.value, surname.value);
           users.push(user);
           hometask.style = "display : none";
           projecttask.style = "display : none";
           break;
       case "Student" :
           var student = new Student(uname.value, surname.value, specialization.value);
           users.push(student);
           hometask.style = "display : inline-block";
           projecttask.style = "display : none";
           break;
       case "Developer" :
           var developer = new Developer(uname.value, surname.value, specialization.value, job.value);
           users.push(developer);
           hometask.style = "display: inline-block";
           projecttask.style = "display: inline-block";
           break;
   }
});

simpletask.addEventListener("click", function () {
    simpleblock.style = "display: block";
    homeblock.style = "display: none";
    projectblock.style = "display: none";
});


hometask.addEventListener("click", function () {
    simpleblock.style = "display: none";
    homeblock.style = "display: block";
    projectblock.style = "display: none";
});


projecttask.addEventListener("click", function () {
    simpleblock.style = "display: none";
    homeblock.style = "display: none";
    projectblock.style = "display: block";
});

addsimple.addEventListener("click", function () {
   var task = {
       title: simpletitle.value,
       status: simplestatus.value
   };

   users[users.length-1].tasks.push(task);
    fillTasks()
});

addhome.addEventListener("click", function () {
    var task = {
        title: hometitle.value,
        status: homestatus.value,
        description: homestatus.value
    };

    users[users.length-1].tasks.push(task);
    fillTasks()
});

addproject.addEventListener("click", function () {
    var task = {
        title: projecttitle.value,
        status: projectstatus.value,
        description: projectdescription.value,
        deadline: projectdeadline.value
    };

    users[users.length-1].tasks.push(task);
    fillTasks()
});


function fillTasks() {
    for(var i = 0; i < users[users.length-1].tasks.length; i++){
        var task = users[users.length-1].name + " ";
            if(users[users.length-1].tasks[i].title != undefined)
                task = task + " " + users[users.length-1].tasks[i].title;

            if(users[users.length-1].tasks[i].status != undefined)
                task = task + " " + users[users.length-1].tasks[i].status;

            if(users[users.length-1].tasks[i].description != undefined)
                task = task + " " + users[users.length-1].tasks[i].description;

            if(users[users.length-1].tasks[i].deadline != undefined)
                task = task + " " + users[users.length-1].tasks[i].deadline;
    }

    var newdiv = document.createElement('div');
    newdiv.innerHTML = task;
    tasks.appendChild(newdiv);
}