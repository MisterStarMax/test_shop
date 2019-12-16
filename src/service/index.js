import {db} from './firebase'

export default class Service {
    getListProduct = async () => {
        let data = [];
        let list = await db.collection('products').get()
        list.docs.map((doc) => data.push({ ...doc.data(), doc_id: doc.id }))
        return data;
    }
}