const express = require('express')
/*ตัวแปรที่เก็บมาเเล้วจะไม่สามารถแก้ไขได้*/
const { twig } = require('twig')

const app = express()
/*เก็บไว้ในexpress*/

app.set('view engine', 'twig')

const homeController = require('./controllers/home.controller')
const newsController = require('./controllers/news.controller')


app.get('/', homeController.index)
app.get('/news', newsController.index)

/*app.get('/', function(req, res) {
	res.send('Hello')
}) /*run ฟังก์ชั่น ที่อยู่ใน app คือ Hello*/

/*app.get('/home', function(req, res) {
	res.send('Home')<<m
})
เลาว์คือถาดของurl หน้าที่ คือชี้ให้รู้ว่าดึงข้อมูลมาจากตรงไหน
mvc cรับส่งข้อมูล*/ 
app.use('/assets', express.static(__dirname + '/static/assets', {
	maxAge: 86400000
}))

app.listen(8000, function(err) {
	console.log('server is running on port 8000')
}) /*แสดงค่าออกมาบนตัวที่รัน*/