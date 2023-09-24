export default function getCurrentDate(dayPlus: number) {
    const currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let day = String(currentDate.getDate() + dayPlus).padStart(2, '0');

    const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();
    if (Number(day) > daysInMonth) {
        day = String(Number(day) - daysInMonth).padStart(2, '0');
        month = String(Number(month) + 1).padStart(2, '0');
        if (Number(month) > 12) {
            year++;
            month = '01';
        }
    }

    return `${year}-${month}-${day}`;
}