import React from 'react'
import "../css/main.css"

type Props = {}

const Test2 = (props: Props) => {
  return (
    <div>
        <div>
            <label>text1</label>
            <label>text2</label>
            <button>text3</button>
        </div>
        <div>
            <input className='inp-border-radius' value="label1" />
            <input className='inp-border-radius' value="label2" />
            <input className='inp-border-radius' value="label3" />
        </div>
        <div>
            <label>text4</label>
            <label>text5</label>
            <label>text6</label>
        </div>
        <fieldset>
            <div>
                <label>text1</label>
                <label>text2</label>
                <label>text3</label>
            </div>
            <div>
                <label>text4</label>
                <label>text5</label>
                <label>text6</label>
            </div>
        </fieldset>
    </div>
  )
}

export default Test2