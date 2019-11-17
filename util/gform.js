
const MAIN_URL = 'https://script.google.com/macros/s/AKfycbxfxJuz6s8PHwfnlm4uE2E02Z7D1qNyrzWKRDNoihF8r0bGouE/exec'
const USER_DATA_URL = 'https://script.google.com/macros/s/AKfycbwcQg9JM1CUdufxSWGm1VhRI1oEoa6TUB1z9HRjPtY0eoUIn3E5/exec'

const sendToSheets = (dataObject, URL = MAIN_URL) => {
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

    console.log(URL)

    return fetch(
        dataURL,
        {
            mode: 'no-cors'
        }
        // {
        //     mode: 'no-cors', // no-cors, *cors, same-origin
        //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: 'same-origin', // include, *same-origin, omit
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
    )
}

export default sendToSheets
export {
    USER_DATA_URL
}

