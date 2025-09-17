import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import fs from 'fs';

// disk storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = './public/uploads'
    // this condition will check if the folder exists or not, if not it will create it
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true })
    }
    
    cb(null, uploadPath)
  },
  filename: function (req, file, cb) {
    const fileName = crypto.randomBytes(16).toString('hex') + path.extname(file.originalname) // random 16 byte name for file
    cb(null, fileName)
  }
})

// export upload upload variable
const upload = multer({ storage: storage })

export default upload;