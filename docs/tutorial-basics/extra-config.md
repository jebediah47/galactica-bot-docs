---
sidebar_position: 6
---

# Optional configuration

## Why is this necessary?

The initial configuration is required for the galactica bot to actually run. This configuration step is optional and enables music commands and mod logs.

## Enabling mod logs

To enable the mod logs system you need to run the `/setmodlogs` bot command inside of Discord with the mode value to `true`. This will change the `modLogsIsEnabled` property of the database to `true`.

### Setting the mod logs channel ID

Since we enabled the mod logs system we need to also specify the `modLogsChannelID` property of the database. This is the channel ID that the mod logs will be sent to. To do so you need to run the `/setmodlogschannelid` bot command and specify the channel ID on the `name` option

## Enabling music commands

If you want to enable music commands, you can do so by running the `/setmusic` bot command and set the mode value to `true`. This will change the `musicIsEnabled` database value to the specified value and hence enabling music commands.
