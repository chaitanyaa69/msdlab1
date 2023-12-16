// Function with a callback
function greet(name, callback) {
  setTimeout(function () {
    console.log("Hello, " + name + "!");
    callback(); // Execute the callback function
  }, 1000);
}

// Using the function with a callback
greet("John", function () {
  console.log("Callback executed.");
});
