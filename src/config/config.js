const profiles = {
  dev: {
    name: 'development',
    URL: 'http://localhost:8080',
  },
}

// Default to local if not set
const config =
  profiles[
    process.env.REACT_APP_PROFILE ? process.env.REACT_APP_PROFILE : 'dev'
  ]
if (config.name !== 'production') {
  console.log('REACT_APP_PROFILE=', process.env.REACT_APP_PROFILE)
  console.log('config=', config)
}

export default {
  // Add common config values here,
  ...config,
}
