# Collapse Code Only

![Collapse Code Only icon](media/icon.png)

**Collapse Code Only** is a Visual Studio Code extension for Jupyter notebooks (`.ipynb`). It collapses or expands **only the input area of Code cells** across the active notebook, while keeping Markdown cells and cell outputs visible. It is useful for reviewing notebook results or Markdown documentation without losing the structure of the notebook.

![VS Code version](https://img.shields.io/badge/VS%20Code-%5E1.90.0-007ACC?logo=visualstudiocode&logoColor=white)
![License](https://img.shields.io/badge/license-GPL--3.0--or--later-blue)

## Features

- Collapse every Code cell input in the active notebook.
- Expand every Code cell input in the active notebook.
- Keep Markdown cells and outputs unchanged.

## Usage

Open a notebook and focus its editor, then use the Command Palette:

- `Notebook: Collapse Code Cell Inputs Only`
- `Notebook: Expand Code Cell Inputs Only`

Default shortcuts on Linux and Windows:

| Action | Shortcut |
| --- | --- |
| Collapse code inputs | `Ctrl+Alt+Shift+[` |
| Expand code inputs | `Ctrl+Alt+Shift+]` |

Keyboard shortcuts can be changed in VS Code's **Keyboard Shortcuts** settings.

## Development

1. Open this folder in VS Code.
2. Press **F5** to start an Extension Development Host.
3. Open and focus any `.ipynb` notebook in the new window.
4. Run either command from the Command Palette.

## Notes and limitations

- This extension uses the internal VS Code commands `notebook.cell.collapseCellInput` and `notebook.cell.expandCellInput`, with `{ document, ranges }` arguments. Those contracts may change in future VS Code releases.
- It does not modify `.ipynb` files.

## Package and install locally

```bash
npm install -g @vscode/vsce
vsce package --no-dependencies
code --install-extension collapse-code-only-0.2.0.vsix
```

The extension has no runtime dependencies.

## License

[GNU General Public License v3.0 or later](LICENSE)
