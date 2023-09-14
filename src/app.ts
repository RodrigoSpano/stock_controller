import {app} from './index'
import './db/connect'

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`sv running at port ${PORT}`)
})
  