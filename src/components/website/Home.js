import React, { useState } from "react";


function Home (props) {
    const [value, setValue]=useState({
        name: "hello",
        date: "today"
    })
    const clickRedirect=(e)=>{
        console.log("click redirect button")

                props.history.push({
                    pathname: "/app",
                    state: value
                })
            //     return  <Redirect
            //     to={{
            //       pathname: "/login",
            //       search: "?utm=your+face"
            //     }}
            //   />
    }

    return(
        <main>
            home
            <button onClick={clickRedirect}>redirect</button>
        </main>
    )
}

export default Home;