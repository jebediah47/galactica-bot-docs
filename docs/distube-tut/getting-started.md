---
sidebar_position: 1
---

# Setting up music commands

## Note for Docker users

The following configuration applies only for those whi use a regular setup, the `Dockerfile` will automatically install `ffmpeg` in the build procedure, there's no need to install ffmpeg yourself.

## Note for everyone
First of all you need to enable the music commands as listed the the [Extra configuration](../tutorial-basics/extra-config.md#enabling-music-commands) guide.  
After that we need to install the following dependencies  

## @discordjs/opus (better performance)

This npm package requires a C++ compiler, I would recommend the `g++` compiler which is the most popular C++ compiler and runs on almost anything! So if you got any prior compilation error while installing the bot's packages it was probably due to the compilation failure of `@discordjs/opus`, so by installing `g++` and running `npm install` the problem should be fixed.

Here are some guides:  
[Windows GCC installation guide](https://www.youtube.com/watch?v=sXW2VLrQ3Bs)  
[Ubuntu GCC installation guide](https://www.youtube.com/watch?v=38oSfBYn-2Y)  
[Fedora GCC installation guide](https://www.youtube.com/watch?v=O4u7aa7cqUI)  
[Arch Linux GCC installation guide](https://www.youtube.com/watch?v=XgqZq2UYFsU)

Some Linux distros may have different package names for `gcc` & `g++` but most of them are more alike the guides above, the only thing that changes is the package manager command for each distribution.

### Alternative to @discordjs/opus

The only alternative, which doesn't even come close, is `opusscript` which has worse performance than `@disocrdjs/opus` and is not recommended, the only reason to install `opusscript` would be for hosting the bot on a system which you're unable to install any C++ compiler, but I would still avoid using it. Just make sure after installing the `opusscript` npm package to uninstall `@discordjs/opus` by running:

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
  npm install opusscript
  ```

  </TabItem>

  <TabItem value="yarn">

  ```shell
  yarn add opusscript
  ```

  </TabItem>

  <TabItem value="pnpm">

  ```shell
  pnpm add opusscript
  ```

  </TabItem>
</Tabs>

## FFmpeg (required!)

FFmpeg is required to be installed on the host system and this can be done pretty easily by following the guide (Windows-only) below  
[Windows guide](https://www.youtube.com/watch?v=IECI72XEox0)

For Linux users just install you distribution's `ffmpeg` package.
