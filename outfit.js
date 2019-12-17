class Outfit {
  constructor (id, title, garments, background) {
    this.id = id;
    this.title = title;
    this.garments = garments;
    this.background = background;

  }

  addGarment(garment) {
    this.garments.push(garment);
  }

  removeGarment(garment) {
    var removedItem = this.garments.indexOf(garment);
    this.garments.splice(removedItem, 1);
  }
}
