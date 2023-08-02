import { diskStorage } from 'multer';

export const configMulter = diskStorage({
  // Specify where to save the file
  destination: (req, file, cb) => {
    cb(null, 'frontend/assets/images/uploads');
  },
  // Specify the file name
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});