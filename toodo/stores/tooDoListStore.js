import {observable,computed} from 'mobx';

class TooDoListStore {
  @observable message = "This is just a test message"
  @observable data = [
    {text:'This is a first todo', date: 'Mon Sep 11 2017 14:30:53 GMT+0300 (+03)'},
    {text:'This is a second todo', date: 'Mon Sep 11 2017 14:30:53 GMT+0300 (+03)'},
    {text:'This is a third todo', date: 'Mon Sep 11 2017 14:30:53 GMT+0300 (+03)'},
    {text:'This is a fourth todo', date: 'Mon Sep 11 2017 14:30:53 GMT+0300 (+03)'},
    {text:'This is a fifth todo', date: 'Mon Sep 11 2017 14:30:53 GMT+0300 (+03)'},
    {text:'This is a sixth todo', date: 'Mon Sep 11 2017 14:30:53 GMT+0300 (+03)'},
  ]
  

  
}
const tooDoListStore = new TooDoListStore()
export default tooDoListStore
