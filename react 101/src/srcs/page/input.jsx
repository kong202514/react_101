import { useState } from "react"

function Input() {
    const [data, set_data] = useState({
        name: "",
        age:  "",

    });


    function onChange_data(event) {
      
        // console.log("key--->",event.target.name);
        const { name, value } = event.target;


    //    console.log("value--->", value);

        set_data(() => ({  ...data, [name]: value })); // ใช้ [name] เพื่อให้สามารถใช้ชื่อของ input ได้

    }

    return (

        < >
            is input <br />
            <input type="text"
                name="name"
                value={data.name}
                onChange={onChange_data}
            />


            <br /> <br />
            <input type="text"
                name="age"
                value={data.age}
                onChange={onChange_data}
            />



            <button type="button">btt</button>
            <br />

            name = {data.name} <br />
            age =  {data.age} <br />

        </>
    )

}

export default Input