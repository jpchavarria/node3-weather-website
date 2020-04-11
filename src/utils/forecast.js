const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2471803ec238b4672d2dffd725629cab&query=' + latitude + ',' + longitude


    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, ' It is currently ' + body.current.temperature + 
            ' degress out. It feels like ' + body.current.feelslike + 
            ' degress out. Humidity is '+ body.current.humidity)
        }
    })
}

module.exports = forecast