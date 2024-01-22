module.exports = {
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "7d",
      },
    },
  },
  documentation: {
    enabled: true,
    config: {
      openapi: "3.0.0",
      info: {
        version: "1.0.0",
        title: "Dayfree",
        description:
          "Documentation for Dayfree application.<br /> Please dont share this documentation. Use for internal purpose only",
        // termsOfService: 'YOUR_TERMS_OF_SERVICE_URL',
        contact: {
          name: "Official",
          email: "cs@dayfree.org",
          url: "https://dayfree.org/",
        },
        license: {
          name: "Figma",
          url: "https://www.figma.com/file/RYdgWuwn974rEl8PZghAZK/Dayfree-Charity-App-(English)?type=design&node-id=0-1&mode=design&t=l3jWgFrJJemRejDD-0",
        },
      },
      "x-strapi-config": {
        // Leave empty to ignore plugins during generation
        // plugins: ['users-permissions'],
        plugins: ['users-permissions'],
        path: "/documentation",
      },
      servers: [
        { url: "http://localhost:1337/api", description: "Development server" },
        {
          url: "https://api.dayfree.org/api",
          description: "Production server",
        },
      ],
      externalDocs: {
        description: "Find out more",
        url: "https://dayfree.org/",
      },
      security: [{ bearerAuth: [] }],
    },
  },
};
