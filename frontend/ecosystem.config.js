module.exports = {
    apps: [
      {
        name: 'bansing-gogo-customer',
        exec_mode: 'cluster',
        instances: 2, // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start'
      }
    ]
  }