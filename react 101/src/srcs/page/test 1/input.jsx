
import { React, useState } from "react"


export default function Input() {

    

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        age: 0
    });


    const from_on_Change = (e) => {
        let { name, value } = e.target
        setnew_data({
            ...new_data,
            [name]: value
        })


    }
    return (
        < >
            <div >
                <h1>Input Component</h1>
                <input type="text"
                    name="firstName"
                    value={data.firstName}
                    onChange={from_on_Change}
                />
                <input type="text"
                    name="lastName"
                    value={data.lastName}
                    onChange={from_on_Change}
                />
                <input type="number"
                    name="age"
                    value={data.age}
                    onChange={from_on_Change}
                />


            </div>
        </>
    )
}
