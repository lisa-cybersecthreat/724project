import React, { useState } from "react";

import "../../styles/MyAccount.scss"

function MyAccount (props) {
    const [thisUser, setThisUser] = useState(props.location.state[0])

    return(
        <>
            <main id="MyAccount">
                <h1>my account</h1>
                <section>
                    <h2>personal infomation</h2>
                    <ul>
                        <li>user id: <span>{thisUser.userid}</span></li>
                        <li>user name: <span>{thisUser.username}</span></li>
                        <li>email: <span>{thisUser.email}</span></li>
                        <li>company: <span>{thisUser.company}</span></li>
                        <li>title: <span>{thisUser.title}</span></li>
                        <li>telephone: <span>{thisUser.telephone}</span></li>
                        <li>zipcode: <span>{thisUser.zipcode}</span></li>
                        <li>address: <span>{thisUser.address}</span></li>

                    </ul>
                </section>
                <section>
                    <h2>account details</h2>
                        <ul>
                            <li>membership: <span>{thisUser.usertype}</span></li>
                            <li>membership account status: <span>{thisUser.enabled}</span></li>
                            <li>uname: <span>{thisUser.name}</span></li>                          
                        </ul>
              
                </section>
            </main>            
        </>

    )
}

export default MyAccount;