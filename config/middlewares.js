module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  {
    name: 'strapi::poweredBy',
    config: {
      poweredBy: 'Dayfree',
    },
  },
  'strapi::query',
  {
    name: "strapi::body",
    config: {
      formLimit: "30mb", // modify form body
      jsonLimit: "256mb", // modify JSON body
      textLimit: "256mb", // modify text body
      formidable: {
        maxFileSize: 30 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
