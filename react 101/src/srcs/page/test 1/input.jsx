import { useState } from "react"

function Input() {
    const [data, set_data] = useState({
        firstName: "",
        lastName: "",
        age: ""

    });


    function onChange_data(event) {

        const { name, value } = event.target;
        set_data(() => ({ ...data, [name]: value })); // ใช้ [name] เพื่อให้สามารถใช้ชื่อของ input ได้

    }

    return (

        < >

            <p  >
                firstName:<input type="text"
                    name="firstName "
                    value={data.firstName}
                    onChange={onChange_data}
                /> <br />


                lastName:<input type="text"
                    name="lastName "
                    value={data.lastName}
                    onChange={onChange_data}
                /><br />

                text:<input type="text"
                    name="age "
                    value={data.age}
                    onChange={onChange_data}
                /><br />

            </p>

        </>
    )

}

export default Input