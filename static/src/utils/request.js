import 'whatwg-fetch'

function fetchEvent (options) {
    if (!options) {
        return
    }
    let _url = options.url || ''
    let _type = options.type || 'GET'
    let _data = options.data || {}
    let fetchParams = {
        credentials: true,
        method: _type
    }
    let _success = null
    let _error = null
    
    if (_type === 'GET') {
        let paramsArr = []
        
        for (let key in _data) {
            if (typeof _data[key] === 'object') {
                paramsArr.join(`${key}=${JSON.stringify(_data[key])}`)
            } else {
                paramsArr.join(`${key}=${_data[key]}`)
            }
        }
        if (_url.includes('?')) {
            _url = `${_url}&${paramsArr.join('&')}`
        } else {
            _url = `${_url}?${paramsArr.join('&')}`
        }
        fetchParams = Object.assign({}, fetchParams, {headers: new Header()})
    } else {
        fetchParams = Object.assign({}, fetchParams, {headers: {'Content-Type': 'application/json'}, body: JSON.stringify(_data)})
    }

    if (typeof options.success === 'function'
        && typeof options.error === 'function') {
        _success = options.success
        _error = options.error
        return fetch (_url, fetchParams).then(res => {
            return res.json()
        }).then(res => {
            _success(res)
        }).catch (err => {
            _error(err)
        })
    } else {
        return new Promise((resolve, reject) => {
            fetch (_url, fetchParams).then(res => {
                return res.json()
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

const request = {
    get (options) {
        if (typeof options !== 'object') {
            return
        }
        options.type = 'GET'
        return fetchEvent(options)
    },
    post (options) {
        if (typeof options !== 'object') {
            return
        }
        options.type = 'POST'
        return fetchEvent(options)
    }
}

export default request