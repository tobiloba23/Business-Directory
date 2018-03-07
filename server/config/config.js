module.exports = {
  development: {
    username: 'TOBI',
    password: process.env.DB_DEV_PASSWORD,
    database: 'business_directory_dev',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres'
  },
  test: {
    username: 'postgres',
    database: 'business_directory_test',
    port: 5432,
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres'
  }
};
