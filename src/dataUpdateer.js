const fs = require('fs');
const currentDate = new Date();

// Read data from the JSON file
const rawData = fs.readFileSync('internships.json');
const data = JSON.parse(rawData);

// Filter out items with expired apply_by dates
const filteredData = data.internships.filter(item => {
    const applyByDate = new Date(item.apply_by);
    return applyByDate >= currentDate;
});

// Write the updated data back to the JSON file
data.internships = filteredData;
fs.writeFileSync('internships.json', JSON.stringify(data));
