import React from 'react';
import LluIcon from "../LluIcon/LluIcon";

//Flechas para slider Home
export {nextArrow, prevArrow}

function nextArrow() {
    return (
        <div>
            <LluIcon className="fa fa-chevron-right"
                     style={{color: "white", fontSize: "24px", marginTop: "12px", marginLeft: "3px"}}/>
        </div>
    );
}

function prevArrow() {
    return (
        <div>
            <LluIcon className="fa fa-chevron-left"
                     style={{color: "white", fontSize: "24px", marginTop: "12px", marginLeft: "-3px"}}/>
        </div>
    );
}