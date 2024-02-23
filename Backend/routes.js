const routes = require('express').Router()
const {register, login, addProduct, viewProducts, myProducts, deleteProduct, getToUpdate, updateProduct} = require('./handlers')
const Product = require('./models/product')
const User = require('./models/user')
const jwt = require('jsonwebtoken')
const SECRET = '123456@#$%^'


// ===============================
const verifyToken = async(req, res, next) =>{
  const Authorization = req.headers['authorization']
  if(Authorization){
      let token = Authorization.split(' ')[1]
      const id = jwt.verify(token, SECRET)
      let user
      try {
          user = await User.findByPk(id.toString(), {include: Product})  
      } catch(error){
        //   user = await User.findByPk(id.toString())
        console.log(error)
      }   
      if(user){
          req.loggedUser = user
          console.log(user.products)
          return next()
      } 
  }
  res.sendStatus(403); 
}
// ==============================

routes.post('/register', register)
routes.post('/login', login)
routes.get('/products', viewProducts)

routes.get('/my-products',verifyToken, myProducts)
routes.post('/add-product',verifyToken, addProduct)
routes.get('/delete-product/:id', deleteProduct)
routes.get('/get-to-update/:id', getToUpdate)
routes.post('/update-product/:id', updateProduct)

module.exports = routes

// routes.use(async function(req, res, next){
//     const Authorization = req.headers['authorization']
//     console.log(Authorization)
//     if(Authorization){
//         let token = Authorization.split(' ')[1]
//         const id = jwt.verify(token, SECRET)
//         let user
//         try {
//             user = await User.findByPk(id.toString(), {include: Product})  
//         } catch(e){
//             user = await User.findByPk(id.toString())
//         }
        
//         if(user){
//             // console.log('user found', user)
//             req.loggedUser = user
//             return next()
//         } 
//     }
//     res.sendStatus(403);
    
// })

