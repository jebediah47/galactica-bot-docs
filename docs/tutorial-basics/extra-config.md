---
sidebar_position: 6
---

# Optional configuration

## Enabling mod logs

To enable the mod logs system you need to run the `/setmodlogs` bot command inside of Discord with the mode value to `true`. This will change the `modLogsIsEnabled` property of the database to `true`.

### Setting the mod logs channel ID

Since we enabled the mod logs system we need to also specify the `modLogsChannelID` property of the database. This is the channel ID that the mod logs will be sent to. To do so you need to run the `/setmodlogschannelid` bot command and specify the channel ID on the `name` option
