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

      // when javascript loads

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

          $("#submit").prop("disabled", false);

          // push inputs to firebase database
          database.ref("/trains").push({

              name: addName,
              destination: addDest,
              time: addTime,
              frequency: addFreq

          });

          // clear input fields after submission
          $("#input-name").val("");
          $("#input-dest").val("");
          $("#input-time").val("");
          $("#input-freq").val("")

          // show trains and key in console log
          database.ref("trains").on("child_added", function(train) {

              // log train info
              console.log(train.val().name);
              console.log(train.val().destination);
              console.log(train.val().time);
              console.log(train.val().frequency);

              // display all firebase items to tbody
              $("#trains").append("<tr><td>" + train.val().name +
                  "</td><td>" + train.val().destination + "</td><td>" +
                  train.val().time + "</td><td>" + train.val().frequency +
                  "</td></tr>");


              dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added",
                  function(snapshot) {

                      $("#trains").append("<tr><td>" + train.val().name +
                          "</td><td>" + train.val().destination + "</td><td>" +
                          train.val().time + "</td><td>" + train.val().frequency +
                          "</td></tr>");

                  });

          });

      });

  });
