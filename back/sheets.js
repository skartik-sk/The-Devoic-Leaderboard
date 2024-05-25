const { google } = require('googleapis');
const { GoogleAuth } = require('google-auth-library');
require('dotenv').config();

const sheets = google.sheets('v4');

async function getGoogleSheetsData(spreadsheetId, range) {
const auth = new GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON),
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

    const client = await auth.getClient();

    const res = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
        auth: client,
    });

    return res.data.values;
}

module.exports = getGoogleSheetsData;