'use strict';
import Realm from 'realm';


class TestToDooSchema extends Realm.Object {}
  TestToDooSchema.schema = {
    name: 'TestToDooSchema',
    properties: {
      title: 'string',
      desciption: 'string',
      date: 'string',
      status: 'bool'
    }
  };



export default new Realm({schema: [ TestToDooSchema ],schemaVersion:1})
