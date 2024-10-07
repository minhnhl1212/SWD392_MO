const Product = require('../models/Products')

module.exports = {
    createProduct: async (req, res) => {
        const newProduct = new Product(req.body)
        try {
            await newProduct.save()
            res.status(200).json("Product created successfully")
        } catch (err) {
            res.status(500).json("Failed to create product")
        }
    },

    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find().sort({createdAt: -1})
            res.status(200).json(products)
        } catch (err) {
            res.status(500).json("Failed to get products")
        }
    },

    getProduct: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id)
            res.status(200).json(product)
        } catch (err) {
            res.status(500).json("Failed to get product")
        }
    },

    searchProduct: async (req, res) => {
        try {
            const products = await Product.aggregate(
                [
                    {
                        $search: {
                            index: "nshop",
                            text: {
                                query: req.params.key,
                                path: {
                                    wildcard: "*"
                                }
                            }
                        }
                    }
                ]
            )
            res.status(200).json(products)
        } catch (err) {
            res.status(500).json("Failed to get products")
        }
    },
}