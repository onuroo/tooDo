import {observable, computed, action} from 'mobx';
import tooDoStore from './tooDoStore'
import db from '../databases'
class TooDoCreateStore {
    @observable message = "This is just a test message"
    
    @action logger(){
        console.log(this.getLength)
        tooDoStore.message = this.getDbLength()
    }
    getDbLength(){
        const TooDoSchema = db.objects('TooDoSchema')
        return TooDoSchema.length
    }
    @action createTooDo(){
        const date = new Date();
        const TooDoSchema = db.objects('TooDoSchema')
        console.log(TooDoSchema.length)
        db.write(() => {
            const ref = db.create('TooDoSchema',
                {
                  id:date.getTime(),
                  title: 'second created from mobx title',
                  desciption: 'second created from mobx description',
                  status: true,
                  date: date.toString(),
                }
            )
        })

    }
  

  
}
const tooDoCreateStore = new TooDoCreateStore()
export default tooDoCreateStore
