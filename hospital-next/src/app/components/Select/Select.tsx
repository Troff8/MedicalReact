'use client';
import React from 'react';
import Select from 'react-select';

interface SelectCustomProps {
    isMulti?: boolean;
    options: any;
}

const SelectCustom: React.FC<SelectCustomProps> = ({ isMulti, options }) => {
    return <Select options={options} isMulti={isMulti} />;
};

export default SelectCustom;
