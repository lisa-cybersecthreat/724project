function PersaonalInfoInputs(props) {
    return(
            <section className="personal-info-inputs">
                <div className="input-div">
                    <label>
                        <p>{props.t("userid")}<span>*</span></p>
                        {/* <input name="userid" type="text" placeholder="" value={props.inputValue.userid} onChange={props.changeInput} required /> */}
                        <input name="userid" type="text" placeholder="" onChange={props.changeInput} required />
                    </label>
                    <label>
                        <p>{props.t("password")}<span>*</span></p>
                        {/* <input name="password" type="password" placeholder="" value={props.inputValue.password} onChange={props.changeInput} required /> */}
                        <input name="password" type="password" placeholder="" onChange={props.changeInput} required />
                    </label>
                    <label>
                        <p>{props.t("company")}</p>
                        <input name="company" type="text" placeholder="" onChange={props.changeInput} />
                        {/* <input name="company" type="text" placeholder="" value={props.inputValue.company} onChange={props.changeInput} /> */}
                    </label>
                    <label>
                        <p>{props.t("user_name")}</p>
                        <input name="username" type="text" placeholder="" onChange={props.changeInput} />
                        {/* <input name="username" type="text" placeholder="" value={props.inputValue.username} onChange={props.changeInput} /> */}
                    </label>
                    <label>
                        <p>{props.t("title")}</p>
                        <input name="title" type="text" placeholder="" onChange={props.changeInput} />
                        {/* <input name="title" type="text" placeholder="" value={props.inputValue.title} onChange={props.changeInput} /> */}
                    </label>
                    <label>
                        <p>email<span>*</span></p>
                        <input name="email" type="email" placeholder="" onChange={props.changeInput} required />
                        {/* <input name="email" type="email" placeholder="" value={props.inputValue.email} onChange={props.changeInput} required /> */}
                    </label>
                    <label>
                        <p>{props.t("birthday")}</p>
                        <input name="birthday" type="date" placeholder="" onChange={props.changeInput} />
                        {/* <input name="birthday" type="date" placeholder="" value={props.inputValue.birthday} onChange={props.changeInput} /> */}
                    </label>
                    <label>
                        <p>{props.t("gender")}</p>
                        <select name="gender" onChange={props.changeInput} defaultValue="">
                            <option value=""></option>
                            <option value="m">male</option>
                            <option value="f">female</option>
                        </select>                        
                    </label>
                    <label>
                        <p>{props.t("tel")}</p>
                        {/* <input name="telephone" type="tel" placeholder="" value={props.inputValue.telephone} onChange={props.changeInput} /> */}
                        <input name="telephone" type="tel" placeholder="" onChange={props.changeInput}  pattern="^[0-9-+\s()]*$"/>
                    </label>
                    <label>
                        <p>{props.t("mobile")}</p>
                        {/* <input name="mobile" type="tel" placeholder="" value={props.inputValue.mobile} onChange={props.changeInput} />  */}
                        <input name="mobile" type="tel" placeholder="" onChange={props.changeInput} pattern="^[0-9-+\s()]*$" /> 
                    </label>
                    {/* <label>address
                        <select name="city" onChange={changeCity}>
                            {
                                cities.map((city, i)=><option value={city.CityName} key={i} >{city.CityName}</option>)
                            }
                        </select>
                        <select>
                            {
                                cities[cityNo].AreaList.map(area=><option>{`${area.ZipCode} ${area.AreaName}`}</option>)
                            }
                        </select>
                    </label> */}
                </div>
                    <div className="address-div">
                        <label><p>{props.t("zipcode")}</p>
                            {/* <input name="zipcode" type="text" placeholder="" value={props.inputValue.zipcode} onChange={props.changeInput} /> */}
                            <input name="zipcode" type="text" placeholder=""  onChange={props.changeInput} />
                        </label>
                        <label><p>{props.t("address")}</p>
                            {/* <input name="address" type="text" placeholder="" value={props.inputValue.address} onChange={props.changeInput} />  */}
                            <input name="address" type="text" placeholder="" onChange={props.changeInput} /> 
                        </label>              
                    </div>    
                </section>
    )
}

