import React, { useContext } from 'react'
import alertContext from '../Context/alerts/alertContext'

const Alert = (props) => {

    const context = useContext(alertContext);
    const {alert} = context;

    return (
        <>
            <div>
                {
                    alert &&
                    <div className={`alert alert-${alert.type} alert-dismissble fade show`} role="alert">
                        <storng>{alert.msg}</storng>
                    </div>
                }
            </div>
        </>
    )
}

export default Alert