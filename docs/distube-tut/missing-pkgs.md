---
sidebar_position: 2
---

# Troubleshooting

If you get an error of missing packages, then there is a high chance of prior compilation error, to fix this issue:  
Delete the `node_modules` folder and then run:

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
  npm install
  ```

  </TabItem>

  <TabItem value="yarn">

  ```shell
  yarn install
  ```

  </TabItem>

  <TabItem value="pnpm">

  ```shell
  pnpm install
  ```

  </TabItem>
</Tabs>

With this, the issue should be hopefully fixed. If you encounter any other errors open an issue on [`GitHub`](https://github.com/jebediah47/galactica-bot)