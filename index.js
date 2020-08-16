let express = require('express')
let app = express()

app.use(express.static('dist'))

app.listen(process.env.PORT || 3000, () => {
  console.log('app launched')
})
