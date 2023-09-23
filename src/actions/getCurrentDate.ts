export default function getCurrentDate(dayPlus: number) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate() + dayPlus).padStart(2, '0');

    return `${year}-${month}-${day}`;
}
