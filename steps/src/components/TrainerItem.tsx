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
        <label htmlFor='date'>{date}</label>
        <button onClick={onUpdate}>Изменить</button>
        <button onClick={onRemove}>Удалить</button>
    </div>
  )
}

type TrainerTypeProps = {
    item: TrainerType,
    onUpdate: (value: string) => void,
    onRemove: (value: string) => void,
}

export default TrainerItem