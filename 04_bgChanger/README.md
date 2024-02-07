# Background changer:

In this basic project in React, we add buttons to the bottom of the screen which when
pressed change the background color of the page. Using TailwindCSS to style.
Using useState hook to make changes in the UI.

Default color set to 'olive'.

### Why use style when we can use className in TailwindCSS

In Tailwind CSS, className is indeed a primary way to apply styles to elements, but there are situations
where using the style attribute might be preferable. 
If you need to apply styles dynamically based on JavaScript variables or state, using the style attribute
allows you to directly manipulate CSS properties in response to changes in your application logic.

```jsx
<div
  className="w-full h-screen duration-200"
  style={{ backgroundColor: color }}
>
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
      <button
        onClick={() => setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
        style={{ backgroundColor: "red" }}
      >
        Red
      </button>
    </div>
  </div>
</div>
```