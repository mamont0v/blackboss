import express from 'express';
import Products from '../models/Products.model.js';
import expressAsyncHandler from 'express-async-handler';
const router = express.Router();


router.get('/', expressAsyncHandler(async (req, res) => {
    const products = await Products.find()
    
    res.json(products)


}))

router.get('/:id', expressAsyncHandler(async (req, res) => {
    const product = await Products.findById(req.params["id"]) // = req.params.id
    if(product) {
        res.json(product)

    } else {
        throw new Error('Can\'t get a ID') //res.status(404).json({message: 'Product doestn found'})
    }
    
}))


export default router;