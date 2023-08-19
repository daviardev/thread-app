export default function DateFormat (date, format) {
  const formatter = new Intl.DateTimeFormat('es-Co', format)

  return formatter.format(date)
}
