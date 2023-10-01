const dateOffset = {
    days: 0,
    months: 0,
    years: 0,
  };

export default function getCurrentDate(dayPlus: number) {
    const currentDate = new Date()
    let year = currentDate.getFullYear() + dateOffset.years
    let month = String(currentDate.getMonth() + 1 + dateOffset.months).padStart(2, '0')
    let day = String(currentDate.getDate() + dayPlus - dateOffset.days).padStart(2, '0')

    const daysInMonth = new Date(year, currentDate.getMonth() + 1 + dateOffset.months, 0).getDate()
    if (Number(day) > daysInMonth) {
        dateOffset.days += daysInMonth
        day = String(Number(day) - daysInMonth).padStart(2, '0')
        month = String(Number(month) + 1).padStart(2, '0')
        dateOffset.months++
        if (Number(month) > 12) {
            year++
            month = '01'
            dateOffset.years++
        }
    }

    return `${year}-${month}-${day}`
}