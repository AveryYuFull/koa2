const queryToStr = (url, object) => {
    let queryStrArr = [];
    if (object) {
        for (let key in object) {
            queryStrArr.push(`${key}=${typeof object[key] === 'object' ? JSON.stringify(object[key]) : object[key]}`);
        }
    }
    if (url.includes('?')) {
        url = `${url}&${queryStrArr.join('&')}`;
    } else {
        url = `${url}?${queryStrArr.join('&')}`;
    }
    return url;
}

export {
    queryToStr
}
