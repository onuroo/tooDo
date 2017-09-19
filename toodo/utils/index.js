import m from './moment'
export const moment = {
  locale(){
    m.locale(); 
  },
  format(format){
    m.format(format); 
  },
  startOfFromNow(time){
    m.startOf(time).fromNow();
  },
  endOfFromNow(time){
    m.endOf(time).fromNow();
  },
  difference(day1,day2,format){
    return m(day1).diff(m(day2), format)
  }
} 
export function spreadOperator(value) {
  return [...value]
}
export function tester() {
  return 'wewe'
}
export function arrayComparison(arr1, arr2){
    return arr1.length === arr2.length ? true : false
}
export function isNull(value){
  return value !== undefined && value !== null && value.length > 0 ? true : false
}
export function conRendering(condition, viewTrue, viewFalse){
  return condition ? viewTrue : viewFalse 
}
export const maths = {
  addition (a, b) {
    return a + b  
  },
  subtraction (a, b) {
    return a - b
  },
  multiplication (a, b) {
    return a * b
  },
  division (a, b){
      return a / b
  }
}


