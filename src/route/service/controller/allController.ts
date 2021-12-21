import db from '../../../db/models/index'


export async function createCustomer(request:any, reply:any) {
    const {Customer} = db
    const {name, lastname, age} = request.body

    try {
        let newCsutomer = await Customer.create({
            name,
            lastname,
            age
        });
        if(newCsutomer) {
            reply.send('Customer created successfully')
        }  
       
    } catch (error) {
        reply.send("Something wrong happenned with the server")
    } 
}


export async function getAllCustomer(request:any, reply:any) {
    const {Customer} = db
    try {
        const customer = await Customer.findAll()
        if(customer.length) {
            return reply.send(customer)
        }
        else {
            reply.code(200).send("There isn't any customer")
        } 
    } catch (error) {
        reply.send('An error occurred in the server', error)
    }  
}

export async function getAllCustomerById(request:any, reply:any) {
    const {Customer} = db
    const {id} = request.params

    try {
        const customer = await Customer.findOne({
            where:parseInt(id)
        })
        if(customer) {
            reply.send(customer)
        }
        else {
            reply.send("There isn't any customer with that id")
        }
        
    } catch (error) {
        reply.send('An error occurred in the server', error)
    }  
}
export async function updateCustomer(request:any, resply:any) {
    const {Customer} = db
    const {name, lastname, age} = request.body;

    try {
        const customer = await Customer.findAll({
            where: {
                id: request.params.id
            }
        })
        if(customer.length > 0) {
            customer.forEach(async (each: any) => {
                await each.update({
                    name,
                    lastname,
                    age
                })
            })
        }
        resply.send(customer)  
        
    } catch (error) {
        resply.send(error)
    }
   
}

export async function deleteCustomerById(request:any, resply:any) {
    
    const {Customer} = db
    try {
        const customer = await Customer.destroy({
            where: {
                id: request.params.id
            }
        })
        resply.send(`Customer with id ${customer} was deleted successfully`)  
        
    } catch (error) {
        resply.send(error)   
    }
}

export async function createProduct(request:any, reply:any) {
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

export async function getAllProduct(request:any, reply:any) {
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

export async function getAllProductById(request:any, reply:any) {
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






