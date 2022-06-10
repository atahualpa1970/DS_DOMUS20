import React, { useState } from 'react'

export default function Calendar({ currentDay, setCurrentDay }) {

    const [selectFullDay, setSelectFullDay] = useState(new Date());

    const getWeekDayNumber = (current) => {
        let week = []
        let month = 0
        let year = 0
        let temp = new Date(current)

        temp.setDate(temp.getDate() - temp.getDay())
        for (let i = 0; i < 7; i++) {
            if (i === 0) {
                month = temp.getMonth()
                year = temp.getFullYear()
            }
            week.push(temp.getDate())
            temp.setDate(temp.getDate() + 1)
        }
        return { "month": month, "year": year, "week": week };
    }

    const getCurrentDay = (currentYearMonth, currentDay) => {
        let currentYear = currentYearMonth.year
        let currentMonth = currentYearMonth.month +1
        if (currentMonth < 10) currentMonth = "0" + currentMonth
        if (currentDay < 10) currentDay = "0" + currentDay
        return currentYear +"-"+ currentMonth +"-"+ currentDay
    }

    const getToday = () => {
        setSelectFullDay(new Date())
        setCurrentDay(new Date().toISOString().substring(0,10))
    }

    const nextMonth = () => {
        let temp = new Date(selectFullDay)
        temp.setMonth(temp.getMonth() + 1)
        setSelectFullDay(temp)
    }

    const prevMonth = () => {
        let temp = new Date(selectFullDay)
        temp.setMonth(temp.getMonth() - 1)
        setSelectFullDay(temp)
    }

    const nextWeek = () => {
        let temp = new Date(selectFullDay)
        temp.setDate(temp.getDate() + 7)
        setSelectFullDay(temp)
    }

    const prevWeek = () => {
        let temp = new Date(selectFullDay)
        temp.setDate(temp.getDate() - 7)
        setSelectFullDay(temp)
    }

    const selectCurretDay = (e) => {
        setCurrentDay(e.target.value)
    }


    const today = new Date()
    const weekDayName = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
    const daysToShow = getWeekDayNumber(selectFullDay)
    const monthName = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const shortMonthName = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
    const hours = ["7 AM", "8 AM", "9 AM", "10AM", "11AM", "12PM", "13PM", "14PM", "15PM", "16PM", "17PM", "18PM", "19PM", "20PM", "21PM"]
    var titleToShow = monthName[daysToShow.month] + " " + daysToShow.year
    if (daysToShow.week[0] > daysToShow.week[6])
        if (daysToShow.month < 11) titleToShow = shortMonthName[daysToShow.month] + " - " + shortMonthName[daysToShow.month + 1] + " " + daysToShow.year
        else titleToShow = "Dic " + daysToShow.year + " - Ene " + (daysToShow.year + 1)


    return (
        <div>
            <div className="row fluid col-xl-12 mx-1 my-1">
                <div className="col-xl-4"><h1>Agenda</h1></div>
                <div className="col-xl-8">
                    <p>
                        <button className="btn btn-outline-secondary" onClick={getToday}>Hoy</button>&nbsp;&nbsp;
                        <button className="btn btn-outline-secondary" onClick={prevMonth}>&lt;</button>
                        &nbsp; {titleToShow} &nbsp;
                        <button className="btn btn-outline-secondary" onClick={nextMonth}>&gt;</button>
                    </p>
                </div>

                <div className="row fluid col-xl-12 mx-1 my-1">
                    <table className="table table-striped" width="100%">
                        <thead>
                            <tr>
                                <td align="center">
                                    <button className="btn btn-outline-secondary" onClick={prevWeek}>&lt;</button>
                                </td>
                                {
                                    weekDayName.map((weekDay, index) => (
                                        <td width="13%" align="center" key={index}>{weekDay}<br />
                                            {
                                                (daysToShow.week[index] === today.getDate()
                                                    && selectFullDay.toDateString() === today.toDateString())
                                                    ? <button className="btn rounded-circle btn-primary fw-bold"
                                                        style={{"width": "45px", "height": "45px"}}
                                                        onClick={selectCurretDay} 
                                                        value={getCurrentDay(daysToShow, daysToShow.week[index])}>
                                                        {daysToShow.week[index]}
                                                    </button>
                                                    : <button className="btn rounded-circle btn-outline-secondary fw-bold" 
                                                        style={{"width": "45px", "height": "45px"}}
                                                        onClick={selectCurretDay} 
                                                        value={getCurrentDay(daysToShow, daysToShow.week[index])}>
                                                        {daysToShow.week[index]}
                                                    </button>
                                            }
                                        </td>
                                    ))
                                }
                                <td align="center">
                                    <button className="btn btn-outline-secondary" onClick={nextWeek}>&gt;</button>
                                </td>
                            </tr>
                        </thead>
                        <tbody className="border">
                            {
                                hours.map((hour, index) => (
                                    <tr key={index}>
                                        <td><p style={{ fontSize: "70%" }}>{hour}</p></td>
                                        {
                                            weekDayName.map((day, index) => (
                                                <td key={index}>
                                                    {
                                                        <div className="card w-100" style={{ height: "50px" }} key={hour}>
                                                            <p></p>
                                                        </div>
                                                    }
                                                </td>
                                            ))
                                        }
                                        <td><p style={{ fontSize: "70%" }}>{hour}</p></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
