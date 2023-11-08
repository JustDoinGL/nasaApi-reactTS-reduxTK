export function getCurrentDate(dayPlus: number): string {
    const currentDate = new Date()
    currentDate.setDate(currentDate.getDate() + dayPlus);
    const formattedDate = currentDate.toLocaleDateString();
    const parts = formattedDate.split(".");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
}