// Import VS Code API and necessary modules
import * as vscode from 'vscode'
// Import custom command handlers
import { addCustomCommand, editCustomCommand } from './commands/addCustomCommand'
import { addFolderCommand } from './commands/addFolder'
// Import services and views
import { CustomCommandService } from './services/customCommand.service'
import { CustomCommandsTreeView } from './views/CustomCommandsTreeView'

// Function called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
  console.log('Cody++ is now active!')

  // Initialize the singleton service for managing custom commands
  const customCommandService = CustomCommandService.getInstance()

  // Register the "Add Folder" command, which adds all files in a folder to Cody
  const addFolderDisposable = vscode.commands.registerCommand(
    'cody-plus-plus.addFolder',
    addFolderCommand
  )

  // Register the "Add Custom Command" command, which opens a UI to create a custom command
  const addCustomCommandDisposable = vscode.commands.registerCommand(
    'cody-plus-plus.addCustomCommand',
    () => addCustomCommand(context)
  )

  // Register the "Edit Command" command, allowing users to edit existing custom commands
  const editCommandDisposable = vscode.commands.registerCommand(
    'codyPlusPlus.editCommand',
    async (item: any) => editCustomCommand(context, item.commandId)
  )

  // Register the "Delete Command" command, enabling users to delete custom commands
  const deleteCommandDisposable = vscode.commands.registerCommand(
    'codyPlusPlus.deleteCommand',
    async (item: any) => {
      // Prompt the user for confirmation before deleting the command
      const confirmation = await vscode.window.showWarningMessage(
        `Are you sure you want to delete the "${item.commandId}" command?`,
        { modal: true },
        'Yes',
        'No'
      )

      if (confirmation === 'Yes') {
        // Remove the command from the custom command service
        customCommandService.removeCommand(item.commandId)
        // Notify the user that the command was deleted successfully
        vscode.window.showInformationMessage(`Command "${item.commandId}" deleted successfully.`)
      }
    }
  )

  // Create and register the tree view for displaying custom commands in the sidebar
  const customCommandsTreeView = new CustomCommandsTreeView()
  vscode.window.registerTreeDataProvider('customCommands', customCommandsTreeView)

  // Add all disposables to the extension context for proper cleanup on deactivation
  context.subscriptions.push(
    addFolderDisposable,
    addCustomCommandDisposable,
    editCommandDisposable,
    deleteCommandDisposable
  )
}

// Function called when the extension is deactivated
export function deactivate() {
  // Dispose of resources used by the custom command service if it exists
  if (CustomCommandService && CustomCommandService.getInstance()) {
    CustomCommandService.getInstance().disposeFileWatcher()
  }
}
