---
sidebar_position: 2
---

# Setting up the bot

Setting up galactica was meant to be easy and done by just editing a `json` file so you can change the token, prefix, presence and logs channel name for the bot.

First find the `config.json` file on the root directory of the bot and then edit these parameters:
  ```json title="config.json"
  {
    "TOKEN": "YOUR_BOT_TOKEN",
    "BOT_PRESENCE": "YOUR_BOT_PRESENCE",
    "MUSIC_IS_ENABLED": true,
    "BOT_PRESENCE_TYPE": "WATCHING",
    "MODLOGS_CHANNEL_NAME": "MODLOGS_CHANNEL_NAME",
    "SERVER_OPTIONS": {
      "ENABLED": true,
      "PORT": null
    }
  }
  ```
| Variable                 | type                                                                                                                                                                                   | Default    | Description                                                                                                                                    |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| `TOKEN`                  | [string](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)                                                                                             | none       | The bot's token, if you don't have one you can get one from the  [ Discord Developer portal ]( https://discord.com/developers/applications ) . |
| `BOT_PRESENCE`           | [string](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)                                                                                             | none       | The presence of the bot.                                                                                                                       |
| `MUSIC_IS_ENABLED`       | [boolean](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)                                                                                            | true       | Enables the music commands that galactica includes.                                                                                            |
| `BOT_PRESENCE_TYPE`      | [string](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)                                                                                             | "WATCHING" | Sets the presence type of the bot.                                                                                                             |
| `SERVER_OPTIONS.ENABLED` | [boolean](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)                                                                                            | true       | Starts a express.js server to check the bot's current status.                                                                                  |
| `SERVER_OPTIONS.PORT`    | [number](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types) \| [null](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types) | null       | The port the server will listen to, *null=3000*.                                                                                               |
