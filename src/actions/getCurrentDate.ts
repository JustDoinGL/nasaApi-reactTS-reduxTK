let countDay = 0
let countMonth = 0
let countYear = 0

export default function getCurrentDate(dayPlus: number) {
    const currentDate = new Date()
    let year = currentDate.getFullYear() + countYear
    let month = String(currentDate.getMonth() + 1 + countMonth).padStart(2, '0')
    let day = String(currentDate.getDate() + dayPlus - countDay).padStart(2, '0')

    const daysInMonth = new Date(year, currentDate.getMonth() + 1 + countMonth, 0).getDate()
    if (Number(day) > daysInMonth) {
        countDay += daysInMonth
        day = String(Number(day) - daysInMonth).padStart(2, '0')
        month = String(Number(month) + 1).padStart(2, '0')
        countMonth++
        if (Number(month) > 12) {
            year++
            month = '01'
            countYear++
        }
    }

    return `${year}-${month}-${day}`
}