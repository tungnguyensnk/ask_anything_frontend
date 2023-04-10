let LINK = process.env.LINK || 'http://localhost:8889';
const api = (url, method, body) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = body === null ? {
        method: method,
        headers: myHeaders
    } : {
        method: method,
        headers: myHeaders,
        body: JSON.stringify(body)
    };

    return fetch(LINK + url, requestOptions)
}

const login = async (email, name, src) => {
    return await api(
        '/api/login',
        'POST',
        {email: email, name: name, src: src}
    );
}

const getUserInfo = async (user_id) => {
    return await api(
        `/api/user?id=${user_id}`,
        'GET',
        null
    );
}

const ask = async (user_id_ans, question) => {
    let email = JSON.parse(localStorage.getItem('user')).email;
    return await api(
        '/api/ask',
        'POST',
        {email: email, user_id_ans: parseInt(user_id_ans), question: question}
    );
}

const getAllQuestion = async () => {
    let email = JSON.parse(localStorage.getItem('user')).email;
    return await (await api(
        `/api/allquestion?email=${email}`,
        'GET',
        null
    )).json();
}

const answer = async (question_id, answer) => {
    return await (await api(
        '/api/answer',
        'POST',
        {
            question_id: parseInt(question_id),
            answer: answer
        })).json();
}

const getAllAnswer = async () => {
    let email = JSON.parse(localStorage.getItem('user')).email;
    return await (await api(
        `/api/allanswer?email=${email}`,
        'GET',
        null
    )).json();
}

const getQuestion = async (question_id) => {
    return await (await api(
        `/api/question?id=${question_id}`,
        'GET',
        null
    )).json();
}
export default {login, getUserInfo, ask, getAllQuestion, answer, getAllAnswer, getQuestion};