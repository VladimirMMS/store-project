import db from '../../../db/models/index'

export async function updateProduct(request:any, resply:any) {
    const {Product} = db
    const {name, price} = request.body;

    try {
        const products = await Product.findAll({
            where: {
                id: request.params.id
            }
        })
        if(products.length > 0) {
            products.forEach(async (product: any) => {
                await product.update({
                    name,
                    price
                })
            })
        }
        resply.send(products)  
        
    } catch (error) {
        resply.send(error)
    }
   
}