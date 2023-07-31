import React, {useState} from 'react'
import {TrainerType} from './TrainerType'
import TrainerItem from './TrainerItem';
import TrainerEdit from './TrainerEdit'
import '../css/main.css'
import {nanoid} from 'nanoid'
import {createPortal} from 'react-dom'

const h1Styles = {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    position: 'absolute',
    right: 0,
    bottom: '2rem',
    padding: '0.5rem',
    fontFamily: 'sans-serif',
    fontSize: '1.5rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
  };

type Props = {}

const TrainerList = (props: Props) => {
    const [items, setItems] = useState<TrainerType[]> ([
        {id: nanoid(), date: '23.07.2023', stretch: 12.6},
        {id: nanoid(), date: '24.07.2023', stretch: 11.8},
    ]);
    const [selectItem, setSelectItem] = useState<TrainerType>()
    const [date, setDate] = useState('')
    const [stretch, setStretch] = useState('0.0')

    function handlerEdit(destination: TrainerType) {
        setItems(prevItems => prevItems.map(item => {
            if (item.id === destination.id) {
                item.date = destination.date;
                item.stretch = destination.stretch;
            }
            return item;
        }))
    }

    const onItemUpdate = (id: string) => {
        let select = items.filter(item => item.id === id);
        if (select !== null) {
                return ( <TrainerEdit item={select[0]} 
                    onUpdate={(it: TrainerType) => {handlerEdit(it)}} />);
        }
    }

    function createWrapperDialog({children, wrapperId, isOpen, handleClose}: any) {
        let element = document.getElementById(wrapperId);
        if (element) {
        return (
            <>
                <TrainerEdit item={children} 
                    onUpdate={(item: TrainerType) => {handlerEdit(item)}} />
            </>
        )}
    }

    const onItemRemove = (id: string) => {
        setItems(prevItems => prevItems.filter(
            item => item.id !== id
        ));
    }

    const onItemAdd = () => {
        if (date.trim() === '' || stretch === '')
            return;
        const localCopy = [...items];
        const currItem = localCopy.find((item) => 
            item.date === new Date(date).toLocaleDateString());
        if (currItem !== undefined) {
            currItem.stretch =  Number(currItem.stretch) + Number(stretch);
            setItems(localCopy)
            return;
        }
        setItems(() => {
            const newItem = {
                id: nanoid(),
                date: new Date(date.split('-')).toLocaleDateString(),
                stretch: stretch
            };
            return [...items, newItem]
        });
        setDate('')
        setStretch('0.0')
    }

    //// <input {...{stretch, onChange}}
    // const onChange = (value: string) => {
    //     setStretch(prev => (Number(value)) ? 
    //     value : prev);
    // }
    const updateStretch = (event: React.ChangeEvent<HTMLInputElement>) => {
        //var val = event.target.value.replace(/(\..*)\./g, '$1') //Replace Multiple Dot(.)
        if (Number(event.target.value)) {
            setStretch(event.target.value)
        } else {
            event.target.value = stretch;
        }
    }

  return (
    <form onSubmit={event => event.preventDefault()}>
        {/* <h1 style={h1Styles}>Заголовок</h1> */}
        <div className='header'>
            <label>Дата (ДД.ММ.ГГ)</label>
            <label>Пройдено</label>
        </div>
        <div id='react-portal-model-container'></div>
        <div>
            <input type='date' placeholder='Ведите дату' value={date}
                onChange={(event) => setDate(event.target.value)} 
            />
            <input placeholder='Введите расстояние' value={stretch}
                onChange={(event) => updateStretch(event)} 
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