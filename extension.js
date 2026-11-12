const vscode = require('vscode');

async function changeCodeInputs(collapse) {
  const editor = vscode.window.activeNotebookEditor;
  if (!editor) {
    vscode.window.showWarningMessage('Abre y enfoca un notebook (.ipynb) primero.');
    return;
  }
  const cells = editor.notebook.getCells();
  const ranges = [];
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].kind === vscode.NotebookCellKind.Code) {
      ranges.push({ start: i, end: i + 1 });
    }
  }
  if (!ranges.length) return;
  const command = collapse
    ? 'notebook.cell.collapseCellInput'
    : 'notebook.cell.expandCellInput';
  try {
    // VS Code's notebook multi-cell commands accept a document URI and cell ranges.
    await vscode.commands.executeCommand(command, {
      document: editor.notebook.uri,
      ranges
    });
  } catch (error) {
    vscode.window.showErrorMessage(`No se pudo actualizar el notebook: ${error.message}`);
  }
}

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand('notebookCodeOnly.collapse', () => changeCodeInputs(true)),
    vscode.commands.registerCommand('notebookCodeOnly.expand', () => changeCodeInputs(false))
  );
}
module.exports = { activate };
