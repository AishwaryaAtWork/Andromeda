// Check for outdated data
function checkForOutdatedData(data) {
    const currentDate = new Date();
    return data.filter(item => {
        const applyByDate = new Date(item.apply_by);
        return applyByDate < currentDate;
    });
}

// Remove outdated data and rewrite JSON file
function removeOutdatedData() {
    const jsonData = require('./internshipsData.json');
    const outdatedData = checkForOutdatedData(jsonData.internships);
    const updatedData = jsonData.internships.filter(item => !outdatedData.includes(item));
    const updatedJsonData = { internships: updatedData };
    fs.writeFileSync('./data.json', JSON.stringify(updatedJsonData));
}

// Schedule function to run periodically
setInterval(removeOutdatedData, 86400000); // Runs once a day
