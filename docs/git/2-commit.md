# Basic Git Workflow: Add, Commit, and Push

## 1. Initialize a Repository (if needed)
If you haven't initialized your repository yet:
```bash
git init
```
This creates a local `.git` folder that tracks all versioning data.

If you already cloned a repository from GitHub, skip this step.

---

## 2. Stage Changes (Add Files)
Add specific files:
```bash
git add filename.txt
```

Add all modified and new files:
```bash
git add .
```
> `.` means "add everything in the current directory".

To check what’s staged:
```bash
git status
```

---

## 3. Commit Changes
A commit saves the current staged changes with a message describing them.

```bash
git commit -m "Describe what you changed"
```

Example:
```bash
git commit -m "Fix typo in README and update SSH section"
```

To see your commit history:
```bash
git log --oneline
```

---

## 4. Push to Remote Repository
Send your local commits to the remote repository (e.g. GitHub):
```bash
git push
```

If it's your first push, you may need to specify the branch and remote:
```bash
git push -u origin main
```
> `-u` links your local branch to the remote one so future `git push` commands work without arguments.

---

## 5. Common Useful Commands
Check the current branch and status:
```bash
git status
git branch
```

Undo staged but uncommitted changes:
```bash
git restore --staged filename.txt
```

View differences before committing:
```bash
git diff
```

---

## 6. Summary
1. `git add .` — Stage changes
2. `git commit -m "Message"` — Commit changes
3. `git push` — Send changes to GitHub

Keep commits clear and atomic (one purpose per commit).