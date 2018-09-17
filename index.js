require('seneca')()
    .use('math') // finds ./math.js in local folder
    .listen({ host: '104.224.150.203', port: 9090 })