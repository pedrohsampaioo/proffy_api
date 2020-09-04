export default function converHourToMinutes(time: String): Number {
    const [hours, minutes] = time.split(':').map(Number);
    return (hours * 60) + minutes;
}