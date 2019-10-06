//#region     Imports
//‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
// import { debounce } from 'lodash'
//_________________________________________________________
//#endregion  Imports





/*********************
*****    Main    *****
*********************/
const tools = {
  math: {
    add: (x,y) => x + y,
    subtract: (x,y) => x - y,
    multiply: (x,y) => x * y,
    divide: (x,y) => x / y,
  },
  validate: {
    email: str => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(str).toLowerCase())
    }
  },
}

export default tools