import db from '../../../db/models/index'


async function getAllProduct(request:any, reply:any) {
    const {Product} = db
    try {
        const allProduct = await Product.findAll()
        if(allProduct.length) {
            return reply.send(allProduct)
        }
        else {
            reply.send("There isn't any product")
        } 
    } catch (error) {
        reply.send('An error occurred in the server', error)
    }  
}



export default getAllProduct


