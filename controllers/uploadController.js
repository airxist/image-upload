const { StatusCodes } = require("http-status-codes");
const path = require('path');
const fs = require('fs');
const { BadRequestError } = require("../errors");
const cloudinary = require('cloudinary').v2

const uploadImageLocal = async (req, res) => {
  if (!req.files) {
    throw new BadRequestError('no image was uploaded');
  }
  // check if file is an image
  const productImage = req.files.photo;
  if (!productImage.mimetype.startsWith('image')) {
    throw new BadRequestError('Please Upload An Image')
  }
  // is the size okay
  const maxSize = 1024 * 1024;
  if(productImage.size > maxSize) {
    throw new BadRequestError('Upload an image lesser than 1mg')
  }
  const imgPath = path.join(
    __dirname,
     `../public/images/${productImage.name}`
  )
  await productImage.mv(imgPath)
  res
  .status(StatusCodes.OK)
  .json({ photo: {src: `/images/${productImage.name}`}})
}

const uploadImageCloud = async (req, res) => {
  if (!req.files) {
    throw new BadRequestError('no file uploaded')
  }
  const productImage = req.files.photo;
  if (!productImage.mimetype.startsWith('image')) {
    throw new BadRequestError('upload an image')
  }
  const result = await cloudinary.uploader.upload(req.files.photo.tempFilePath, {
    use_filename: true,
    folder: 'image-uploads'
  })
  fs.unlinkSync(req.files.photo.tempFilePath)
  res.status(StatusCodes.OK).json({
    photo: {
      src: result.secure_url
    }
  })
}

module.exports = uploadImageCloud