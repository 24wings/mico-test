require('seneca')()

.use('math')

// listen for role:math messages
// IMPORTANT: must match client
.listen({ type: 'tcp', pin: 'role:math', host: '104.224.150.203' })