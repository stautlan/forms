import {useState} from 'react'
import {TrainerType} from './TrainerType'
import TrainerItem from './TrainerItem';
import '../css/main.css'
import {nanoid} from 'nanoid'


type Props = {}

const TrainerList = (props: Props) => {
    const [items, setItems] = useState<TrainerType[]> ([
        {id: nanoid(), date: '23.07.2023', stretch: 12.6},
        {id: nanoid(), date: '24.07.2023', stretch: 11.8},
    ]);
    const [newItem, setNewItem] = useState<Promise<TrainerType>>()

    const onItemUpdate = (id: string) => {
        setItems(prevItems => prevItems.map(item => {
            if (item.id === id) {
            // передать item в форму редактирования
                let result = item;
            // теперь все данные внести в коллекцию
                return {...item, result};
            }
            return item;
        }))
    }
    const onItemRemove = (id: string) => {
        setItems(prevItems => prevItems.filter(
            item => item.id !== id
        ));
    }

    const onItemAdd = () {
        //setItems([...items, newItem])
        // items.push(newItem)
        setItems(prevItem => {
            return [...prevItem, newItem]
        })
    }

  return (
    <form>
        <div>
            <label>Дата (ДД.ММ.ГГ)</label>
            <label>Пройдено</label>
        </div>
        <div>
            <input value={} />
            <input value={} />
            <button onClick={onItemAdd}>Добавить</button>
        </div>
        <form onSubmit={event => event.preventDefault()}>
        <fieldset>
            {items.map((item,index) => {
                return <TrainerItem
                    key={index}
                    item={item}
                    onUpdate={onItemUpdate}
                    onRemove={onItemRemove}
                />
        })}
        </fieldset>
        </form>
    </form>
  )
}

export default TrainerList