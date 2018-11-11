import React from 'react';
import LluIcon from "../LluIcon/LluIcon";

export const NextArrow = props => {
    const {className, style, onClick} = props;
    return <div className={className} style={{...style}} onClick={onClick}>
        <LluIcon className="fa fa-chevron-right"
                 style={{color: "white", fontSize: "24px", marginTop: "12px", marginLeft: "3px"}}/>
    </div>;
};


export const PrevArrow = props => {
    const {className, style, onClick} = props;
    return <div className={className} style={{...style}} onClick={onClick}>
        <LluIcon className="fa fa-chevron-left"
                 style={{color: "white", fontSize: "24px", marginTop: "12px", marginLeft: "-3px"}}/>
    </div>;
};
