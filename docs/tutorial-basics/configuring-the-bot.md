---
sidebar_position: 2
---

# Setting up the bot

Setting up galactica was meant to be easy and done by just editing a `json` file so you can change the token, prefix, presence and logs channel name for the bot.

First find the `config.json` file on the root directory of the bot and then edit these parameters:
  ```json title="config.json"
  {
    "TOKEN": "YOUR_BOT_TOKEN",
    "PREFIX": "YOUR_BOT_PREFIX",
    "BOT_PRESENCE": "YOUR_BOT_PRESENCE",
    "MUSIC_IS_ENABLED": true,
    "BOT_PRESENCE_TYPE": "YOUR_BOT_PRESENCE_TYPE",
    "MODLOGS_CHANNEL_NAME": "MODLOGS_CHANNEL_NAME"
  }
  ```
  - **BOT_TOKEN** is where you put you bot's token and if you don't have one you can get one from the [discord developer portal](https://discord.com/developers/applications).
  - **PREFIX** is the characters that you commands want to start with e.x. `!ping` **!** is the prefix.
  - **BOT_PRESENCE** will change you bot's rich presence [example on discord website](https://discord.com/rich-presence).
  - **MUSIC_IS_ENABLED** this will enable galactica's music commands, note that this value is *boolean*
  - **BOT_PRESENCE_TYPE** sets you bot's presence type ***PLAYING, WATCHING, LISTENING, COMPETING*** must be *uppercase* **only**.
  - **MODLOGS_CHANNEL_NAME** is the channel where the bot's logs `(like when it's shut down)` are going to be sent.
