$(document).ready(function () {

    /*Date counter*/
    const creationDateObj = {
        year: 2023,
        month: 4,
        day: 16,
        hours: 19,
        minutes: 59,
        seconds: 0
    };

    const creationDate = new Date(
        creationDateObj.year,
        creationDateObj.month,
        creationDateObj.day,
        creationDateObj.hours,
        creationDateObj.minutes,
        creationDateObj.seconds
    );

    const timeLeft = document.querySelector('#timeLeft');

    setInterval(() => {

        const now = new Date();
        const diffInMS = now - creationDate;
        const diffAsDate = new Date(diffInMS);

        const [
            years,
            months,
            days,
            hours,
            minutes,
            seconds
        ] = diffAsDate
            .toISOString()
            .split('T')
            .map(timePart =>
                timePart
                    .split(/-|:|\./)
                    .map(str => +str)
            )
            .flat();
            const timeDay = document.querySelector('.dtcntrday');
            const timeHr = document.querySelector('.dtcntrhr');
            const timeMnt = document.querySelector('.dtcntrmnt');
            const timeScnd = document.querySelector('.dtcntrscnd');
        // timeLeft.textContent = `${years - 1970}  ${months - 1} месяца ___ ${days - 1} дней ___ ${hours} час ___ ${minutes} минут ___ ${seconds} секунд`;
        timeDay.textContent = `${days - 1}`;
        timeHr.textContent = `${hours}`;
        timeMnt.textContent = `${minutes}`;
        timeScnd.textContent = `${seconds}`;
    }, 1000);
});