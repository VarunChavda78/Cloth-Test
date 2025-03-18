import multer from "multer";
import fs from "fs";

// Ensure uploads directory exists
const uploadsDir = "./uploads";
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, uploadsDir); // Set upload directory
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({  storage: storage  });

export default upload;
