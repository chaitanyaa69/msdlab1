// Function with a callback and parameters
function add(a, b, callback) {
  setTimeout(function () {
    const result = a + b;
    callback(result); // Pass the result to the callback
  }, 1);
}

// Using the function with a callback and parameters
add(5, 3, function (sum) {
  console.log("Sum:", sum);
});
