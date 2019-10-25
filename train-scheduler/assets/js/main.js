// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBHGvmOMTkfdGoBw7GqDThq69Bqf9zGsD0",
    authDomain: "train-scheduler-14b78.firebaseapp.com",
    databaseURL: "https://train-scheduler-14b78.firebaseio.com",
    projectId: "train-scheduler-14b78",
    storageBucket: "train-scheduler-14b78.appspot.com",
    messagingSenderId: "693550857081",
    appId: "1:693550857081:web:2c336e6e6da8237a6f8da8",
    measurementId: "G-E34BZQWPTL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.database();

//variables
var trainName = 0
var destination = 0
var firstTime = 0
var nextArrival
var frequency = 0

$("#add-train").on("click", function (event) {
    event.preventDefault();

    //grabs input
    var trainName = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var firstTime = $("#first-time").val().trim();
    var nextArrival = $("#first-mins").val().trim();
    var frequency = $("#frequency").val().trim();



    //trying to push data into database
    database.ref().set({
        trainName: trainName,
        destination: destination,
        firstTime: firstTime,
        nextArrival: nextArrival,
        frequency: frequency
    })
})
//updates changes in html
database.ref().on("value", function () {
    $("#train-name").text(snapshot.val().trainName);
    $("#destination").text(snapshot.val().destination);
    $("#first-time").text(snapshot.val().time);
    $("#first-mins").text(snapshot.val().nextArrival);
    $("#frequency").text(snapshot.val().frequency);
})

//added row
var newRow = $("<tr>").append(
    $("<th>").text(trainName),
    $("<th>").text(destination),
    $("<th>").text(time),
    $("<th>").text(nextArrival),
    $("<th>").text(frequency),
)

//as much as i could
