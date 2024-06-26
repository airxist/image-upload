const { StatusCodes } = require("http-status-codes");
const path = require('path');
const { BadRequestError } = require("../errors");

const uploadImage = async (req, res) => {
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

module.exports = uploadImage