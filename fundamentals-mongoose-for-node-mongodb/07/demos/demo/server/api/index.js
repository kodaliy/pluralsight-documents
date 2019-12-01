const express = require('express')
const router = express.Router()

require('./routes/standup')(router)
require('./routes/projects')(router)
require('./routes/team')(router)

module.exports = router