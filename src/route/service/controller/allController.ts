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
            reply
            .code(200)
            .header('Content-Type', 'application/json')
            .send({customer:newCsutomer})
        }  
       
    } catch (error) {
        reply
        .code(200)
        .header('Content-Type', 'application/json')
        .send({customer:""})
    } 
}


export async function getAllCustomer(request:any, reply:any) {
    const {Customer} = db
    try {
        const customer = await Customer.findAll()
        if(customer.length) {
            reply
            .code(200)
            .header('Content-Type', 'application/json')
            .send({customer:customer})
            
        }
        else {
            reply
            .code(303)
            .header('Content-Type', 'application/json')
            .send({customer:customer})
        } 
    } catch (error) {
        reply
            .code(501)
            .header('Content-Type', 'application/json')
            .send({message:'Something wrong happenned in the server'})
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
            reply
            .code(200)
            .header('Content-Type','application/json')
            .send({customer:customer})
        }
        else {
            reply
            .code(303)
            .header('Content-Type','application/json')
            .send({message:"There isn't any customer with that id"})
        }
        
    } catch (error) {
        reply
        .code(501)
        .header('Content-Type','application/json')
        .send({message:'Something wrong happenned in the server'})
    }  
}
export async function updateCustomer(request:any, reply:any) {
    const {Customer} = db
    const {name, lastname, age} = request.body;

    const values = {name, lastname, age}
    

    try {
       const updateCustomer = await Customer.update(
           values,
           {where: {id:request.params.id}},
       )
       if(updateCustomer) {
            reply
            .code(200)
            .header('Content-Type','application/json')
            .send({customer:updateCustomer})
    } 
        
    } catch (error) {
        reply
        .code(501)
        .header('Content-Type','application/json')
        .send({message:'Something wrong happenned with the server'})
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
        resply
        .code(200)
        .header('Content-Type','application/json')
        .send({customer:customer})  
        
    } catch (error) {
        resply
        .code(200)
        .header('Content-Type','application/json')
        .send({message:'Something wrong happenned with the server'})   
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
            reply
            .code(200)
            .header('Content-Type','application/json')
            .send({product:newProduct})  
        }  
       
    } catch (error) {
        reply
        .code(200)
        .header('Content-Type','application/json')
        .send({message:'Something wrong happenned with the server'})   
    }
}

export async function getAllProduct(request:any, reply:any) {
    const {Product} = db
    try {
        const allProduct = await Product.findAll()
        if(allProduct.length) {
            reply
            .code(200)
            .header('Content-Type','application/json')
            .send({product:allProduct})  
          
        }
        else {
            reply
            .code(303)
            .header('Content-Type','application/json')
            .send({message:'There is not any product yet'}) 
        } 
    } catch (error) {
        reply
        .code(501)
        .header('Content-Type','application/json')
        .send({message:'An error occurred in the server'})
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
            reply
            .code(200)
            .header('Content-Type','application/json')
            .send({product:allProduct}) 
        }
        else {
            reply
            .code(303)
            .header('Content-Type','application/json')
            .send({message:"There isn't any product with that id"})
        }
        
    } catch (error) {
        reply
        .code(501)
        .header('Content-Type','application/json')
        .send({message:'An error occurred in the server'})
    }  
}

export async function updateProduct(request:any, reply:any) {
    const {Product} = db
    const {name, price} = request.body;
    const values = {name, price}

    try {
        const updateCustomer = await Product.update(
            values,
            {where: {id:request.params.id}},
        )
        if(updateCustomer) {
                reply
                .code(200)
                .header('Content-Type','application/json')
                .send({customer:updateCustomer})
        } 
            
        } catch (error) {
            reply
            .code(501)
            .header('Content-Type','application/json')
            .send({message:'Something wrong happenned with the server'})
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
        resply
            .code(200)
            .header('Content-Type','application/json')
            .send({product:product}) 
        
    } catch (error) {
        resply
        .code(501)
        .header('Content-Type','application/json')
        .send({message:'An error occurred in the server'})    
    }
}
 