import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { CSSTransition } from "react-transition-group";

export const Alert = () => {
    const { alert, hide } = useContext(AlertContext);

    return(
        <CSSTransition
            in={alert.visible}
            timeout={250}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                <strong>Warning!</strong> {alert.text}
                <button type="button" className="close btn-close" onClick={hide}>&times;</button>
            </div>
        </CSSTransition>
    );
};