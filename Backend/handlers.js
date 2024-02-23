const User = require("./models/user")
const Product = require("./models/product")
const jwt = require('jsonwebtoken')
const SECRET = '123456@#$%^'
const {formidable} = require('formidable')
const fs = require('fs')

// ========================================================= REGISTER

exports.register = async function(req, res){
    const { name, email, password } = req.body;
    await User.create({
        name, email, password, role: 'seller'
    })
    res.json({success: true, message: 'User created!'})
}

// =========================================================== LOGIN

exports.login = async function(req, res){
    const {email, password} = req.body
    let user = await User.findOne({
        where: { email }
    })
    if(user){
        if(user.password == password){
            let token = jwt.sign(user.id, SECRET)
            return res.json({success: true, token: token})
        }
    } return res.json({success: false})
}

// =============================================================== ADD-PRODUCT

exports.addProduct = async function(req, res){
    const form = formidable({uploadDir: './uploads'})
    form.parse(req, async function(error, fields, files){
        const name = fields.name[0]
        const price = fields.price[0]
        const image = files.product_image[0]
        const userId = req.loggedUser.id
        const ext = image.mimetype.split('/')[1]
        const fileName = image.newFilename + '.' + ext
        fs.rename(image.filepath, image.filepath + '.' + ext, function(){})
        await Product.create({
            name, price, image: '/uploads/' + fileName, userid: userId
        })
        res.json({success: true, message: 'Product successfuly created'})

    })
}

// ============================================================== MY-PRODUCT

exports.myProducts = async function(req, res){
    try {
        let products = req.loggedUser.products || []
        res.json({success: true, products})
    } catch(e){
        res.json({success: false})
    }
}

// ============================================================ ALL-PRODUCTS

exports.viewProducts = async function(req, res){
    let products = await Product.findAll({order: [['createdAt', 'desc']]})
    res.json({success: true, products})
}

// =========================================================== DELETE

exports.deleteProduct = async function(req, res){
    const id = req.params.id;
    let product = await Product.findByPk(id);
    if(product){
        product.destroy()
    }else{
        res.json({Error: 'The product does not exist'})
    }
}

// ============================================================ GET UPDATED

exports.getToUpdate = async function(req, res){
     const x = await Product.findOne(
        {
         where: {
             id: req.params.id
         }
      })
      res.json(x)
}

// ==========================================================
exports.updateProduct = async function(req, res){
    const {name, price} = req.body
    let product = await Product.findByPk(req.params.id)
    product.name = name
    product.price = price
    product.save()
    res.json({success: true})
}

