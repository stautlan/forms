import React from 'react'

interface CourceT<T = string> {
    message: string;
    skills: T[]
}

type CourceFrontend = CourceT<'React' | 'JS' | 'TS'>;
type CourceBackend = CourceT<string>;

type Props = {
    message: string;
    age: number;
} //& typeof defaultProps;

function Cource({message, age}: Props) {
    const initFormState = {
        age: '0',
        message: 'my problem',
        subscribe: false
    }
    const [form, setForm] = React.useState(initFormState);
    const [cources, setCources] = React.useState<CourceT>()
    function changeMessageHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, type } = event.target;
        //if (type === 'text') {
            setForm({...form, [name]: event.target.value});
        //}
    }
    function changeAgeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, type } = event.target;
        setForm({...form, [name]: event.target.value});
    }
    function changeMouseHandler(event: React.MouseEvent<HTMLHeadingElement>) {
        
        //let elem = document.getElementById('age');
        //elem.value = '11';
        setForm({...form, [age]: 0});
        console.log(age);
        //elem = document.getElementById('message');
        //elem.value = '';
        setForm({...form, [message]: ''});
        console.log(message);
    }
    function handlerAddCource(cource: CourceT) { //event: React.FormEvent) => {
        event?.preventDefault();
        setCources(prevCources => {
            return [...prevCources, cource]
        })
    }
  return (
    <form onSubmit={(event) => event.preventDefault()}>
        <fieldset>
            <label htmlFor='message'>Сообщение</label>
            <input
                //type='text'
                id='message'
                name='message'
                value={form.message}
                onChange={changeMessageHandler}
            />
            <br />
            <label htmlFor='age'>Возраст</label>
            <input
                //type='text'
                id='age'
                name='age'
                value={form.age}
                onChange={changeAgeHandler}
            />
            <br />
            <h3 onClick={changeMouseHandler}>Кликни</h3>
        </fieldset>
    </form>
  )
}

const defaultProps = {message: '', age: 0};

Cource.defaultProps = defaultProps;

export default Cource;