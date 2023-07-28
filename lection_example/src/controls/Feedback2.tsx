import React, { useState } from 'react'

export default function Feedback2() {
    const initFormState = {
        name: 'user',
        message: 'my problem',
        subscribe: false
    }
    const [form, setForm] = useState(initFormState);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { //({target}) => {
      //const {name, value} = event.target;
      //setForm(prevForm => ({...prevForm, [name]: value}));
      // для checkbox value не подойдёт, делаем type
      const { name, type } = event.target;
      // два варианта: либо приведение типа (так лучше не делать)
      if (type === "checkbox") {
        setForm({...form, [name]: (event.target as HTMLInputElement).checked})
      // либо так (так предпочтительней, но не работает):
      //if ("checked" in event.target) {
      //  setForm({...form, [name]: event.target.checked})
      } else if (type === "text") {
        setForm({...form, [name]: (event.target as HTMLInputElement).files})
      } else {
        setForm({...form, [name]: event.target.value})
      }
    }
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { //evt => {
      event.preventDefault();
      console.log(event.type);
      console.log(event.target);
      console.log(form);
      // очистим при отправке наши поля
      setForm( {
        name: '',
        message: "",
        subscribe: false
      })
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
            value={form.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor='message'>Сообщение</label>
          <br />
          <textarea 
            name='message' 
            placeholder='Введите свою проблему' 
            value={form.message}
            onChange={handleChange}
        />
        </fieldset>
        <fieldset>
          <legend>Хотите плучить ответ на почту?</legend>
          <input 
            type='checkbox'
            id='chbx'
            name='subscribe'
            checked={form.subscribe}
            onChange={handleChange}
          />
          <label htmlFor='chbx'>Да, хочу</label>
        </fieldset>
        <fieldset>
          <legend>Аватар</legend>
          <input 
            type='file' 
            name='avatar' 
            onChange={handleChange}
          />
        </fieldset>
        <button type='submit'>Отправить</button>
      </form>
    )
  }