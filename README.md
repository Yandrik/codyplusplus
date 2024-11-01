<div align=center>

# <img src="https://i.imgur.com/T1aoBgL.png" width="64">  Cody++

</div>

# Cody++ README

Cody++ is a VSCode extension that adds some missing features for developers who enjoy [Cody](https://sourcegraph.com/cody).

[![](https://img.shields.io/badge/Chat_with_Cody++-Ask_Cody-%238A16D7?labelColor=%23383838)](https://sourcegraph.com/github.com/mnismt/CodyPlusPlus)
[![X (formerly Twitter) Follow](https://img.shields.io/twitter/follow/CodyPlusPlus)](https://twitter.com/CodyPlusPlus)

## Requirements

- You must have the [Cody](https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai) extension installed in VS Code.

## Installation

You can install the Cody++ extension from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=mnismt.cody-plus-plus)

You can also install the extension from the command line:

```sh
code --install-extension mnismt.cody-plus-plus
```

## Features

- **Add Folder to Cody**:
  - Recursively adds all files in a folder to Cody.
  - You can configure the file extensions to exclude from being added to Cody.
  - You can configure the folders to exclude from being added to Cody.
  - You can configure the maximum number of files allowed before showing a warning message.
- **Add Custom Command**:
  - Add, edit, and remove custom commands from the workspace settings.

## Usage

- **Add Folder to Cody**:
  - Right-click on a folder in the Explorer view.
  - Select `Add folder to Cody` from the context menu.
  - If the folder contains a large number of files, you will be prompted to confirm before proceeding.
  - **Note**: The Cody chat panel must be opened for this feature to work.
- **Add Custom Command**:
  - Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
  - Type `Add New` and select `Add New`.
  - Use the UI to create or edit a custom command.
  - Click `Save` or `Update` to save the changes.

## Demo

### Add a folder

![Add Folder](https://github.com/mnismt/codyplusplus/assets/27861064/726ec181-b33e-484f-bbe3-ceab9d6cdda5)

### Create a custom command

![add-a-command-edited - 01](https://github.com/mnismt/codyplusplus/assets/27861064/d915d3ca-1eea-4dea-b69d-654b0f75d14f)

## Extension Settings

This extension contributes the following settings:

- `codyPlusPlus.fileThreshold`: The maximum number of files allowed before showing a warning message. Default is 15.
- `codyPlusPlus.excludedFileTypes`: List of file extensions to exclude from being added to Cody. Default is [".exe", ".bin"].
- `codyPlusPlus.excludedFolders`: List of folders to exclude from being added to Cody.

To configure this setting in two ways:

1. Using the Settings UI:
    - Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
    - Type `Preferences: Open Settings (UI)` and press Enter.
    - In the search bar, type `Cody Plus Plus`.
    - Adjust the:
      - `File Threshold` setting to your desired value.
      - `Excluded File Types` setting to your desired value.
      - `Excluded Folders` setting to your desired value.

2. Using the `settings.json` file:
    - Add these lines to your `settings.json` file:

        ```json
        "codyPlusPlus.fileThreshold": 15,
        "codyPlusPlus.excludedFileTypes": [".exe", ".bin"]
        "codyPlusPlus.excludedFolders": [".git", "node_modules"]
        ```
