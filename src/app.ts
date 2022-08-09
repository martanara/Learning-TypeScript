// with generic classes we don't have to say what types of arguments we want

class DataStorage<T extends string | number | boolean > {
  // making sure that we work with primitive values (otherwise 'remove' won't work)
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Marta');
textStorage.addItem('Lana');
textStorage.addItem('Roberta');
textStorage.removeItem('Roberta');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.addItem(30);
numberStorage.removeItem(30);
console.log(numberStorage.getItems());

// textStorage.addItem(10); 
// this will throw an error because we're saying that the type in this case will be a string