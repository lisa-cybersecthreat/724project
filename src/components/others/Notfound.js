import React from "react";

function Notfound (routeProps) {

    // const clickGoBackBtn = (e) => {
    //     routeProps.history.GoBack()
    // }

    const clickHomeBtn = (e) => {
        routeProps.history.push("/")
    }

    return(
        <div>
            <h1>404 page not found</h1>
            {/* <button onClick={clickGoBackBtn}>go back</button> */}
            <button onClick={clickHomeBtn}>go to home page</button>
        </div>
    )
}

export default Notfound;