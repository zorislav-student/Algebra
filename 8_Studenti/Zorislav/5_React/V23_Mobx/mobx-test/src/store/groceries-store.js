import { makeObservable, observable, computed, action } from "mobx";

class GroceriesStore {
  groceries = [];

  constructor() {
    makeObservable(this, {
      groceries: observable,
      getGroceries: computed,
      addGrocery: action,
      deleteGrocery: action,
    });
  }

  addGrocery(grocery) {
    this.groceries.push(grocery);
  }

  deleteGrocery(grocery) {
    this.groceries.remove(grocery);
  }

  get getGroceries() {
    return this.groceries;
  }
}

export const groceriesStore = new GroceriesStore();
