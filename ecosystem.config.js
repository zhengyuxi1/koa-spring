module.exports = {
    apps: [{
      name: 'koa-server',
      script: './index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      },
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      output: './logs/out.log',
      error: './logs/error.log',
      combine_logs: true,
      log: './logs/combined.log'
    }]
  };

//start command: pm2 start ecosystem.config.js --env production