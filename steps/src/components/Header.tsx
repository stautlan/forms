import React from 'react'

type Props = {
  id: number;
  date: Date;
  length: number;
}

type headerState = {
  propOne: number;
  propTwo: string;
}

//const Header = (props: Props) => {
  function Header: React.FC<Props>(props: Props) {
    function clickHandler(val: number) {

    }
  return (
    <form>
      <input 
        onChange={(arg) => clickHandler(arg)}
      />
    </form>
  )
}

export default Header