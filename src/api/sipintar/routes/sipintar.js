"use strict";

const { register } = require("../../..");

/**
 * sipintar router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::sipintar.sipintar");
