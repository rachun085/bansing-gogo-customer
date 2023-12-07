export default () => ({
    environment: process.env.NODE_ENV,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || 'banSingGoGo@_',
    accessTokenExpirationTime: process.env.ACCESS_TOKEN_EXPIRATION_TIME || '15m' ,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || 'iw5hH9WQJFPKkegnZ8DxYTkq/g9/uryJAI8I7AFqaKzOkO/RmOf66VEO1zU44gi+s1p/8f1aCLyheTpJ7PdWgzyc4C4kQsy4usyFPpVUSUtyGtHD9J8+XOBhzEt1gzFztbI5lId7vBz2lweIrjten5OAdKZ/iWADXwX5MQYrPn+IrfJDldSxI4kcWfnozHNZV/JFKZpWpESOV5tQhCSGmEUjO5UY4DjbHQLunKwLCllplWGfX9H7HTv2Lo0Wbvx38mjWt2ppAJtijD1iIu+Q7Y0ONoGhUjb4r3HMDqnYuwQZKGo+huVDXr8/fZq0Z+mDnOADHR1H0ksu7vAYgrocHg==',
    refreshTokenExpirationTime: process.env.REFRESH_TOKEN_EXPIRATION_TIME || '7d',
    emailExpirationTime: process.env.EMAIL_EXPIRATION_TIME || 600000 , 
    port: process.env.APP_PORT ? parseInt(process.env.APP_PORT, 10) : 4000,
    mysql: {
        host: process.env.MYSQL_HOST || '10.104.3.185',
        port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT, 10) : 3306,
        database: process.env.MYSQL_DATABASE || 'bansing_gogo_db',
        username: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || 'bansing_gogo' 
    },
    resetPasswordEmailUrl: process.env.RESET_PASSWORD_EMAIL_URL || 'http://localhost:3000/reset-password'
});
