const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('', (req, res) =>{
    console.log(req) // request to endpoint

    res.send('sent from node :')
    
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
