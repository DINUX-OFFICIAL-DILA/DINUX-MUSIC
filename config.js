const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/KWSKzft/CE76-C7-C8-EAAF-4-D05-B6-B0-475987-FE321-E.jpg",
ALIVE_MS: process.env.ALIVE_MSG || "I'm Alive Now",
};
