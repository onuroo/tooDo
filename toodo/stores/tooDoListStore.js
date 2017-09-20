import {observable,computed} from 'mobx';

class TooDoListStore {
  @observable message = "This is just a test message"
  
  

  
}
const tooDoListStore = new TooDoListStore()
export default tooDoListStore
