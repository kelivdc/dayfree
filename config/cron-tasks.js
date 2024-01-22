const logger = require('../helpers/logger');

module.exports = {
  sendOTP: {
    task: async ({ strapi }) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({
            "username": process.env.WA_USERNAME,
            "password": process.env.WA_PASSWORD,
            "clientid": process.env.WA_CLIENT_ID
        });
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        try {
            const response = await fetch(process.env.WA_URL + "/api/oauth", requestOptions);
            const hasil = await response.json();        
            const token = hasil.token;
            const entry = await strapi.entityService.update('api::sipintar.sipintar', 1, {
                data: {
                  token: token,
                },
            });
        } catch (error) {
            logger.error(error)
            console.log(error)
        }        
    },
    options: {
      // Every 1 hour
      rule: "*/60 * * * *",
    },
  },
};