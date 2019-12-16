import React from 'react';
import { useSelector } from 'react-redux'
import MyForm from '../../components/form';

//проверка поля телефон на пустоту
const requiredInput = (input) => input ? undefined : `Требуется ввод`;

//проверка поля телефон на валидность формата
const checkPhone = (input) => {
    const re = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/;
    return (re.test(input)) ? undefined : 'Некоректно введен номер телефона!'
}

const dataPole = [
    { name: 'FirstName', type: 'text', valid: [requiredInput]},
    { name: 'SurName', type: 'text', valid: [requiredInput]},
    { name: 'Address', type: 'text', valid: [requiredInput]},
    { name: 'Phone', type: 'phone', valid: [requiredInput, checkPhone]},
    { name: 'ORDER', type: 'submit'}
]

const FormContact = () => {
    let cart = useSelector(state => state.cart);
    const getInitialValues = JSON.parse(localStorage.getItem('userInfo')) || {};

    const submit = values => {
        //записываем данные о пользыватели для использывания в дольнейшей работе
        localStorage.setItem('userInfo', JSON.stringify(values));
        console.log({ userInfo: values, product: cart });
    }
    
    return (
        <MyForm name="user_info" 
            onSubmit={submit} 
            //передаем данные которые пользыватель вводил ранне для инициальзации начального состояния формы 
            //что бы облегчения работы пользывателю
            initialValues={getInitialValues}
            dataPole={dataPole}
        />
    )
}

export default FormContact;