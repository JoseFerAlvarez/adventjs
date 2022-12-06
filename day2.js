const year = 2022;
const holidays = ['01/06', '04/01', '12/25'];

console.log(countHours(year, holidays));

function countHours(year, holidays) {
    let hours = 0;

    holidays.forEach((holiday) => {
        const day = new Date(holiday + "/" + year);

        const sunday = 0;
        const saturday = 6;

        if (day.getDay() > sunday && day.getDay() < saturday) {
            hours += 2;
        }
    });

    return hours;
}
