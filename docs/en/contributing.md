# Contributing

Workflow:

1. Fork & branch.
2. Add or translate content.
3. Run `mkdocs serve` locally.
4. Submit PR with clear summary.

Guidelines:
- Prefer concise technical language.
- Include parameter context (material, thickness, gas).
- Reference sources for theoretical claims.
- For images list camera settings if relevant.

Help translate remaining pages — note progress in PR description.

## Git Troubleshooting

If you encounter a "file already exists" error when trying to create or commit a file on GitHub, it means GitHub already has an entry at the exact path/name you're trying to create — you tried to create a file that conflicts with an existing file (or directory) in the repo. Here are the likely causes and simple ways to fix it.

### Quick checks (fastest)
- Refresh the repo page — someone else may have added the file since you opened the editor.
- Search the repository for the same filename/path (top-left "Go to file" or the repo tree) to confirm it exists.

### Fix options (pick one)

1) **Edit the existing file (recommended when you want to change that same file)**
   - On GitHub: navigate to the existing file -> click the pencil (Edit this file) -> paste your changes -> Commit changes (directly to main or in a new branch).
   - This avoids creating a new file with the same name.

2) **Create the file under a different name/path (if you intended a different file)**
   - Rename the file you're adding (e.g., add a suffix or move it into a subfolder).
   - Commit again.

3) **Create a new branch & make a PR (if you prefer a review workflow)**
   - In the web editor choose "Create a new branch for this commit and start a pull request" and commit. If the file still conflicts, use option 1 or rename.

4) **Use Git locally (useful for more control, fixing case-only renames, or file-vs-directory conflicts)**
   - Clone repo and work locally:
     - `git clone <repo_url>`
     - `cd <repo>`
     - `git checkout -b fix/your-change`
     - Confirm the existing file/path: `ls -la <path>` or `git ls-tree -r --name-only HEAD | grep 'path/filename'`
   - If you want to replace the existing file:
     - edit the existing file (or remove and add the new one):
       - `git rm path/to/file` (only if you want to delete)
       - `git add path/to/newfile`
       - `git commit -m "Your message"`
   - If you only want to rename a file that differs by case (case-only rename):
     - `git mv oldname tmpname`
     - `git mv tmpname NewName`
     - `git commit -m "Rename file to NewName"`
   - Push & open PR:
     - `git push -u origin fix/your-change`

### Special cases to watch for
- **File vs directory conflict**: you cannot create a file named X if there is already a directory named X at the same path. Rename one of them.
- **Case-insensitive local FS (macOS/Windows)**: case-only renames must use a temporary name (see git mv tmpname trick above).
- **Race condition**: if someone merged a change with that file after you opened the web editor, refresh and either edit the existing file or rename yours.
