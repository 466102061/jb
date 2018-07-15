import axios from 'axios';

//ajax请求
export default async function httpRequest(options = {}) {
    if (options.methods == 'GET' || options.methods == 'get') {
          return await axios.get(
            options.url, {
              params: options.data
            }
          )
    } else {
      return await axios.post(
        options.url, options.data
      )
    } 
}

// import 'whatwg-fetch'
// import 'es6-promise'

// //ajax请求
// export default async function httpRequest(options = {}) {
//     if (options.methods == 'GET' || options.methods == 'get') {
//       const result =  await fetch(options.url, {
//         credentials : 'include',
//         headers : {
//           'Accept' : 'application/json, text/plain, */*'
//         }
//       })
//       return result;
//     } else {
//       const result = await fetch(options.url, {
//         method : 'POST',
//         credentials : 'include',
//         headers : {
//           'Accept' : 'application/json, text/plain, */*',
//           'Content-Type' : 'application/x-www-form-urlencoded'
//         },
//         body : JSON.stringify(options.data)
//       }).then(res =>{
//         console.log('content-type',res.headers.get('content-type'))
//         return res;
//       })
//     } 
// }
