import React from 'react';
import {DType} from "../data";
import s from './TechnologiesItem.module.scss'
import {Roll} from "react-awesome-reveal";


export type TechnologiesItemType = {
    tech: DType
}

export const TechnologiesItem: React.FC<TechnologiesItemType> = ({tech}) => {
    const {title, img} = tech

    return (

        <Roll>
            <div className={s.container}>
                <div className={s.img} style={img}></div>
                <div>{title}</div>
            </div>
        </Roll>
    );
};

