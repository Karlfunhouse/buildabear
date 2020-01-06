class Outfit {
 constructor (id, title, garments, background) {
  this.id = id;
  this.title = title;
  this.garments = garments;
  this.background = background;
 }
 addGarment(garment) {
  this.garments.push(garment);
  garment.imageId.classList.remove('hidden');
  garment.buttonId.classList.add('active-item');
  }
}
