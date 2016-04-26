//FUNCTIONS TO OUTPUT THE EMPLOYEES

$(function Emp1(){

// Get a database reference to our posts
var employeeref = new Firebase("https://shiftsapp.firebaseio.com/employees/emp1");

// Attach an asynchronous callback to read the data at our posts reference
employeeref.on("value", function(snapshot) {
  console.log(snapshot.val());
  $('#Emp1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

 $(function Emp2(){

// Get a database reference to our posts
var employee2ref = new Firebase("https://shiftsapp.firebaseio.com/employees/emp2");

// Attach an asynchronous callback to read the data at our posts reference
employee2ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  $('#Emp2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

  $(function Emp3(){

// Get a database reference to our posts
var employee3ref = new Firebase("https://shiftsapp.firebaseio.com/employees/emp3");

// Attach an asynchronous callback to read the data at our posts reference
employee3ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  $('#Emp3').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

   $(function Emp4(){

// Get a database reference to our posts
var employee4ref = new Firebase("https://shiftsapp.firebaseio.com/employees/emp4");

// Attach an asynchronous callback to read the data at our posts reference
employee4ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  $('#Emp4').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

   $(function Emp5(){

// Get a database reference to our posts
var employee5ref = new Firebase("https://shiftsapp.firebaseio.com/employees/emp5");

// Attach an asynchronous callback to read the data at our posts reference
employee5ref.on("value", function(snapshot) {
  console.log(snapshot.val());
  $('#Emp5').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

 //ROSTERS SAVING 
 //ROSTERS FOR MONDAYS
 $(function Monday(){

 // CREATE A REFERENCE TO FIREBASE
  var dateMondayRef = new Firebase('https://shiftsapp.firebaseio.com/roster');

  // REGISTER DOM ELEMENTS
  var date1Field = $('#date1Input');
  var emp1put1Field = $('#emp1Input1');
  var emp2put1Field = $('#emp2Input1');
  var emp3put1Field = $('#emp3Input1');
  var emp4put1Field = $('#emp4Input1');
  var emp5put1Field = $('#emp5Input1');
  var enter1Field = $('#enter1');

  // LISTEN FOR KEYPRESS EVENT
  enter1Field.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var dateMonday = date1Field.val();
      var emp1put1 = emp1put1Field.val();
      var emp2put1 = emp2put1Field.val();
      var emp3put1 = emp3put1Field.val();
      var emp4put1 = emp4put1Field.val();
      var emp5put1 = emp5put1Field.val();
      var enter1 = enter1Field.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
		var obj1 = {};
		obj1[dateMonday] = {
    	emp1:emp1put1, 
    	emp2:emp2put1, 
    	emp3:emp3put1, 
    	emp4:emp4put1, 
    	emp5:emp5put1
		}

		dateMondayRef.set(obj1);
		enter1Field.val('');
    	}
  	});

});

$(function Tuesday(){

 // CREATE A REFERENCE TO FIREBASE
  var dateTuesdayRef = new Firebase('https://shiftsapp.firebaseio.com/roster');

  // REGISTER DOM ELEMENTS
  var date2Field = $('#date2Input');
  var emp1put2Field = $('#emp1Input2');
  var emp2put2Field = $('#emp2Input2');
  var emp3put2Field = $('#emp3Input2');
  var emp4put2Field = $('#emp4Input2');
  var emp5put2Field = $('#emp5Input2');

  // LISTEN FOR KEYPRESS EVENT
  emp5put2Field.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var dateTuesday = date2Field.val();
      var emp1put2 = emp1put2Field.val();
      var emp2put2 = emp2put2Field.val();
      var emp3put2 = emp3put2Field.val();
      var emp4put2 = emp4put2Field.val();
      var emp5put2 = emp5put2Field.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
		var obj2 = {};
		obj2[dateTuesday] = {
    	emp1:emp1put2, 
    	emp2:emp2put2,
    	emp3:emp3put2, 
    	emp4:emp4put2, 
    	emp5:emp5put2
		}

		dateTuesdayRef.set(obj2);
		emp5put2Field.val('');
    	}
  	});

});

$(function Date1(){

// Get a database reference to our posts
var Date1ref = new Firebase("https://shiftsapp.firebaseio.com/date/1901");

// Attach an asynchronous callback to read the data at our posts reference
Date1ref.on("value", function(snapshot) {
  $('#Date1').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date2(){

// Get a database reference to our posts
var Date2ref = new Firebase("https://shiftsapp.firebaseio.com/date/2001");

// Attach an asynchronous callback to read the data at our posts reference
Date2ref.on("value", function(snapshot) {
  $('#Date2').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date3(){

// Get a database reference to our posts
var Date3ref = new Firebase("https://shiftsapp.firebaseio.com/date/2101");

// Attach an asynchronous callback to read the data at our posts reference
Date3ref.on("value", function(snapshot) {
  $('#Date3').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date4(){

// Get a database reference to our posts
var Date4ref = new Firebase("https://shiftsapp.firebaseio.com/date/2201");

// Attach an asynchronous callback to read the data at our posts reference
Date4ref.on("value", function(snapshot) {
  $('#Date4').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date5(){

// Get a database reference to our posts
var Date5ref = new Firebase("https://shiftsapp.firebaseio.com/date/2301");

// Attach an asynchronous callback to read the data at our posts reference
Date5ref.on("value", function(snapshot) {
  $('#Date5').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date6(){

// Get a database reference to our posts
var Date6ref = new Firebase("https://shiftsapp.firebaseio.com/date/2401");

// Attach an asynchronous callback to read the data at our posts reference
Date6ref.on("value", function(snapshot) {
  $('#Date6').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Date7(){

// Get a database reference to our posts
var Date7ref = new Firebase("https://shiftsapp.firebaseio.com/date/2501");

// Attach an asynchronous callback to read the data at our posts reference
Date7ref.on("value", function(snapshot) {
  $('#Date7').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp1Mon(){

// Get a database reference to our posts
var Emp1Monref = new Firebase("https://shiftsapp.firebaseio.com/roster/19-01/emp1");

// Attach an asynchronous callback to read the data at our posts reference
Emp1Monref.on("value", function(snapshot) {
  $('#Emp1Mon').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp2Mon(){

// Get a database reference to our posts
var Emp2Monref = new Firebase("https://shiftsapp.firebaseio.com/roster/19-01/emp2");

// Attach an asynchronous callback to read the data at our posts reference
Emp2Monref.on("value", function(snapshot) {
  $('#Emp2Mon').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp3Mon(){

// Get a database reference to our posts
var Emp3Monref = new Firebase("https://shiftsapp.firebaseio.com/roster/19-01/emp3");

// Attach an asynchronous callback to read the data at our posts reference
Emp3Monref.on("value", function(snapshot) {
  $('#Emp3Mon').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp4Mon(){

// Get a database reference to our posts
var Emp4Monref = new Firebase("https://shiftsapp.firebaseio.com/roster/19-01/emp4");

// Attach an asynchronous callback to read the data at our posts reference
Emp4Monref.on("value", function(snapshot) {
  $('#Emp4Mon').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});

$(function Emp1Mon(){

// Get a database reference to our posts
var Emp5Monref = new Firebase("https://shiftsapp.firebaseio.com/roster/19-01/emp5");

// Attach an asynchronous callback to read the data at our posts reference
Emp5Monref.on("value", function(snapshot) {
  $('#Emp5Mon').html(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

});
 