//#region     Imports & Defaults
//‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt')
//_________________________________________________________
//#endregion  Imports & Defaults




/*********************
*****    Main    *****
*********************/
const api = {
  user: {
    login: (user,pass) => {
      return console.log('login\n',user,pass)
    }
  },
}

export default api
