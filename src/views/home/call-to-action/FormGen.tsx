import React from 'react';
import '../../../App.css';
import styled from 'styled-components';

type Props = {
    placeholder: string,
    id: string,
    isLong?: boolean
}

const Input = styled.input`
    background: #fff;
    margin: 8px;
    padding: 15px;
    border-radius: 10px;
    border: none;
    font-size: calc(16px + 0.6vmin);
    width: calc(100% - 46px);
`;

const LongInput = styled.textarea`
    background: #fff;
    margin: 8px;
    padding: 15px;
    border-radius: 10px;
    border: none;
    font-size: calc(16px + 0.6vmin);
    width: calc(100% - 46px);
    resize: none;
    height: 180px;
`;

const BoxGen = (props: Props) => {
    if (props.isLong)
        return (
            <LongInput 
                id={props.id} 
                placeholder={props.placeholder} 
            />
        );
    else
        return (
            <Input 
                id={props.id} 
                placeholder={props.placeholder} 
            />
        );
}

export default BoxGen;