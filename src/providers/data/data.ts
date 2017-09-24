import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {
  readonly DRUGS : string = "drugs";
  readonly SYMPTOMS : string = "symptoms";
  readonly NUTRIENTS : string = "nutrients";

  constructor(public storage: Storage) {
    console.log('Hello DataProvider Provider');
  }
  
  get(key) {
    return this.storage.get(key);
  }

  getDrugs() {
    return this.get(this.DRUGS);
  }

  getSymptoms() {
    return this.get(this.SYMPTOMS);
  }

  getNutrients() {
    return this.get(this.NUTRIENTS);
  }

  set(key, data) {
    let json = JSON.stringify(data);
    this.storage.set(key, json);
  }

  setDrugs(data) {
    this.set(this.DRUGS, data);
  }

  setSymptoms(data) {
    this.set(this.SYMPTOMS, data);
  }

  setNutrients(data) {
    this.set(this.NUTRIENTS, data);
  }

  unpackValues(data, items) {
    if (data) {
      let values = JSON.parse(data);
      for (let item of items)
        item.value = values[item.id] != null ? values[item.id] : '?';    
    }
  }

  packValues(items) {
    let values = [];
    for (let item of items)
      values[item.id] = item.value;
    return values;
  }

  unpackMultiValues(data, items) {
    if (data) {
      let values = JSON.parse(data);
      for (let item of items)
        for (let d in item.doses)
          item.doses[d].value = values[item.id][d] != null ? values[item.id][d] : '?';    
    }
  }

  packMultiValues(items) {
    let values = [];
    for (let item of items) {
      values[item.id] = [];
      for (let d in item.doses)
        values[item.id][d] = item.doses[d].value;
    }
    return values;
  }
}

