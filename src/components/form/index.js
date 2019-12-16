import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Button, ErrorEnter} from './style'

const renderField = ({ input, type, meta }) => {
    return (
        <>
            <Input {...input} type={type} placeholder={input.name.toUpperCase()} className="form-control" />
            {meta.error &&
                meta.touched &&
                <ErrorEnter>
                    {meta.error}
                </ErrorEnter>
            }
        </>
    )
};

let FormConstructor = ({ handleSubmit, dataPole }) => {
    return (
        <Form onSubmit={handleSubmit}>
            {
                dataPole.map(({ name, type, valid }, index) => (
                    (type === 'submit') ? <Button key={index} type="submit">{name}</Button>
                        : <Field key={index} name={name} component={renderField} type={type} validate={valid}/>
                ))
            }
           
        </Form>
    )
}

//компонент получает имя формы и инициализирует и возвращает форму
//позваляет переиспользывать форму передавая массив значений не углубляясь в само создание формы
const MyForm = (props) => {
    let MyForm = reduxForm({ form: props.name })(FormConstructor);
    return <MyForm {...props} />;
};

export default MyForm;