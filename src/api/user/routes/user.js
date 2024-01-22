module.exports = {
    routes: [
      {
        method: "POST",
        path: "/auth/create-pin",
        handler: "user.create_pin"
      },
      {
        method: "POST",
        path: "/auth/otp",
        handler: "user.otp",
      },
      {
        method: "POST",
        path: "/auth/forgot-pin",
        handler: "user.forgot_pin",
        config: {
          auth: false,
        },
      },
    ],
  };