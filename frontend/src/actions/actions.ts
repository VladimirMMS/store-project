export type CrudActions = | {type: 'GET', payload:{data: object}}
| {type: 'POST', payload: {state:object}} 
| {type: 'PUT', payload: {state:object}} 
| {type: 'DEL', payload: {id: string}}

export const getData = (data:object): CrudActions => ({
    type:'GET',
    payload: { 
        data 
    }
    

})