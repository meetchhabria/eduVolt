// window.addEventListener('DOMContentLoaded', async () => {
//     // Check if MetaMask is installed
//     if (typeof window.ethereum !== 'undefined') {
//         // Initialize Web3 with MetaMask provider
//         window.web3 = new Web3(window.ethereum);

//         try {
//             // Request MetaMask account access
//             await window.ethereum.request({ method: 'eth_requestAccounts' });
//         } catch (error) {
//             console.error('User denied account access:', error);
//             return;
//         }
        
//         // Load the Ethereum network selected by the user
//         const networkId = await web3.eth.net.getId();
//         if (networkId !== 1) { // 1 is the Ethereum mainnet
//             alert('Please switch to the Ethereum mainnet to use this application.');
//             return;
//         }

//         // Replace this placeholder ABI with your actual contract ABI
//         const contractABI = [
//             {
//                 "constant": true,
//                 "inputs": [],
//                 "name": "balanceOf",
//                 "outputs": [
//                     {
//                         "name": "",
//                         "type": "uint256"
//                     }
//                 ],
//                 "payable": false,
//                 "stateMutability": "view",
//                 "type": "function"
//             }
//             // Add more functions/events as needed
//         ];

//         const contractAddress = '0x4bbE90890374916959a590733b9dfA47F3FDD7FE'; // Replace with your contract address

//         const contract = new web3.eth.Contract(contractABI, contractAddress);

//         document.getElementById('claimCertificateBtn').addEventListener('click', async function() {
//             const isLoggedIn = await checkLoggedIn();

//             if (!isLoggedIn) {
//                 alert('Please log in to claim the certificate.');
//                 return;
//             }

//             const courseProgress = await getCourseProgress();

//             if (courseProgress >= 70) {
//                 const sbtToken = generateSBTToken();
//                 alert('Congratulations! You have successfully claimed your certificate.\nSBT Token: ' + sbtToken);
//             } else {
//                 alert('You need to complete at least 70% of the course to claim the certificate.');
//             }
//         });

//         async function checkLoggedIn() {
//             // Simulate a backend check for user login status
//             const accounts = await web3.eth.getAccounts();
//             return accounts.length > 0; // User is logged in if MetaMask account is available
//         }

//         async function getCourseProgress() {
//             // Simulate fetching course progress from the server
//             // Assume this returns the percentage of course completed
//             const totalWatchedTime = 700; // in minutes
//             const totalTimeOfCourse = 1000; // in minutes
//             return (totalWatchedTime / totalTimeOfCourse) * 100;
//         }

//         function generateSBTToken() {
//             // Simulate generating a unique SBT Token (certificate)
//             return 'ABC123XYZ'; // Just a placeholder for demonstration
//         }
//     } else {
//         alert('Please install MetaMask to use this application.');
//         return;
//     }
// });



// =========================



// async function claimCertificate() {
//     // Check if MetaMask is installed
//     if (window.ethereum) {
//         try {
//             // Request MetaMask authentication
//             await window.ethereum.request({ method: 'eth_requestAccounts' });

//             // MetaMask is authenticated, generate SBT token
//             const sbtToken = await generateSBTToken();

//             // You can do something with the generated token here
//             console.log("SBT Token:", sbtToken);
//         } catch (error) {
//             // Handle error if user denies authentication or other issues
//             console.error("MetaMask authentication error:", error);
//         }
//     } else {
//         // MetaMask is not installed, prompt user to install MetaMask
//         alert("Please install MetaMask to claim your certificate.");
//     }
// }

// async function generateSBTToken() {
//     // This function should handle the SBT token generation logic
//     // It might involve interacting with a smart contract or a server
//     // For demonstration purposes, let's assume it returns a mock token
//     return "MockSBTToken";
// }

// // Add event listener to the button
// document.getElementById('claimCertificateBtn').addEventListener('click', claimCertificate);



// Function to check MetaMask installation and handle button click
// async function checkMetaMaskAndHandleButtonClick() {
//     if (window.ethereum) {
//         try {
//             // Request MetaMask account access
//             const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//             console.log("MetaMask connected. Account:", accounts[0]);

//             // Remove existing event listener if any
//             document.getElementById('claimCertificateBtn').removeEventListener('click', claimCertificate);

//             // Add event listener to the claim certificate button
//             document.getElementById('claimCertificateBtn').addEventListener('click', claimCertificate);
//         } catch (error) {
//             console.error('User denied account access:', error);
//             alert("Please connect MetaMask to claim your certificate.");
//         }
//     } else {
//         // MetaMask is not installed
//         alert("Please install MetaMask to claim your certificate.");
//     }
// }

// // Add event listener to check MetaMask and handle button click when DOM content is loaded
// document.addEventListener('DOMContentLoaded', checkMetaMaskAndHandleButtonClick);

// // Function to claim certificate
// async function claimCertificate() {
//     try {
//         // Generate SBT token
//         const sbtToken = await generateSBTToken();
//         console.log("SBT Token:", sbtToken);

//         // You can do something with the generated token here

//         alert('Congratulations! You have successfully claimed your certificate.\nSBT Token: ' + sbtToken);
//     } catch (error) {
//         console.error("Error generating SBT token:", error);
//         alert("An error occurred while generating the certificate. Please try again.");
//     }
// }

// // Function to generate SBT token
// async function generateSBTToken() {
//     // This function should handle the SBT token generation logic
//     // It might involve interacting with a smart contract or a server
//     // For demonstration purposes, let's assume it returns a mock token
//     return "MockSBTToken";
// }


// Function to claim certificate
// script.js

async function claimCertificate() {
    try {
        // Check if MetaMask is installed and connected
        if (window.ethereum) {
            // Request MetaMask account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const connectedAccount = accounts[0]; // Get the first connected account
            console.log("MetaMask connected. Account:", connectedAccount);

            // Generate SBT token
            const sbtToken = await generateSBTToken();
            console.log("SBT Token:", sbtToken);

            // Redirect to certificate template page
            window.location.href = 'certificate_template.html';
        } else {
            // MetaMask is not installed
            alert("Please install MetaMask to claim your certificate.");
        }
    } catch (error) {
        console.error("Error claiming certificate:", error);
        alert("An error occurred while claiming the certificate. Please try again.");
    }
}

// Function to generate SBT token
async function generateSBTToken() {
    try {
        // This function should handle the SBT token generation logic
        // It might involve interacting with a smart contract or a server
        // For demonstration purposes, let's assume it returns a mock token
        return "MockSBTToken";
    } catch (error) {
        console.error("Error generating SBT token:", error);
        throw error; // Rethrow the error for proper handling in claimCertificate
    }
}

// Add event listener to the claim certificate button
document.getElementById('claimCertificateBtn').addEventListener('click', claimCertificate);

