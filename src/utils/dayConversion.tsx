export const convertDayToIndonesian = (day: string): string => {
	const days: { [key: string]: string } = {
		Monday: "Senin",
		Tuesday: "Selasa",
		Wednesday: "Rabu",
		Thursday: "Kamis",
		Friday: "Jumat",
		Saturday: "Sabtu",
		Sunday: "Minggu",
	};
	return days[day] || day;
};
