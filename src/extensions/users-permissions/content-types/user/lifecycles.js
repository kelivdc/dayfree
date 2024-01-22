const logger = require('../../../../../helpers/logger');

async function send_wa(phone, otp) {    
    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");    
        
    const entry = await strapi.entityService.findOne('api::sipintar.sipintar', 1);
    const token = await entry.token;

    try {
        const response = await fetch(process.env.WA_URL + "/api/wa", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "senderid": process.env.WA_SENDER_ID,
                "type": "wa",
                "msisdn": String(phone),
                "encoding": "GSM",
                "messageType": "TEXT",
                "message": String(otp),
                "username": process.env.WA_USERNAME,
                "password": process.env.WA_PASSWORD,
                "token": token
            })
        });
        const hasil = await response.json();
    } catch (error) {
        logger.error(error);
        console.log(error)
    }
    return entry;    
}

module.exports = {
    beforeCreate(event) {
        const { data, where, select, populate } = event.params;
        const email = event.params.data.username + '@dayfree.org'
        const otp = Math.floor(Math.random() * 999999) + 100000;        
        const user_code = (Math.random() + 1).toString(36).substring(7);
        event.params.data.confirmed = false;
        event.params.data.blocked = true; //Blocked until OTP match
        event.params.data.otp = otp;
        event.params.data.email = email;
        event.params.data.user_code = user_code;
    },
    afterCreate(event) {
        const { result, params } = event;             
        // send_wa(result.username, result.otp); //For OTP
    },
}