var express = require('express')
var router = express.Router()
const { index, actionStatus, viewBuktiPembayaran } = require('./controller')

const { isLoginAdmin } = require('../middleware/auth')

router.use(isLoginAdmin)
router.get('/', index)
router.put('/status/:id', actionStatus)
router.get('/view_bukti_bayar/:id', isLoginAdmin, viewBuktiPembayaran)

module.exports = router
