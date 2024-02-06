1. createRoot method:
    Behind the scene it creates a DOM like structure. It compares main DOM and its
    own DOM then only updates those things which are updated in the UI. On the other
    hand, browser DOM repaints the entire DOM. Virtual DOM tracks values which are 
    changed in UI and changes them in the main DOM.

2. React Fiber Architecture:
    React uses algorithm to update UI, this algorithm is called Fiber.
    The goal of React Fiber is to increase its suitability for areas 
    like animation, layout, and gestures.
    Other key features include the ability to pause, abort, or reuse 
    work as new updates come in.
    Primary goal of Fiber: 
    - pause work and come back to it later.
    - assign priority to different types of work.
    - reuse previously completed work.
    - abort work if it's no longer needed.  


3. Reconciliation:
    The algorithm React uses to differentiate one tree with another to determine which 
    parts need to be changed. 
    Differentiate between 2 trees - Browser tree (DOM) and React tree (via createRoot).
    Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."


Fiber selectively updates in DOM. Not re-rendering the entire page when something needs to be updated.
Comparing some components makes no sense, hence re-render the entire page.

Key Points:
1. In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can 
   be wasteful, causing frames to drop and degrading the user experience.
2. Different types of updates have different priorities — an animation update needs to complete 
   more quickly than, say, an update from a data store.