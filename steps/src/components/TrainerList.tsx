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
    const [date, setDate] = useState('')
    const [stretch, setStretch] = useState('')

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

    const onItemAdd = () => {
        if (date.trim() === '' || stretch.trim() === '')
            return;
        debugger
        const curr = items.filter(
            item => item.stretch === Number(stretch));
        if (curr.length !== 0)
            return;
        setItems(prevItems => {
            const newItem = {
                id: nanoid(),
                date: new Date(date.split("-")).toLocaleDateString(),
                stretch: stretch
            };
            return [...prevItems, newItem]
        });
        setDate('')
        setStretch('')
    }

  return (
    <form onSubmit={event => event.preventDefault()}>
        <div className='header'>
            <label>Дата (ДД.ММ.ГГ)</label>
            <label>Пройдено</label>
        </div>
        <div>
            <input type='date' placeholder='Ведите дату' value={date}
                onChange={(event) => setDate(event.target.value)} 
            />
            <input type='number' placeholder='Введите расстояние' value={stretch}
                onChange={(event) => setStretch(event.target.value)} 
            />
            <button onClick={onItemAdd}>Добавить</button>
        </div>
        <div>
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
        </div>
    </form>
  )
}

export default TrainerList