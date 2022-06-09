---
sidebar_position: 1
---

# Setting up music commands

First of all to enable music commands you need to first enable them on the [config.json](../tutorial-basics/configuring-the-bot).  
After that we need to install the following dependencies  
## @discordjs/opus (better performance)
This npm package requires a C++ compiler, I would recommend the `g++` compiler which is the most popular C++ compiler and runs on almost anything! So if you got any prior compilation error while installing the bot's packages it was probably due to the compilation failure of `@discordjs/opus`, so by installing `g++` and running `npm install` the problem should be fixed.

Here are some guides:  
[Windows GCC installation guide](https://www.youtube.com/watch?v=sXW2VLrQ3Bs)  
[Ubuntu GCC installation guide](https://www.youtube.com/watch?v=38oSfBYn-2Y)  
[Fedora GCC installation guide](https://www.youtube.com/watch?v=O4u7aa7cqUI)  
[Arch Linux GCC installation guide](https://www.youtube.com/watch?v=XgqZq2UYFsU)

Some Linux distros may have different package names for `gcc` & `g++` but most of them are more alike the guides above, the only thing that changes is the package manager command for each distribution.

#### Alternative to @discordjs/opus
The only alternative, which doesn't even come close, is `opusscript` which has worse performance than `@disocrdjs/opus` and is not recommended, the only reason to install `opusscript` would be for hosting the bot on a system which you're unable to install any C++ compiler, but I would still avoid using it. Just make sure after installing the `opusscript` npm package to uninstall `@discordjs/opus` by running:  
```bash
npm uninstall @discordjs/opus
```

## FFmpeg (required!)
FFmpeg is required to be installed on the host system and this can be done pretty easily by following the guide (Windows-only) below  
[Windows guide](https://www.youtube.com/watch?v=IECI72XEox0)

For Linux users just install you distribution's `ffmpeg` package.
