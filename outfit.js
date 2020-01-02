class Outfit {
  constructor (id, title, garments, background) {
    this.id = id;
    this.title = title;
    this.garments = garments;
    this.background = background;
  }

  addGarment(garment, type) {
    this.garments.push(garment);
  }
  removeGarment(type) {
    var removedItem = this.garments.find(item => item.type === type);
    if (removedItem != undefined) {
      this.garments = this.garments.filter(item => item.id != removedItem.id)
    }
  }
}
