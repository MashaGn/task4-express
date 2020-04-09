const PORT = 4321;
const path = require('path');
const express =  require('express');
const app = express();
const cors = require('cors');

app
.use(cors())
.use('/api', require('./api')(express))

.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'files', 'index.html'))
})

.get('/mod_resourse/t2', (req, res) => {
   res
   .status(200)
   .set({
     'Content-Type' : 'application/pdf'
   })
   .sendFile(path.join(__dirname, 'files', 't2.pdf'))
})

.get('/static/content', (req, res) => {
   res
   .status(200)
   .set({
     'Content-Type' : 'application/pdf'
   })
   .sendFile(path.join(__dirname, 'files', 'static.pdf'))
})

.use((req, res) => {
  res
  .status(404)
  .set({
    'Content-Type':'text/html; charset=utf-8'
  })
  .send('<h1 style="color:red">Не найдено</h1>');
})

.listen(process.env.PORT || PORT, ()  => console.log(`Процесс ${process.pid} на порту ${PORT}`));
