import React, {Component} from 'react';
import LluIcon from "../LluIcon/LluIcon";

const label = {
    fontWeight: 900,
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 35,
    paddingRight: 35
};

const noPadding = {
    paddingRight: 0,
    paddingLeft: 0
};

const icon = {
    color: '#ffb400',
    fontSize: 24
};

const asterisco = {...icon, ...noPadding};

const inputStyle = {
    border: '1px solid #ffb400',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    width: '100%',
    height: 25
};

const LluFieldSelect = ({input, meta, fields, isPristine}) => <div className='container mt-3' style={label}>
    <div className='row'>
        <div className="col-1"/>
        <div className="col-10">{fields.title}</div>
    </div>
    <div className="row">
        <div className="col-1" style={noPadding}>
            <LluIcon className={fields.icon} style={icon}/>
        </div>
        <div className="col-10" style={noPadding}>
            <select {...input} style={inputStyle}>
                {fields.options && fields.options.map((value, key) => {
                    return <option key={key}>{value}</option>
                })}
            </select>
        </div>
        <div className="col-1 text-left" style={asterisco}>
            *
        </div>
    </div>
    <div style={{color: 'red', fontWeight: 400}}>
        {!isPristine && meta.error}
    </div>
    <span>{fields.subtitle}</span>
</div>;

export default LluFieldSelect;