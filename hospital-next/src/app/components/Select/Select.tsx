import React from 'react';


const Select: React.FC = () => {
    return (
        <select name="direction">
            <option value="">Выбор направления</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
        </select>
    );
};

export default Select;