export default PersaonalInfoInputs;


// <section className="personal-info-inputs">
// <div className="input-div">
//     <label>
//         <p>user id<span>*</span></p>
//         {/* <input name="userid" type="text" placeholder="" value={props.inputValue.userid} onChange={props.changeInput} required /> */}
//         <input name="userid" type="text" placeholder="" onChange={props.changeInput} required />
//     </label>
//     <label>
//         <p>password<span>*</span></p>
//         {/* <input name="password" type="password" placeholder="" value={props.inputValue.password} onChange={props.changeInput} required /> */}
//         <input name="password" type="password" placeholder="" onChange={props.changeInput} required />
//     </label>
//     <label>
//         <p>company</p>
//         <input name="company" type="text" placeholder="" onChange={props.changeInput} />
//         {/* <input name="company" type="text" placeholder="" value={props.inputValue.company} onChange={props.changeInput} /> */}
//     </label>
//     <label>
//         <p>user name</p>
//         <input name="username" type="text" placeholder="" onChange={props.changeInput} />
//         {/* <input name="username" type="text" placeholder="" value={props.inputValue.username} onChange={props.changeInput} /> */}
//     </label>
//     <label>
//         <p>title</p>
//         <input name="title" type="text" placeholder="" onChange={props.changeInput} />
//         {/* <input name="title" type="text" placeholder="" value={props.inputValue.title} onChange={props.changeInput} /> */}
//     </label>
//     <label>
//         <p>email<span>*</span></p>
//         <input name="email" type="email" placeholder="" onChange={props.changeInput} required />
//         {/* <input name="email" type="email" placeholder="" value={props.inputValue.email} onChange={props.changeInput} required /> */}
//     </label>
//     <label>
//         <p>birthday</p>
//         <input name="birthday" type="date" placeholder="" onChange={props.changeInput} />
//         {/* <input name="birthday" type="date" placeholder="" value={props.inputValue.birthday} onChange={props.changeInput} /> */}
//     </label>
//     <label>
//         <p>gender</p>
//         <select name="gender" onChange={props.changeInput} defaultValue="">
//             <option value=""></option>
//             <option value="m">male</option>
//             <option value="f">female</option>
//         </select>                        
//     </label>
//     <label>
//         <p>telephone</p>
//         {/* <input name="telephone" type="tel" placeholder="" value={props.inputValue.telephone} onChange={props.changeInput} /> */}
//         <input name="telephone" type="tel" placeholder="" onChange={props.changeInput} />
//     </label>
//     <label>
//         <p>mobile</p>
//         {/* <input name="mobile" type="tel" placeholder="" value={props.inputValue.mobile} onChange={props.changeInput} />  */}
//         <input name="mobile" type="tel" placeholder="" onChange={props.changeInput} /> 
//     </label>
//     {/* <label>address
//         <select name="city" onChange={changeCity}>
//             {
//                 cities.map((city, i)=><option value={city.CityName} key={i} >{city.CityName}</option>)
//             }
//         </select>
//         <select>
//             {
//                 cities[cityNo].AreaList.map(area=><option>{`${area.ZipCode} ${area.AreaName}`}</option>)
//             }
//         </select>
//     </label> */}
// </div>
//     <div className="address-div">
//         <label><p>zipcode</p>
//             {/* <input name="zipcode" type="text" placeholder="" value={props.inputValue.zipcode} onChange={props.changeInput} /> */}
//             <input name="zipcode" type="text" placeholder="" value={props.inputValue.zipcode} onChange={props.changeInput} />
//         </label>
//         <label><p>address</p>
//             {/* <input name="address" type="text" placeholder="" value={props.inputValue.address} onChange={props.changeInput} />  */}
//             <input name="address" type="text" placeholder="" value={props.inputValue.address} onChange={props.changeInput} /> 
//         </label>              
//     </div>    
// </section>