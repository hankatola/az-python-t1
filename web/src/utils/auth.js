//#region     Imports
//‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
import jsonwebtoken from 'jsonwebtoken'
//_________________________________________________________
//#endregion  Imports





/*********************
*****    Main    *****
*********************/
const auth = {

  saveToken: token => {
    localStorage.setItem('token',token)
  },


  getToken: () => {
    return localStorage.getItem('token')
  },


  deleteToken: () => {
    return localStorage.removeItem('token')
  },


  get: (id=true) => {
    return jsonwebtoken.decode(auth.getToken()).user_id
  }
}

export default auth