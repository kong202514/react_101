import { useState } from "react"

function input() {
    const [text, set_text] = useState(" ");
    let [texts, set_texts] = useState(" ");
  

    if (text == 1 ) {
        set_texts("qqqq")
        
    } else {
        
    }
    return (

        < >
            <input type="text"
                value={text}
                onChange={(text) => { set_text(text.target.value) } }
            /> <br /> <br />
            <button type="button">btt</button>
            
            text =  {texts}

        </>
    )
}



export default input