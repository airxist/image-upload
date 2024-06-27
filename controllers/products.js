const { StatusCodes } = require("http-status-codes");
const ProductSchema = require('../model/Product');

const getProducts = async (req, res) => {
  const products = await ProductSchema.find({});
  res.status(StatusCodes.OK).json({ products })
}
const createProduct = async (req, res) => {
  await ProductSchema.create(req.body)
  res.status(StatusCodes.CREATED).json({
    msg: "product created"
  })
}

module.exports = {
  getProducts,
  createProduct
}