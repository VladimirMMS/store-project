import db from '../../../db/models/index'


async function createCustomer(request:any, reply:any) {
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


export default createCustomer;
