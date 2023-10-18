import { Hono } from 'hono'
import { serveStatic } from 'hono/bun';

const app = new Hono()

app.use('/src/static/*', serveStatic({ root: './' }))
app.get('/', (c) => c.text("How does this work?"))
app.get('*', serveStatic({ path: '/src/static/fallback.txt' }))

app.showRoutes();

export default app
