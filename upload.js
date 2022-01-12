const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dest = `./public/${file.fieldname}`
    if(file.fieldname = 'audio')
      cb(null, dest)
    else if(file.fieldname = 'thumbnail'){
      cb(null, dest)
    }
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

exports.upload = multer({ storage: storage })