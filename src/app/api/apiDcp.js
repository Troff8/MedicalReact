// import axios from 'axios'
const getListAPI = async (direction) => {
    try {
        const response = await axios.get('https://server.cdpolyclinic.ru/api/doctor/getFullList')
        if (response.status === 200) {
            if (response.data.length >= 0) {
                const listDoctorsDirection = []
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].direction.toLowerCase() === direction.toLowerCase()) {
                        listDoctorsDirection.push(response.data[i])
                    }
                }
                return listDoctorsDirection
            }
        }
    } catch {
        console.log('Ошибка получения данных с сервера')
    }
}
const sendRequestCallAPI = async (name, phoneNumber, date) => {
    const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        data: {
            name,
            telephone: phoneNumber,
            date
        },
        url: 'https://server.cdpolyclinic.ru/api/request/setRequest'
    }
    await axios(options).then((res) => {
        return res.data
    })
}

const sendMessageAPI = async (name, phoneNumber, email, message, date) => {
    const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        data: {
            name,
            sms: message,
            email,
            telephone: phoneNumber,
            date
        },
        url: 'https://server.cdpolyclinic.ru/api/message/setMessage'
    }
    await axios(options).then((res) => {
        return res.data
    })
}
export { getListAPI, sendRequestCallAPI, sendMessageAPI }
