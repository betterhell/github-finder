import React from 'react';
import {useContext} from "react";
import {FcCancel} from "react-icons/fc"
import AlertContext from "../../context/alert/AlertContext";

const Alert = () => {
    const {alert} = useContext(AlertContext)

    return alert !== null && (
        <p className="flex items-center mb-4 space-x-2">
            {alert.type === "error" && (
                <FcCancel size={20} />
            )}
            <strong>{alert.msg}</strong>
        </p>
    )
};

export default Alert;