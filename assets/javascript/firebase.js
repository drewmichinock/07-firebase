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

          // if any inputs are empty, do not submit
          if (addName === "" ||
              addDest === "" ||
              addTime === "" ||
              addFreq === "") {}

          // if all inputs are entered, enable submit
          else {

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

          }

          // show trains and key in console log
          database.ref("trains").on("child_added", function(train) {

              console.log(train.val());

              console.log(train.getKey());

              var tableRow = $("<tr>");

              var tableData = $("<td>");

              var dataName = $(train.name);
              var dataDest = $(train.dest);
              var dataTime = $(train.time);
              var dataFreq = $(train.freq);

              dataName.text("<td>" + train.val().name + "</td>");
              dataDest.html(train.val().dest);
              dataTime.html(train.val().time);
              dataFreq.html(train.val().freq);

              // tableRow.append(tableData);

              // append to table body
              tableRow.append(dataName)

              console.log();

              $("#trains").append(tableRow)

          });

      });

  });
