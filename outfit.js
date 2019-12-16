class Outfit {
  constructor (id, title, garments, background) {
    this.id = id;
    this.title = title;
    this.garments = garments;
    this.background = background;

  }

  addGarment(newGarment) {
    this.garments = this.garments.push(newGarment);
  }

  removeGarment(removeGarment) {
    this.garments = this.garments.splice(removeGarment);
  }
}
