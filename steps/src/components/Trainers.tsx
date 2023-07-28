import React, { useState } from 'react'
import {nanoid} from 'nanoid'

type TrainerItem = {
    id: number;
    date: string;
    passed: string;
}

type Props = {}

function Trainers({}: Props) {
    const dateLocal = new Date().toLocaleString().slice(0,10); //Date.now();
    const [state, setState] = useState({
        date: dateLocal,
        passed: '23.02'
    });
    const [trainerList, setTrainerList] = useState<Partial<TrainerItem[]>>()

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    const handlerSave = () => {
        // const newRecord = TrainerItem(id: nanoid(), date: state.date, passed: state.passed};
        // setTrainerList(previous => [...previous, newRecord]);
    }

    const handlerEdit = (event: React.MouseEvent<HTMLButtonElement>) => {

    }

    const handlerDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        trainerList.filter(item => item.id === event.target)
    }

  return (
    <>
        <form onSubmit={handlerSubmit} className='trainer'>
            <table>
                <thead>
                    <tr>
                        <th>Дата (ДД.ММ.ГГГГ)</th>
                        <th>Пройдено, км.</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                id='date'
                                name='date'
                                value={state.date}
                            />
                        </td>
                        <td>
                            <input
                                id='passed'
                                name='passed'
                                value={state.passed}
                            />
                        </td>
                        <td>
                            <button name='btnSave'
                                onClick={handlerSave}
                            >OK</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <table>
                <thead>
                    <tr>
                        <th>Дата (ДД.ММ.ГГГГ)</th>
                        <th>Пройдено, км.</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>                        
                    {trainerList.map((train) => (
                    <tr>

                        <td>
                            <input
                                readOnly={true}
                                id='date'
                                name='date'
                                value={train.date}
                            />
                        </td>
                        <td>
                            <input
                                readOnly={true}
                                id='passed'
                                name='passed'
                                value={train.passed}
                            />
                        </td>
                        <td>
                            <button className='btEdit'
                                onClick={() => handlerEdit(train)}
                            >/</button>
                            <button className='btnDelete'
                                onClick={() => handlerDelete(train)}
                            >X</button>
                        </td>
                    </tr>
                        ))}
                </tbody>
            </table>
        </form>
    </>
  )
}

export default Trainers