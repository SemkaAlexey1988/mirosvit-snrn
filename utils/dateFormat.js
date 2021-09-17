const dateFormat = () => {
let currentDate = new Date()
let formatDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
return formatDate
}
export default dateFormat