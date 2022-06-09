/**
 * Route manifest - For the API
 *
 * TODO: it could be autogenerated from the API folder
 */
export const apiRoutes = {
  account: {
    // POST
    signup: {
      href: "/api/account/signup",
      method: "POST",
    },
    login: {
      href: "/api/account/login",
      method: "POST",
    },
    logout: {
      href: "/api/account/logout",
      method: "POST",
    },
    sendResetPasswordEmail: {
      href: "/api/account/send-reset-password-email",
      method: "POST",
    },
    changePassword: {
      href: "/api/account/changePassword",
      method: "POST",
    },
    verifyEmail: {
      href: "/api/account/verify-email",
      method: "POST",
    },
    // GET
    user: {
      href: "/api/account/user",
      method: "GET",
    },
  },
};