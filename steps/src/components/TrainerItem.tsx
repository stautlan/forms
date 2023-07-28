import React from 'react'
import { TrainerType } from './TrainerType'

type Props = TrainerTypeProps & {}

const TrainerItem = (props: Props) => {
    const {date, stretch} = props.item;
    const onUpdate =() => {
        props.onUpdate(props.item.id);
    }
    const onRemove = () => {
        props.onRemove(props.item.id)
    }

  return (
    <div>
        <label htmlFor='stretch'>{stretch}</label>
        <label htmlFor='date'>{date.toLocaleDateString()}</label>
        <button onClick={onUpdate}>Изменить</button>
        <button onClick={onRemove}>Удалить</button>
    </div>
  )
}

type TrainerTypeProps = {
    item: TrainerType,
    onUpdate: (id: number) => void,
    onRemove: (id: number) => void,
}

export default TrainerItem