// Prompt the user for their name
const userName = prompt("Please enter your name:");

// Get the certificate template elements
const studentNameElement = document.getElementById('studentName');
const courseTitleElement = document.getElementById('courseTitle');
const completionDateElement = document.getElementById('completionDate');

// Example data (replace with actual data)
const studentName = userName; // Use the name entered by the user
const courseTitle = "Introduction to Web Development";

// Get today's date
const today = new Date();
const completionDate = formatDate(today); // Format the date

// Function to format the date (e.g., "March 31, 2024")
function formatDate(date) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Populate the placeholders with the actual data
studentNameElement.textContent = studentName;
courseTitleElement.textContent = courseTitle;
completionDateElement.textContent = completionDate;
