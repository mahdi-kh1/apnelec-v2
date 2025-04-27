const fs = require('fs');
const path = require('path');

console.log('\n🔍 Running case sensitivity check...');

// Function to ensure directories are lowercase
function ensureLowerCaseDirectories(dirPath) {
  try {
    // Get all files and directories
    const items = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item.name);
      
      // Skip node_modules, .git, and .next directories
      if (item.name === 'node_modules' || item.name === '.git' || item.name === '.next') {
        continue;
      }
      
      // If it's a directory, process its contents recursively
      if (item.isDirectory()) {
        // Check if directory name has uppercase letters
        if (item.name !== item.name.toLowerCase()) {
          console.log(`⚠️ Found directory with uppercase: ${fullPath}`);
          
          try {
            // Create a temporary directory with lowercase name
            const tempName = `${item.name}_temp_lower`;
            const tempPath = path.join(dirPath, tempName);
            const targetPath = path.join(dirPath, item.name.toLowerCase());
            
            console.log(`🔄 Renaming: ${item.name} -> ${tempName} -> ${item.name.toLowerCase()}`);
            
            // Two-step rename (required on case-insensitive file systems)
            fs.renameSync(fullPath, tempPath);
            fs.renameSync(tempPath, targetPath);
            
            console.log(`✅ Successfully renamed to lowercase: ${targetPath}`);
          } catch (err) {
            console.error(`❌ Error renaming directory: ${fullPath}`, err);
          }
        } else {
          // Directory is already lowercase, continue processing its contents
          ensureLowerCaseDirectories(fullPath);
        }
      }
    }
  } catch (err) {
    console.error(`❌ Error processing directory: ${dirPath}`, err);
  }
}

// Start processing from src directory
const srcPath = path.join(__dirname, '..', 'src');
console.log(`🚀 Starting case sensitivity check from: ${srcPath}`);
ensureLowerCaseDirectories(srcPath);

console.log('✅ Case sensitivity check completed\n'); 