import { app } from './app'
import { env } from './env'

app
  .listen({
    host: '0.0.0.0',
    // port: process.env.PORT ? Number(process.env.PORT) : 3333
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server on running')
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
