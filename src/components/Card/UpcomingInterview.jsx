import React from 'react'

import Accordian from '../Custom/Accordian';
import Interview from './Interview';

export default function UpcomingInterview() {
    return (
        <Accordian
            title='My Calender'
            description='Upcoming Interviews'
        >
            <Interview classes='mt-3'/>
            <Interview classes='mt-3'/>
            <Interview classes='mt-3'/>
        </Accordian>
    )
}
