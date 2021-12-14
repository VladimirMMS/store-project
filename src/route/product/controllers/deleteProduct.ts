import db from '../../../db/models/index'


export async function deleteProjectById(request:any, resply:any) {
    
    const {Product} = db

    const product = await Product.destroy({
        where: {
            id: request.params.id
        }
    })
    resply.send(product)  
}