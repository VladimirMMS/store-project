import db from '../../../db/models/index'


export async function deleteProducttById(request:any, resply:any) {
    
    const {Product} = db
    try {
        const product = await Product.destroy({
            where: {
                id: request.params.id
            }
        })
        resply.send(`Product with id ${product} was deleted successfully`)  
        
    } catch (error) {
        resply.send(error)   
    }
}