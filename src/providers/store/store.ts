import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as PouchDB from 'pouchdb';  
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';

@Injectable()
export class StoreProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StoreProvider Provider');
  }

  public pdb; 
  public employees;

  createPouchDB() {
        PouchDB.plugin(cordovaSqlitePlugin);
        this.pdb = new PouchDB('store.db', 
        { adapter: 'cordova-sqlite' });
  }
    create(employee) {  
      return this.pdb.post(employee);
      }
    update(employee) {  
      return this.pdb.put(employee);
        }
    delete(employee) {  
      return this.pdb.delete(employee);
    }
    read() {  
      function allDocs(){
                this.pdb.allDocs({ include_docs: true})
          .then(docs => {
              this.employees = docs.rows.map(row => {
                  row.doc.Date = new Date(row.doc.Date);
                  return row.doc;
          });
          return this.employees;
      });
    }
}

}
