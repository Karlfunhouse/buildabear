class DisplayItem {
  constructor (item) {
   this.id = item.target.value;
   this.type = item.target.classList[0];
   this.imageId = document.getElementById(`${item.target.value}`);
   this.buttonId = item.target;
  }

  // Sort backgrounds from garments, initiating the control flow for
  // whether the item passed in gets selected or deselected.
  update() {
    if (this.type === 'background') {
      this.checkActiveBackground();
    } else {
      this.checkActiveGarment();
    }
  }
  // Check if the background passed in is currently active.
  // If it is, disable it. If it isn't, check the background category.
  checkActiveBackground() {
    if (newOutfit.background !== null) {
      this.checkBackgroundCategory();
    } else {
      newOutfit.addBackground(this);
    }
  }
  // Check if the garment passed in is currently active.
 // If it is, disable it. If not, check the garment category.
 checkActiveGarment() {
   if (newOutfit.garments.find
     (garment => garment.id === this.id) !== undefined) {
       newOutfit.removeGarment(this);
   } else {
     this.checkActiveGarmentCategory();
   }
 }
 // Check if the background category already has an active item.
 // If it does, disable it. Either way, add the new background.
 checkBackgroundCategory() {
   if (newOutfit.background.id === this.id) {
     newOutfit.removeBackground();
   } else {
     newOutfit.removeBackground();
     newOutfit.addBackground(this);
   }
 }
 // Check if the garment passed in has an active item in its respective category.
 // If it does, disable that item. Either way, enable the new item.
 checkActiveGarmentCategory() {
   if (newOutfit.garments.find(
     garment => garment.type === this.type) !== undefined) {
     var lastActive = newOutfit.garments.find(
       garment => garment.id !== this.id && garment.type === this.type);
     newOutfit.removeGarment(lastActive);
   }
   newOutfit.addGarment(this);
 }
}
