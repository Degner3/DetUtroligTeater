const months = [
    "Januar", "Februar", "Marts", "April", "Maj", "Juni",
    "Juli", "August", "September", "Oktober", "November", "December"
];


export function convertDate(dateString) {
    let newDate = new Date(dateString)
    let day = newDate.getDate();
    // let day = newDate.getDay() + 1;
    // let day = String(newDate.getDate()).padStart(2, '0');
    // let month = newDate.getMonth() + 1;
    let month = months[newDate.getMonth()];
    let year = newDate.getFullYear();

    return { day, month, year}
}