import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 50000
axios.defaults.baseURL = '/api'
axios.defaults.withCredentials = true

axios.interceptors.request.use(config => {
  // const token = window.localStorage.getItem('token')
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtb2JpbGUiOiIxODIyNjYyNjczMSIsImlkIjoiNjEiLCJleHAiOjE1ODA4Nzg0ODB9.RyOH_qmwo_F31HWTl7NJhp1ZIEp2Wb2B23kJAhU4nDI'
  if (token) config.headers.Authorization = token
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

export function Get (url, param, headers) {
  return new Promise((resolve, reject) => {
    axios.get(url, headers, {
      params: param
    }).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function Fetch (url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: param
    }).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function Post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function Put (url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, qs.stringify(params), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function PutRequest (url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function Delete (url, params) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
      data: qs.stringify(params),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    }).catch((error) => {
      reject(error)
    })
  })
}
