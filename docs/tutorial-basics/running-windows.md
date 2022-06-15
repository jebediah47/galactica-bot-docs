---
sidebar_position: 5
---

# Running on Windows
Now's the time for Windows! Although small scale applications like bots aren't meant to be run on Windows, if you want to use it, you are free to do so. This will also probably be the easiest process but the commands will still remain the same from the [Linux](running-linux.md) guide.

## Dependencies
First of all you need to install Node.js v16 and TypeScript ***globally***, all of this can be found in the [prerequisites](../intro.mdx) section. To check you Node.js version just run this command:
```bash
node -v
```

## Building the bot
If you have configured the bot now you just need to go to the root dir of the bot and run:

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
  defaultValue="npm"
  values={[
    { label: "npm", value: "npm" },
    { label: "yarn", value: "yarn" },
    { label: "pnpm", value: "pnpm" },
  ]}
>
  <TabItem value="npm">

  ```shell
  npm run build
  ```

  </TabItem>

  <TabItem value="yarn">

  ```shell
  yarn run build
  ```

  </TabItem>

  <TabItem value="pnpm">

  ```shell
  pnpm run build
  ```

  </TabItem>
</Tabs>

to build it, and if you use another package manager change your command accordingly.

## Running the bot
Now for the final step, actually running the thing, you just need to run this command on the root dir of the bot:
```bash
node .\dist\src\main.js
```
and what this will do is that it will run the `main` compiled file of the bot.
