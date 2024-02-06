import Test from "./test.jsx"

function App() {
  const username = 'tabin tariq'
  return (
    <>
      <Test/>
      <h2>username: {username}</h2>
    </>
    // {username} is an evaluated expression - meaning here we write the
    // final outcome. CanNOT write => {if (true) username}

    // <h1> Can't add HTML element here ERROR! <h1>
  )
}
// can export only one element - to solve the issue of returning many elements,
// put them inside a div or we can just return using empty tags (called fragment) "<> 'content' </>"

export default App