import { useState, useEffect } from 'react';

//мы получаем начальные данные значение что вводим и функцию для обнавления стора
//функция check что возвращаем ожидает потери фокуса на инпуте и делает проверку на валидность данных
//и возвращаем ошибку или обновлем данные

const useDataUpdateStore = (begin, val, fn) => {
    const [error, setError] = useState(null);

    useEffect(() => setError(null), [val])

    const checkNewCount = (e) => {
        e.preventDefault();
        if (isNaN(parseInt(val))) setError('Введите число');
        else {
            if (parseInt(val) <= 0) fn(-begin);
            else fn(parseInt(val) - begin);
            setError(null)
        }
    }
    return { error, check: (e) => checkNewCount(e)}
}

export default useDataUpdateStore;