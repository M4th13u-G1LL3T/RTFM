# Git: Merge vs Rebase — How They Work and Key Differences

> Goal: understand **what happens to history**, when to use each, and the consequences.

---

## 1) Minimal Mental Model

Simplified history:

```
main:    A──B──C
               \
feature:        D──E
```

You want to integrate `feature` into `main` **or** update `feature` with the latest `main`.

---

## 2) Merge

### 2.1. Fast-Forward Merge
If `main` hasn’t moved since the feature branch was created, Git simply advances the pointer.

```
Before:  main: A──B──C
                 \
feature:          D──E

After (FF):
main: A──B──C──D──E
```

Command:
```bash
git checkout main
git merge feature            # fast-forward if possible
```

Characteristics:
- No merge commit is created.
- History remains unchanged; only the pointer moves.

### 2.2. Three-Way Merge (merge commit)
If `main` has new commits, Git creates a merge commit `M` with **two parents**.

```
Before:
main:    A──B──C──F
               \    \
feature:        D──E  \
                     M  ← merge commit
```

Command:
```bash
git checkout main
git merge feature            # creates M if no FF possible
```

Useful options:
```bash
git merge --no-ff feature    # always create a merge commit
git merge --ff-only feature  # fail if FF not possible
git merge --abort            # cancel ongoing merge
```

Advantages:
- **Does not rewrite** existing commits.
- Preserves the true sequence of events.
- Safe for shared branches.

Limitations:
- **Non-linear** history.
- Can produce many merge commits in active repos.

---

## 3) Rebase

### 3.1. Principle
Rewrites **local commits** by replaying them on top of another base. Commit IDs change.

Common use case: **update your feature branch with `main`** without adding a merge commit.

```
Before:
main:    A──B──C──F
               \
feature:        D──E

After rebase of feature onto main:
feature:              D'──E'   (rebased on top of F)
```

Command:
```bash
git checkout feature
git fetch origin
git rebase origin/main       # replay D,E on top of F
# resolve conflicts if needed, then:
git rebase --continue
# to abort:
git rebase --abort
```

Advantages:
- **Linear** and clean history.
- Easier for `git blame` and `git bisect`.

Limitations:
- **Rewrites history**. Never rebase shared branches.
- Requires force-push after rebasing published commits.

Safe push:
```bash
git push --force-with-lease
```

### 3.2. Interactive Rebase (cleanup)
Squash, reorder, or rename commits:
```bash
git rebase -i origin/main
# pick/squash/reword/fixup
```

Useful configs:
```bash
git config --global pull.rebase true
git config --global rebase.autoStash true
git config --global rerere.enabled true  # reuse conflict resolutions
```

---

## 4) Merge vs Rebase: Key Differences

| Topic | Merge | Rebase |
|-------|--------|--------|
| Concept | Combine two histories | Replay commits onto a new base |
| Commit integrity | Preserved | Rewritten (new IDs) |
| History shape | Non-linear | Linear |
| Chronological context | Preserved | Simplified |
| Risk for collaborators | Low | High if shared |
| Workflow visibility | Shows real merges and PRs | Clean, minimal history |

**Rule of thumb:** *Never rebase a branch that others have already pulled.*

---

## 5) How to Choose

- Want to **preserve the true team workflow**? → **Merge**.
- Want a **clean, linear history** before integration? → **Rebase locally**, then fast-forward merge.
- Shared branch in progress? → **Merge** to avoid rewriting others’ work.
- Out-of-date feature branch before merging? → **Rebase** on `main`, resolve conflicts, then merge FF.

Quick decision guide:
```
Solo feature work → rebase locally → fast-forward merge
Shared or hotfix branch → merge
Team policy "linear history" → rebase + FF-only on main
```

---

## 6) Practical Recipes

### 6.1. Update a feature branch with main
**Option A: merge**
```bash
git checkout feature
git fetch origin
git merge origin/main
# resolve, commit the merge, continue working
```

**Option B: rebase**
```bash
git checkout feature
git fetch origin
git rebase origin/main
# resolve conflicts → git add … → git rebase --continue
```

### 6.2. Integrate feature into main
**Fast-forward merge**:
```bash
git checkout main
git fetch origin
git merge --ff-only feature
git push
```

**Keep a merge commit for traceability**:
```bash
git checkout main
git merge --no-ff feature
git push
```

**Squash merge** to keep main clean:
```bash
git checkout main
git merge --squash feature
git commit -m "Feature X (squash)"
git push
```

### 6.3. Clean up commits
```bash
git rebase -i origin/main
# squash and reword to reduce to a few meaningful commits
```

---

## 7) Conflict Handling

During merge:
```bash
# edit files with <<<<<<< ======= >>>>>> markers
git add <files>
git commit         # finish merge
# or git merge --abort
```

During rebase:
```bash
git add <files>
git rebase --continue
# or git rebase --abort
```

Tip: `git rerere` remembers past resolutions for reuse.

---

## 8) Undo

- During merge: `git merge --abort`
- During rebase: `git rebase --abort`
- Afterward: `git reflog`, then
```bash
git reset --hard HEAD@{1}
```

---

## 9) TL;DR

- **Merge** → safe, preserves full history, adds merge commits.
- **Rebase** → linear, rewrites history, best for local cleanup.
- Simple policy: rebase locally, fast-forward merge to `main`. Never rebase shared branches.