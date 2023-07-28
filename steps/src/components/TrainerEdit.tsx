import React from 'react'
import {TrainerType} from './TrainerType'

type Props = TrainerType & {}

type State = {}

export default class TrainerEdit2 extends React.PureComponent<Props, State> {
  constructor () {
    super();
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleStretchChange =this.handleStretchChange.bind(this);
  }
//const TrainerEdit = (props: Props) => {
  handleDateChange = () => {

  }
  handleStretchChange = () => {

  }

  render() {
  return (
    <form onSubmit={event => event.preventDefault()}>
      <fieldset>
        <legend>Редактирование данных</legend>
        <label>Дата</label>
        <input type='date'
          id='date'
          name='date'
          onChange={handleDateChange}
        />
        <label>Длина пути</label>
        <input
          id='stretch'
          name='stretch'
          onChange={handleStretchChange}
        />
      </fieldset>
      <hr />
      <button>Сохранить</button>
      <button>Отменить</button>
    </form>
  )}
}

//export default TrainerEdit