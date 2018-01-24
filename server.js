import config from './config'
import express from 'express'
import apiRouter from './api'

const server = express()

server.get('/', (req, res) => {
	res.render('index', {
		content: 'Hello EJS'
	})
})

//sets view engine to be EJS
server.set('view engine', 'ejs')

// brings in api and allows public folder
server.use('/api', apiRouter)
server.use(express.static('public'))

server.listen(config.port, () => {
	console.info("Listening on port", config.port)
})