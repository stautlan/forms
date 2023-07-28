import React, {useState} from 'react'
import '../css/main.css'
import State from './State.ts'

function FormHexToRgb() {
  const [state, setState] = useState<State>({
    hex: '',
    rgb: ''
  });

  const hexToRGB = (argHex: any) => {
    //var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(event.target.value);
    //var result = /^#([a-f0-9]{3}){1,2}$/i.exec(argHex);
    //if (result) {
    argHex = '0x' + argHex
    let r = argHex >> 16 & 0xFF
    let g = argHex >> 8 & 0xFF
    let b = argHex & 0xFF
    return `rgb(${r}, ${g}, ${b})`
    //} else return "rgb(255,64,1)" //#FF4001
  }

  const updateStateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      hex: event?.target.value.trim(),
      rgb: event?.target.value.length === 6
        ? hexToRGB(event?.target.value)
        : ""
    })
  }

  return (
    <div className='form' style={{background:state.rgb === "rgb(0, 0, 0)" ? "rgb(255,64,1)" : state.rgb}} >
      <form
        onSubmit={event => event.preventDefault()}>
        <input
          className='input is-large'
          type='text'
          id='hexInput'
          maxLength={6}
          value={state.hex}
          placeholder='hex -> rgb, пример: 00aaee'
          onChange={updateStateInput}
        />
        <p className='p-rgb'>{state.rgb  === "rgb(0, 0, 0)" ? "Ошибка!" : state.rgb}</p>
      </form>
    </div>
  )
}

export default FormHexToRgb