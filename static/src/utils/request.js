import 'whatwg-fetch'
import { queryToStr } from './stringUtil'

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
        _url = queryToStr(_url, _data)
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
    },
    form (options) {
        if (typeof options !== 'object') {
            return;
        }
        let _url = options.url
        let _data = options.data
        let _form = document.createElement('form')
        _form.method = 'POST'
        _form.action = _url

        for (let key in _data) {
            let _input = document.createElement('input')
            _input.type = 'hidden'
            _input.value = typeof _data[key] === 'object' ? JSON.stringify(_data[key]) : _data[key]
            _input.name = key
            _form.appendChild(_input)
        }
        document.body.appendChild(_form)
        _form.submit()
    }
}

export default request