export const HumanDate = (date) => {
  console.log(date)
  return new Date(date).toLocaleTimeString("en-US",
    {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/Chicago'
    })
}