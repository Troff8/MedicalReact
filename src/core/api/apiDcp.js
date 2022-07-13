import axios from 'axios'
const getListAPI = async (direction) => {
    try {
        const response = await axios.get('http://localhost:8080/api/doctor/getFullList')
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
const setNewTemperature = async (id, temp, date) => {
    const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        data: {
            id_device: id,
            temp,
            date
        },
        url: 'http://localhost:8080/api/controllDevice/setNewTemperature'
    }
    await axios(options).then((res) => {
        return res.data
    })
}

const createDeviceAPI = async (model, serialNumber, maxTemp, minTemp, description) => {
    const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        data: {
            model,
            serialNumber,
            maxTemp,
            minTemp,
            description,
            status: 'Неизвестно'
        },
        url: 'http://localhost:8080/api/controllDevice/CreateDevice'
    }
    await axios(options).then((res) => {
        return res.data
    })
}
export { getListAPI, setNewTemperature, createDeviceAPI }
