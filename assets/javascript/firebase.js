  // initialize firebase
  var config = {
      apiKey: "AIzaSyCGjHHj54zXIlfU8dl6USJQPD45DWlQ2Yg",
      authDomain: "train-time-30872.firebaseapp.com",
      databaseURL: "https://train-time-30872.firebaseio.com",
      projectId: "train-time-30872",
      storageBucket: "train-time-30872.appspot.com",
      messagingSenderId: "631340263673"
  };

  firebase.initializeApp(config);

  // variable created to reference database
  var database = firebase.database();

  // initiate jquery
  $(document).ready(function() {

      // when submit button clicked
      $("#submit").on("click", function(event) {

          // prevent form submission
          event.preventDefault();

          // data submission test
          console.log("test")

          // get inputs and store in variables
          var addName = $("#input-name").val().trim();
          var addDest = $("#input-dest").val().trim();
          var addTime = new Date($("#input-time").val()).getTime();
          var addFreq = $("#input-freq").val().trim();

          // push inputs to firebase database
          database.ref("/trains").push({

              name: addName,
              role: addRole,
              start: addStart,
              rate: addRate

          });

      });

      // show children of employees and key in console log
      database.ref("/employees").on("child_added", function(snapshot) {

          console.log(snapshot.val());

          console.log(snapshot.getKey());

          var tr = $("<tr>");

          var nameTD = $("<td>");

          nameTD.html(snapshot.val().name)

          tr.append(nameTD);

          // append to table body

      });

  })
