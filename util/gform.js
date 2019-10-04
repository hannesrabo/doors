
const URL = 'https://script.google.com/macros/s/AKfycbxfxJuz6s8PHwfnlm4uE2E02Z7D1qNyrzWKRDNoihF8r0bGouE/exec'

const sendToSheets = (dataObject) => {
    // ?test_1=1&test_2=2&test_3=1
    let dataString = ''
    for (let key in dataObject) {
        if (dataObject.hasOwnProperty(key)) {
            let value = dataObject[key]

            if (dataString !== '')
                dataString += "&"

            dataString += encodeURIComponent(key) + "=" + encodeURIComponent(value)
        }
    }

    if (dataString === '') {
        console.log("Warning. The object to send seems to be empty: " + dataObject)
        return
    } else {
        console.log("Sent of this data: " + dataString)
    }

    let dataURL = URL + '?' + dataString

    return fetch(dataURL)
}

export default sendToSheets

