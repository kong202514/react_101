import { useState } from "react"

function input() {
    const [text, set_text] = useState(" ");

    return (

        < >
            <input type="text"
                value={text}
                onChange={(text) => { set_text(text.target.value) } }
            /> <br /> <br />
            <button type="button">btt</button>
            test  {text}

        </>
    )
}



export default input