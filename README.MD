# Compressor Station On-Call Schedule

This Node.js program calculates the on-call schedule for a group of compressor motor mechanics based on a rotation pattern. It provides the name of the person on call for a given date, start date, pattern, and group.

## How to Use

1. Clone the repository:


   git clone https://github.com/your-username/compressor-on-call-schedule.git

Navigate to the project directory:

Copy code
cd compressor-on-call-schedule
Install dependencies (if necessary):

sh
Copy code
npm install
Open the index.js file in your code editor to view or modify the code.

Make sure you have Node.js installed on your machine. If not, download and install it from Node.js official website.

Run the program:

sh
Copy code
node index.js
The program will calculate and display the on-call schedule for a set of test dates. You can modify the vTestDateArr, myPattern, and myGroup variables in the index.js file to customize the test scenarios.

The output will show the date and the person on call for each test date.

Code Explanation
whoIsOnCall function calculates the person on call for a given date based on the provided start date, rotation pattern, and group.

The program validates that the input date is greater than or equal to the start date.

It calculates the number of days between the input date and the start date, and then determines the on-call person based on the rotation pattern.

The code is designed to be generic and work with different rotation patterns, group sizes, start dates, and input dates.

The code is well-commented for clarity.

Feel free to customize the input variables and explore the code to understand how it works.

License