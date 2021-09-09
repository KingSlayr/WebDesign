import React from 'react'
import "./Topbar.css";

function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbar_contact">
                <div>
                    <i class="fa fa-envelope"></i>
                    7xthemehelp@gmail.com
                </div>
                <div>
                    <i class="fa fa-phone"></i>
                    (075) 123-7654
                </div>
                <div>
                    <i class="fa fa-clock-o"></i>
                    Sun-Sat 9.45 am
                </div>
            </div>
            <div className="topbar_appointment">
                <div>Make an Appointment</div>
            </div>
        </div>
    )
}

export default Topbar
