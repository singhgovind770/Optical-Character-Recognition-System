const express = require('express')
const multer  = require('multer')
const app = express()
const port = process.env.PORT || 3000
var bodyParser = require('body-parser')
var path = require('path');

app.use(bodyParser.json())
app.use(express.static('images'))
const Tesseract= require('tesseract.js');

const storage = multer.diskStorage({
  destination:(req, file, cb)=>{
    cb(null, 'images');
  },
  filename:(req, file, cb)=>{
    console.log(file);
    cb(null, Date.now()+path.extname(file.originalname))
  } 
})

const upload = multer({ storage: storage })



app.get('/', (req, res) => {
  res.json({
    'message':'Hello World!',
    'body':req.body
  })
})



app.post('/upload', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file)

  Tesseract.recognize(
    // this first argument is for the location of an image it can be a //url like below or you can set a local path in your computer
    req.file.path,
    // this second argument is for the laguage 
    'eng',
    { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
      console.log(text);
      res.json({
        'status':'true',
        'message':'image uploaded successfully',
        'response':req.file,
        'extracted text':text
        
      })
    })
    

})

app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})


