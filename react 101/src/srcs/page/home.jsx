
import React, { useState } from 'react'
 
 

 function home() {
    const [text, set_text] = useState("000");
    
   function s() {
       set_text("555")
   }
    return (
        < >

            <button onClick={s}>vvvv</button>
             aaa <br />
            {text}
        </>
    )
}



export default home