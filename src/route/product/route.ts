import db from '../../../db/models'
import getAllProduct from './controllers/getProducts'

interface ClientInter {
    url:any,
    method:any,
    handler: any
}

const route:ClientInter = {
    url:'/product',
    method:'GET',
    handler: getAllProduct
}


export default route;