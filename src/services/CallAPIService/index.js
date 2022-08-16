import Cookies from 'js-cookie'


const callAPIService = async (_url, _method = "GET", _body) => {
    var token = Cookies.get('authToken');
    let fetchObj = { 
        method: _method, 
        mode: "cors", 
        headers: {
            "Content-Type": "application/json",
            'authorization': (token ? token : '')
        }
    };
    if (_body) {
        fetchObj = {
            ...fetchObj, body: _body
        };
    }
    const api_url = process.env.API_URL + _url;
    return new Promise(function (resolve, reject) {
        fetch(api_url, fetchObj)
            .then(res => {
                res.json().then(data => {
                    resolve(data);
                }).catch((e) => {
                    console.log(e)
                })
            })
            .catch(err => {
                reject(err);
            });
    });
};

export default callAPIService;
