'use strict';

/**
 * sipintar controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::sipintar.sipintar', ({strapi}) => ({
    // async otp(ctx) {
    //     const body = ctx.request.body;
    //     const entry = await strapi.db.query('plugin::users-permissions.user').update({            
    //         select: ['id', 'username', 'nama'],
    //         where: {
    //             username: body.phone,
    //             otp: body.otp,
    //             blocked: true,
    //         },
    //         data: {
    //             blocked: false
    //         },
    //     });
    //     if (entry != null) {
    //         return entry;
    //     } else {
    //         return ctx.notFound('Phone or OTP not match');
    //     }
    // },    
}));
