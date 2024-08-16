import React, { Children } from "react"
import Nav from "./Nav"

function App({children}) {

  return(
    <div>
      <Nav/>
      <div>{children}</div>
    </div>
  )
}

export default App
