import db from '../../../db/models/index'


async function createProduct(request:any, reply:any) {
    const {Product} = db
    const {name, price} = request.body

    try {
        let newProduct = await Product.create({
            name,
            price,
        });
        if(newProduct) {
            reply.send('Product created successfully')
        }  
       
    } catch (error) {
        reply.send("Something wrong happenned with the server")
    } 
}


export default createProduct;
