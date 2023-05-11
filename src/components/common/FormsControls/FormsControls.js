import React from "react";
import './FormsControls.css'

export const Textarea = ({input, meta, ...props}) => {

    return (
        <div className={'form-control' + ( (meta.touched && meta.error) ? ' error' : '')}>
            <textarea {...input} placeholder={props.placeholder} cols={props.cols} rows={props.rows} />
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
}

// placeholder={props.placeholder} cols={props.cols} rows={props.rows}