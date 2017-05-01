  // initialize firebase
  var config = {
      apiKey: "AIzaSyA_DQMAwlllyKJPONJo27_G7nrKrDw_nBk",
      authDomain: "train-time-618a6.firebaseapp.com",
      databaseURL: "https://train-time-618a6.firebaseio.com",
      projectId: "train-time-618a6",
      storageBucket: "train-time-618a6.appspot.com",
      messagingSenderId: "939093204948"
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
          var addTime = $("#input-time").val().trim();
          var addFreq = $("#input-freq").val().trim();

          // push inputs to firebase database
          database.ref("/trains").push({

              name: addName,
              destination: addDest,
              time: addTime,
              frequency: addFreq

          });

          // clear inputs after submission
          $("#input-name").val("");
          $("#input-dest").val("");
          $("#input-time").val("");
          $("#input-freq").val("");          

      });

      // // show children of employees and key in console log
      // database.ref().on("child_added", function(snapshot) {

      //     console.log(snapshot.val());

      //     console.log(snapshot.getKey());

      //     var tr = $("<tr>");

      //     var nameTD = $("<td>");

      //     nameTD.html(snapshot.val().name)

      //     tr.append(nameTD);

      //     // append to table body

  });

  // });
