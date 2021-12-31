---
sidebar_position: 4
---

# Running on Linux
Running galactica from bare metal is much easier than running it on [Docker](./running-docker.md) and generally uses less resources than containerizing it.

## Dependencies
The dependencies are mentioned in the [prerequisites](../intro.md) section they can still be downloaded with your distribution's package manager but make sure that your `nodejs` package is **at least** v16 you can check it by running:
```bash
node -v
```

## Building the bot
If you have configured the bot now you just need to go to the root dir of the bot and run:
```bash
npm run build
```
to build it, and if you use another package manager change your command accordingly.

## Running the bot
Now for the final step, actually running the thing, you just need to run this command on the root dir of the bot:
```bash
node ./dist/src/main.js
```
and what this will do is that it will run the `main` compiled file of the bot.