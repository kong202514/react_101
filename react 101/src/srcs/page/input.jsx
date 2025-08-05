import { useState } from "react"

function Input() {
    let [new_data, set_new_data] = useState({
        name: " ",
        age: 0
    })
    let [data, set_data] = useState([])

    const from_on_Change = (e) => {
        let { name, value } = e.target
        set_new_data({ ...new_data, [name]: value })
    }

    function from_submit(e) {
        e.preventDefault();
        set_data([...data, new_data])
    }

    return (

        < >

            <form onSubmit={from_submit}>
                <input type="text"
                    name="name"
                    value={new_data.name}
                    onChange={from_on_Change} />
                <input type="number"
                    name="age"
                    value={new_data.age}
                    onChange={from_on_Change} />
                <button type="submit">Submit</button>
            </form>


            <ul>
                {data.map((item, index) => <li key={index}>{item.name} - {item.age}</li>)}
            </ul>
        </>
    )
}


export default Input