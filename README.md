### Hono file server for serving hyperscrpt xml files

This file server is meant to be used with the AwesomeExpoProject React Native app.
Once the server is started and being served over an nginx tunnel then copy and paste the url into the Hyperview component in the AwesomeExpoProject and you should see it rendered in Expo go. Once this is setup you should be able to change the `hello-world.xml` file and reload the expo go app to see the changes.

```
https://something-something.ngrok.io/src/static/hello-world.xml
```

Would be cool to also serve htmx responses that mimic the xml files
so we could have the same UI for a mobile and web front-end.

Installation

```
bun install
bun run dev
```

```
open http://localhost:3000
```

Use nginx to access the file server from within expo go

```
ngrok http localhost:3000
```
