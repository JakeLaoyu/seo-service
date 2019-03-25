const prerender = require('prerender')
const removeScriptsPlugin = require('prerender/lib/plugins/removeScriptTags')
const whitelist = require('prerender/lib/plugins/whitelist')
const cache = require('prerender-memory-cache')
console.log(process.env.NODE_ENV)
const server = prerender({
  // logRequests: true
  port: process.env.NODE_ENV === 'development' ? 3001 : 3032
})

// 白名单
process.env.ALLOWED_DOMAINS = ''
// 缓存大小
process.env.CACHE_MAXSIZE = 100
// 缓存时间
process.env.CACHE_TTL = 12 * 60 * 60 * 7

server.use(removeScriptsPlugin)
server.use(cache)
server.use(whitelist)

server.start()
