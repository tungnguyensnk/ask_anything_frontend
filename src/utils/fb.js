const init = () => {
    return new Promise((resolve) => {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: '1318249918678037',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v16.0'
            });
            resolve(true);
        };
    });
}
const login = () => {
    return new Promise((resolve) => {
        window.FB.login(function (response) {
            resolve(response);
        }, {scope: 'public_profile,email'});
    });
}

const saveUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}
const checkLogin = () => {
    let kq = {};
    window.FB.getLoginStatus(function (response) {
        kq = response;
    });
    // connected: Logged into your webpage and Facebook.
    if (kq.status !== 'connected') {
        localStorage.removeItem('user');
    }
    return kq;
}

const logout = () => {
    return new Promise((resolve) => {
        window.FB.logout(function (response) {
            // Person is now logged out
            localStorage.removeItem('user');
            resolve(response);
        });
    });
}
const api = (url, method, params) => {
    return new Promise((resolve) => {
        window.FB.api(url, method, params, (response) => {
            resolve(response);
        });
    });
}
const info = async () => {
    if (localStorage.getItem('user') !== null) {
        return JSON.parse(localStorage.getItem('user'));
    }
    let user = await api(
        '/me',
        'GET',
        {"fields": "id,name,email,picture.type(large)"}
    );

    saveUser(user);
    return user;
}
export default login;
export {checkLogin, logout, info, init};