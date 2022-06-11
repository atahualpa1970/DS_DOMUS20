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
        const currentYear = currentYearMonth.year
        const currentMonth = (currentYearMonth.month + 1).toString().padStart(2, 0)
        return currentYear + "-" + currentMonth + "-" + currentDay.toString().padStart(2, 0)
    }

    const getToday = () => {
        setSelectFullDay(new Date())
        setCurrentDay(new Date().toISOString().substring(0, 10))
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

    // ================= Controles de fecha/hora de la agenda =================
    const today = new Date()
    const weekDayName = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
    const daysToShow = getWeekDayNumber(selectFullDay)
    const monthName = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const shortMonthName = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
    const hours = ["07 AM", "08 AM", "09 AM", "10AM", "11AM", "12PM", "13PM", "14PM", "15PM", "16PM", "17PM", "18PM", "19PM", "20PM", "21PM"]
    var titleToShow = monthName[daysToShow.month] + " " + daysToShow.year
    if (daysToShow.week[0] > daysToShow.week[6])
        if (daysToShow.month < 11) titleToShow = shortMonthName[daysToShow.month] + " - " + shortMonthName[daysToShow.month + 1] + " " + daysToShow.year
        else titleToShow = "Dic " + daysToShow.year + " - Ene " + (daysToShow.year + 1)

    // ====================== Obtener Agentes =====================
    const users = require("../data/users.json")
    const agents = {}
    users.map( (user) => {
        if (user.seller) agents[user.idUser] = { 
            name: user.name.split(" ")[0], 
            color: user.color 
        }
    })
    console.log("Users: ", agents)

    // ============= Calculo de las citas semanales ===============
    const confirmDates = require("../data/confirmDates.json")
    var tempDate = new Date(daysToShow.year, daysToShow.month, daysToShow.week[0])
    var weekDays = []
    var tempWeekDays = {}
    for (let i = 0; i < 7; i++) {
        weekDays[i] = tempDate.toISOString().substring(0, 10)
        tempDate.setDate(tempDate.getDate() + 1)
        for (let j = 7; j <= 21; j++) {
            tempWeekDays[j.toString().padStart(2, 0) + "-" + i] = []
        }
    }

    confirmDates.map((element) => {
        let key = ""
        switch (element.dateEvent) {
            case weekDays[0]:
                key = element.timeEvent.substring(0, 2) + "-0"
                tempWeekDays[key].push({ 
                    agent: agents[element.idAgent], 
                    nameClient: element.lastName + " " + element.firstName 
                })
                break;
            case weekDays[1]:
                key = element.timeEvent.substring(0, 2) + "-1"
                tempWeekDays[key].push({ 
                    agent: agents[element.idAgent], 
                    nameClient: element.lastName + " " + element.firstName 
                })
                break;
            case weekDays[2]:
                key = element.timeEvent.substring(0, 2) + "-2"
                tempWeekDays[key].push({ 
                    agent: agents[element.idAgent], 
                    nameClient: element.lastName + " " + element.firstName 
                })
                break;
            case weekDays[3]:
                key = element.timeEvent.substring(0, 2) + "-3"
                tempWeekDays[key].push({ 
                    agent: agents[element.idAgent], 
                    nameClient: element.lastName + " " + element.firstName 
                })
                break;
            case weekDays[4]:
                key = element.timeEvent.substring(0, 2) + "-4"
                tempWeekDays[key].push({ 
                    agent: agents[element.idAgent], 
                    nameClient: element.lastName + " " + element.firstName 
                })
                break;
            case weekDays[5]:
                key = element.timeEvent.substring(0, 2) + "-5"
                tempWeekDays[key].push({ 
                    agent: agents[element.idAgent], 
                    nameClient: element.lastName + " " + element.firstName 
                })
                break;
            case weekDays[6]:
                key = element.timeEvent.substring(0, 2) + "-6"
                tempWeekDays[key].push({ 
                    agent: agents[element.idAgent], 
                    nameClient: element.lastName + " " + element.firstName 
                })
                break;
        }
    })

    console.log("weekDays: ", tempWeekDays)

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
                                                        style={{ "width": "45px", "height": "45px" }}
                                                        onClick={selectCurretDay}
                                                        value={getCurrentDay(daysToShow, daysToShow.week[index])}>
                                                        {daysToShow.week[index]}
                                                    </button>
                                                    : <button className="btn rounded-circle btn-outline-secondary fw-bold"
                                                        style={{ "width": "45px", "height": "45px" }}
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
                                    <tr style={{ "height": "100%" }} key={index}>
                                        <td><p style={{ fontSize: "70%" }}>{hour}</p></td>
                                        {
                                            weekDayName.map((day, index) => (
                                                <td style={{ "height": "100%" }} key={index}>
                                                    {
                                                        <div className="card w-100" style={{ "height": "100%" }} key={hour}>
                                                            {
                                                                tempWeekDays[hour.substring(0, 2) + "-" + index].map((item) => (
                                                                    <span key={item.agent.name} className="badge rounded-pill my-1"
                                                                        style={{ "backgroundColor": item.agent.color, "color": "black" }}>
                                                                        {item.agent.name}
                                                                    </span>
                                                                ))
                                                            }
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
