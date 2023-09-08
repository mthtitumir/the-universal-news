function generateUniqueID(existingIDs) {
    let newID;
    do {
      // Generate a random 4-digit number
      newID = Math.floor(1000 + Math.random() * 9000).toString();
    } 
    while (existingIDs.includes(newID)); // Check if the generated ID already exists
  
    return newID;
  }
  const existingIDs = []; // An array to store existing IDs
  const uniqueID = generateUniqueID(existingIDs);
  console.log(uniqueID);

  
  
  
  