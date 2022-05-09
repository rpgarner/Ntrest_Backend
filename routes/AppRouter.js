const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const NtrestRouter = require('./NtrestRouter')
const EventRouter = require('./EventRouter')
const Event_listRouter = require('./Event_listRouter')

Router.use('/users', UserRouter)
Router.use('/ntrest', NtrestRouter)
Router.use('/event', EventRouter)
Router.use('/Event_list', Event_listRouter)

module.exports = Router