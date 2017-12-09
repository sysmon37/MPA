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
  readonly SCENARIO : string = "scenario";
  readonly SEEN_MATERIALS : string = "seen_materials";
  readonly INVOKED_ACTIONS : string = "invoked_actions";

  protected scenario = null;
  protected seenMaterials = [];
  protected invokedActions = [];

  constructor(public storage: Storage) {
    console.log('DataProvider');
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

  getScenario() {
    return this.scenario;
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

  setScenario(data) {
    this.set(this.SCENARIO, data);
    this.scenario = data;
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

  addSeenMaterial(id) {
    if (this.seenMaterials.indexOf(id) == -1) {
      this.seenMaterials.push(id);
      this.set(this.SEEN_MATERIALS, this.seenMaterials);
    }
  }

  getSeenMaterials() {
    return this.seenMaterials;
  }

  getMaterialCount() {
    // Note this count is valid only for scenario 2
    // Interview + InterviewQA1 + ... InterviewQA7 + Barriers
    return 9;
  }

  addInvokedAction(id) {
    if (this.invokedActions.indexOf(id) == -1) {
      this.invokedActions.push(id);
      this.set(this.INVOKED_ACTIONS, this.invokedActions);
    }
  }

  getInvokedActions() {
    return this.invokedActions;
  }

  getActionCount() {
    // Note this count is valid only for scenario 2
    // Barriers + SelfReevaluation
    return 2;
  }
}

