'use strict';

/**
 * sipintar controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('plugin::users-permissions.user', ({strapi}) => ({
    async otp(ctx) {
        const body = ctx.request.body;
        const entry = await strapi.db.query('plugin::users-permissions.user').update({            
            select: ['id', 'username', 'nama'],
            where: {
                username: body.phone,
                otp: body.otp,
                blocked: true,
            },
            data: {
                blocked: false
            },
        });
        if (entry != null) {
            return entry;
        } else {
            return ctx.notFound('Phone or OTP not match');
        }
        return 'ok';
    },
    async create_pin(ctx) {
        const body = ctx.request.body;           
        const entry = await strapi.entityService.update(
            'plugin::users-permissions.user', 
            ctx.state.user.id,
            {            
            data: {
                password: body.password
            },
        });
        if (entry != null) {
            return entry;
        } else {
            return ctx.notFound('User not found');
        }
    },
    async forgot_pin(ctx) {
        const body = ctx.request.body;   
        const entry = await strapi.db.query('plugin::users-permissions.user').findOne({
            where: {
                username: body.phone,
            }
        });
        console.log('--- Checking----')
        if (entry != null) {
            console.log('Send WA')
        }    
        ctx.body = {message: "If found we will send your PIN to your Phone"}
    },
}));