'use strict';

const { schema } = require("./extensions/users-permissions/content-types/user");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    if (strapi.plugin('documentation')) {
      const override = {
        // Only run this override for version 1.0.0
        info: { version: '1.0.0' },           
        paths: {     
          '/auth/local/register': {
            post: {
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      properties: {
                        name: {
                          type: 'string'
                        },
                        username: {
                          type: 'string'
                        },
                        email: {
                          type: 'string'
                        },
                        password: {
                          type: 'string'
                        },
                        referral_code: {
                          type: 'string'
                        },
                      }
                    },
                    example: {
                      name: 'Rojali',
                      username: '628123456789',
                      email: 'test@dayfree.org',
                      password: '12345678',
                      referral_code: 'abcde'
                    }
                  }
                }
              },
              required: true,
              summary: 'User registration',
              responses: { 
                200: { 
                  description: "Success registered" 
                },
                400: {
                  description: "Bad request"
                },
                default: {
                  description: "Error",
                  content: {
                    'application/json': {
                      schema: {
                        $ref: '#/components/schemas/Error'
                      }
                    }
                  }
                }
              },
              tags: ["Users-Permissions - Auth"],
            }
          },
          '/auth/otp': {            
            post: {
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      properties: {
                        phone: {
                          type: 'string',
                        },
                        otp: {
                          type: 'number',
                          length: 6
                        },
                      }
                    },
                    example: {
                      phone: '628521234567',
                      otp: '123456'
                    },
                  }
                },
                required: true,  
              },        
              required: true,  
              summary: "Phone otp activation",
              responses: { 
                200: { 
                  description: "Success activation" 
                },
                404: {
                  description: "Phone or OTP not match"
                },
                default: {
                  description: "Error",
                  content: {
                    'application/json': {
                      schema: {
                        $ref: '#/components/schemas/Error'
                      }
                    }
                  }
                },
              },
              tags: ["Users-Permissions - Auth"],
            }
          },   
          '/auth/create-pin': {            
            post: {
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      properties: {
                        password: {
                          type: 'number',
                        },                       
                      }
                    },
                    example: {
                      password: '123456',
                    },
                  }
                },
                required: true,  
              },     
              required: true,  
              summary: 'Create new PIN',  
              responses: { 
                200: { 
                  description: "Success create new pin" 
                },               
                default: {
                  description: "Error",
                  content: {
                    'application/json': {
                      schema: {
                        $ref: '#/components/schemas/Error'
                      }
                    }
                  }
                },
              },                    
              tags: ["Users-Permissions - Auth"],
            }
          },  
          '/auth/forgot-pin': {            
            post: {
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      properties: {
                        phone: {
                          type: 'string',
                        },                       
                      }
                    },
                    example: {
                      phone: '628123456789',
                    },
                  }
                },               
              },  
              required: true,  
              summary: 'Forgot PIN',     
              responses: { 
                200: { 
                  description: "Pin will sent to phone number if found" 
                },                               
              },                    
              tags: ["Users-Permissions - Auth"],
            }
          },   
        }
      }

      strapi
        .plugin('documentation')
        .service('override')
        .registerOverride(override, {});
    }
    strapi
    .plugin("documentation")
    .service("override")
    .excludeFromGeneration(["sipintar"]);
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
