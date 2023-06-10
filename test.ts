const date = new Date()
const dateFormatted = new Intl.DateTimeFormat("es-UY", {
    hour: "2-digit",
    minute: "2-digit",
}).format(date)
console.log(dateFormatted)