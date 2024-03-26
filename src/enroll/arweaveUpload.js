const Arweave = require('arweave');

// Initialize Arweave
const arweave = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https'
});

// Function to upload certificate image to Arweave
async function uploadCertificateImage(file) {
    try {
        // Convert file to Uint8Array
        const fileData = new Uint8Array(await file.arrayBuffer());
        
        // Create Arweave transaction
        const transaction = await arweave.createTransaction({ data: fileData });
        
        // Add metadata (e.g., content type)
        transaction.addTag('Content-Type', file.type);
        
        // Sign transaction
        await arweave.transactions.sign(transaction);
        
        // Post transaction to Arweave network
        const response = await arweave.transactions.post(transaction);
        
        // Log transaction ID
        console.log('Certificate image uploaded. Transaction ID:', transaction.id);
        
        // Return transaction ID
        return transaction.id;
    } catch (error) {
        console.error('Error uploading certificate image to Arweave:', error);
        throw error;
    }
}

module.exports = { uploadCertificateImage };
