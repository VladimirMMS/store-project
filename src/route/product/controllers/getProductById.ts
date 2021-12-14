import db from '../../../db/models/index'


async function getAllProductById(request:any, reply:any) {
    const {Product} = db
    const {id} = request.params

    try {
        const allProduct = await Product.findOne({
            where:parseInt(id)
        })
        if(allProduct) {
            reply.send(allProduct)
        }
        else {
            reply.send("There isn't any product with that id")
        }
        
    } catch (error) {
        reply.send('An error occurred in the server', error)
    }  
}


export default getAllProductById;