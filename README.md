# BUILD A BEAR!

Build a Bear might just be the web app you didn't know you needed. Offering nearly limitless room for creativity, users can create custom outfits for their personalized teddy bear, save them for viewing/editing, and enjoy a heartfelt experience like no other.

<img width="1397" alt="Screen Shot 2020-01-08 at 8 03 08 PM" src="https://user-images.githubusercontent.com/54119863/72034600-ba264a00-3252-11ea-9224-2220b2b25388.png">

## Getting Started

This is a single-page application that runs directly from the index.html file. Either clone down the repo and run the index file, or simply use the application via [GitHub Pages here](https://karlfunhouse.github.io/buildabear/).

## Project Goals

* Write clean, DRY, and performant code that utilizes SOLID and object-oriented principles
* Create a clear, aesthetically pleasing, and accessible UI that encourages user interactivity 
* Write code that can be easily read and understood by other developers

## Challenges

* Connecting the data model directly to the DOM, instead of treating the two models as separate entities
* Encapsulating and abstracting processes into methods and interface/helper functions 
* Creating application stability/flexibility to scale and expand growing needs

## Wins

* Using classes and creating objects in a systematic approach, which ultimately supports code readability and application scalability
* Creating a simple-yet-pleasing UI that utilizes subtle animations, usability optimizations, and considerate design decisions to reinforce user behavior

## Future Considerations

* Saving an array to local storage forces the choice of updating the entire aray when a change is necessary. That's probably not the best performance choice
* Learning how to use regular expressions will greatly improve our ability to implement accurate search functionality
* Spending more time pseudo-coding in the beginning will help revent long and complex refactors later down the process

## Built With

* Vanilla HTML/CSS
* Vanilla JS

## Authors

* **[Lane Hunter](https://github.com/jonthanny)** 
* **[Karl Nielsen](https://github.com/karlfunhouse)** 
* **[Ryan Bahan](https://github.com/ryanbahan)**


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Instructor Notes

There is one single addition of a global variable that is not a query selector or saved outfits array - it is the instantiation of our newOutfit variable from the Outfit class. This was a purposeful design choice made because of the following considerations:

* Being able to scale functionality to save a "draft" of the currently selected outfit - i.e. when the user selects some outfit items, if the browser had to refresh our unexpectedly quit, we could preserve the state of the bear/outfits loaded. This functionality did not ultimately get implemented, but was understood as a viable goal.
* Keeping our program aware of DOM changes could allow for greater application scalability if that DOM information became needed before the outfit was manually saved by the user.

## Developer notes

* The main.js file represents the primary connection between the DOM and JS program interface. It contains all global variables, event listeners, and functions called by event listeners.
* The functions.js file contains all functions not encapsulated within a class, or declared within main.js to be binded to an event listener. The file is ordered alphabetically. 
* The visual updating of outfit selection is first handled through the displayItem class. When a valid DOM event is triggered,  a displayItem object is instantiated and then routed appropriately via displayItem's methods.
* The Outfit class ultimately handles all data updating and DOM display. Valid displayItems are passed to their respective Outfit method, which updates the instantiated Outfit's properties and then the respective DOM elements. 
* The Outfit class also handles storage of saved outfits.

## Code Review Accountability

We got our code review from Ryan's mod2 mentor, Joel:

<img width="895" alt="Screen Shot 2020-01-08 at 6 05 21 PM" src="https://user-images.githubusercontent.com/54119863/72036762-18562b80-3259-11ea-8164-5032def1bc35.png">

