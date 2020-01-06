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
