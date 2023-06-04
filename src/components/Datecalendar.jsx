// import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const Datecalendar = () => {
    return (
        <div className="hidden border-b-[1.5px] border-zinc-100 lg:block">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateCalendar className='h-[18rem]' />
            </LocalizationProvider>
        </div>
    )
}

export default Datecalendar