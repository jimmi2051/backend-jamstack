module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env("DATABASE_HOST", "ds121622.mlab.com"),
        srv: env.bool("DATABASE_SRV", false),
        port: env.int("DATABASE_PORT", 21622),
        database: env("DATABASE_NAME", "jamstack"),
        username: env("DATABASE_USERNAME", "admin"),
        password: env("DATABASE_PASSWORD", "o0i9u8y7"),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", "jamstack"),
        ssl: env.bool("DATABASE_SSL", false),
      },
    },
  },
});
