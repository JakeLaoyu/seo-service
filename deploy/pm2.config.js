// 由于实际运维环境的要求，本项目不启用依赖pm2 deploy方式部署
module.exports = {
  'apps': [{
    'name': 'seo-service',
    'script': 'app.js',
    'env': {},
    'env_production': {
      'NODE_ENV': 'production'
    }
  }]
}
