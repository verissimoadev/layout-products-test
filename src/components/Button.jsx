import { useState } from "react"
import check from "../../src/check.png"


export default function Button(params) {

    const [stateButton, setStateButton] = useState(" ")
    const [isAdd, setIsAdd] = useState(false)

    return (
        <button 
            className={"ButtonAddi " + stateButton + (isAdd ? "ButtonAdd" : "")}
            onClick={() => {
                setIsAdd(true)
            }}
            onMouseOver={()=>{
                if (!isAdd) {
                  setStateButton(" ButtonHover ")
                }
              }}
              onMouseOut={()=>{
                if (!isAdd) {
                    setStateButton(" ")
                }
              }}
            >
            <img className={!isAdd ? "inviseble" : ""} src={check} alt="" />
            ADICIONAR
        </button>
    )
}