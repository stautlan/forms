import React, { useState} from 'react'

// Исходный вариант

export default function Feedback() {
    const initFormState = {
        name: 'user',
        message: 'my problem',
        subscribe: false
    }
    const [form, setForm] = useState(initFormState);
    
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => { //({target}) => {
      const {name, value} = event.target;
      setForm(prevForm => ({...prevForm, [name]: value}));
    }
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { //evt => {
      event.preventDefault();
      console.log("log:");
      // console.log(event.type);
      // console.log(event.target);
      // console.log(form);
    }
  
    return (
      <form onSubmit={handleSubmit} className='feedback'>
          <fieldset>
            <legend>Заявка</legend>
            <label htmlFor='name'>Ваше имя: {form.name}</label>
            <br />
            <input 
              id='name' 
              name='name' 
              placeholder='Введите своё имя' 
              onChange={handleNameChange}
            />
            <br />
            <br />
            <label htmlFor='message'>Сообщение</label>
            <br />
            <textarea 
              name='message' 
              placeholder='Введите свою проблему' />
          </fieldset>
          <fieldset>
            <legend>Хотите плучить ответ на почту?</legend>
            <input 
              type='checkbox'
              id='chbx'
              name='subscribe'
            />
            <label htmlFor='chbx'>Да, хочу</label>
          </fieldset>
          <fieldset>
            <legend>Аватар</legend>
            <input type='file' name='avatar' />
          </fieldset>
          <button type='submit'>Отправить</button>
      </form>
    )
  }