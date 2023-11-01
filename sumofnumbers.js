function sum(n, callback) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    callback(total);
  }
  
  // Using a promise to calculate the sum
  function SumAsync(n) {
    return new Promise((resolve, reject) => {
      sum(n, (result) => {
        if (result) {
          resolve(result);
        } else {
          reject("Error calculating sum");
        }
      });
    });
  }
  
  // Call the function with n = 4
  SumAsync(4)
    .then((result) => {
      console.log("Sum of the first 4 natural numbers is: " + result);
    })
    .catch((error) => {
      console.error(error);
    });
  
