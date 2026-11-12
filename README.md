# Notebook Code Only Collapse

Collapse or expand **only the input** of Code cells in Jupyter notebooks (`.ipynb`). Markdown cells and cell outputs remain visible.

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
code --install-extension notebook-code-only-0.1.0.vsix
```

The extension has no runtime dependencies.

## License

[GNU General Public License v3.0 or later](LICENSE)
