import { Elysia } from 'elysia'
import { staticPlugin } from '@elysiajs/static'

new Elysia()
    .get('/', () => Bun.file('static/index.html'))
    .use(staticPlugin({
        assets: 'static',
        prefix: '/'
    }))
    .listen(process.env.PORT||3000,()=>{
        console.info(`Elysia listening on ${process.env.PORT||3000}`)
    })