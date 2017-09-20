'use strict';
import Realm from 'realm';



class TooDoSchema extends Realm.Object {}
TooDoSchema.schema = {
  name: 'TooDoSchema',
  properties: {
    id:'int',
    title: 'string',
    desciption: 'string',
    date: 'string',
    status: 'bool'
  }
};



export default new Realm({schema: [ TooDoSchema ],schemaVersion:1})
