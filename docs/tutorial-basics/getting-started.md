---
sidebar_position: 1
---

# Downloading the bot

## Cloning from git repo
Get the bleeding-edge **(unstable)** version from the git repo by running:
```bash
git clone https://github.com/jebediah47/galactica-bot
```
or you can clone it using [GitHub Desktop](https://desktop.github.com/) (Windows) and for Linux use your distribution's package for `gh-desktop`.

## Downloading stable release
To do so you can go to the [releases page](https://github.com/jebediah47/galactica-bot/releases/) and download the latest version of the bot.  
After that you are going to extract the archive in Windows you can use the regular windows archive manager.
- On Linux you can use tar or unzip, to do so run:

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
  defaultValue="tar"
  values={[
    { label: "tar", value: "tar" },
    { label: "unzip", value: "unzip" },
  ]}
>
  <TabItem value="tar">

  ```shell
  tar -xf galactica-bot-<VERSION>.tar.gz
  ```

  </TabItem>

  <TabItem value="unzip">

  ```shell
  unzip galactica-bot-<VERSION>.zip
  ```

  </TabItem>
</Tabs>

A disadvantage of using stable versions is that you're not going to receive the latest and greatest that galactica offers.
