// JavaScript code for handling the form submission
document.getElementById("submitBtn").addEventListener("click", function() {
  // Retrieve the values from the grid cells
  var cell1Value = document.getElementById("cell1").value;
  var cell2Value = document.getElementById("cell2").value;
  var cell3Value = document.getElementById("cell3").value;
  var cell4Value = document.getElementById("cell4").value;
  var cell5Value = document.getElementById("cell5").value;
  var cell6Value = document.getElementById("cell6").value;
  var cell7Value = document.getElementById("cell7").value;
  var cell8Value = document.getElementById("cell8").value;
  var cell9Value = document.getElementById("cell9").value;

  // Make an HTTP request to the backend API
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/getReport", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Handle the response from the backend API
      var response = JSON.parse(xhr.responseText);
      var message = response.data.message;

      // Display the message below the grid
      document.getElementById("result").textContent = message;
    }
  };

  // Send the request with the grid cell values as JSON data
  var data = {
    cell1: cell1Value,
    cell2: cell2Value,
    cell3: cell3Value,
    cell4: cell4Value,
    cell5: cell5Value,
    cell6: cell6Value,
    cell7: cell7Value,
    cell8: cell8Value,
    cell9: cell9Value
  };
  xhr.send(JSON.stringify(data));
});
