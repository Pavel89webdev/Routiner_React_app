export default class GetTimestamp {

    // constructor(){
    //     this.dateString = datestring
    // }
    // на входе из массива будет дата в формате ГГГГ-ММ-ДД

    addAmidday = (dateString) => {
        return `${dateString}T12:00:00.000Z` //нужен ли Z ???
      }
      
    getDayTimestamp = (dateString) => {
        return Date.parse(dateString)
      }
      
    composeGettingTimestamp = (arr) => (date) => {
        return arr.reduce( (prev, item) => {
          return item(prev)
        }, date)
      }
      
    
    //dateString в формате 2020-09-13  
    getTimestamp = (dateString) => this.composeGettingTimestamp([
          this.addAmidday, 
          this.getDayTimestamp
        ])(dateString);

    toDataString = (newDateObj) => {
        const year = newDateObj.getFullYear();
        const month = newDateObj.getMonth() + 1;
        const addZeroMonth = month < 10 ? `0${month}` : month
        const day = newDateObj.getDate();

        return `${year}-${addZeroMonth}-${day}T12:00:00.000Z`
    }

    todayDataString = () => {
        return this.toDataString(new Date());
    }

    todayTimestamp = () => {
      return this.getDayTimestamp(this.todayDataString());
    }
}


//const service = new GetTimestamp();
// console.log(service.getTimestamp('2020-09-13'))
// console.log(service.toDataString(new Date));
//console.log(service.todayTimestamp())
