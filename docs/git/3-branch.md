# Git Branches: Purpose and Best Practices

Focus on *why* to branch. Commands are kept minimal (`git checkout`, `git branch`).

---

## 1) What a Branch Is
A branch is a movable pointer to a commit in the DAG. It lets you evolve code in isolation without changing `main` until you are ready.

---

## 2) Why Use Branches
- **Isolation:** Work without breaking `main`.
- **Focus:** One task per branch. Clear scope.
- **Reviewability:** Small PRs are easier to review and revert.
- **Safety:** CI can validate the branch before merge.
- **Parallelism:** Multiple features and fixes progress at once.
- **Release control:** Keep `main` releasable while features bake.

---

## 3) Strategy That Scales
Default to **short‑lived feature branches** off `main`.
- Keep `main` always green and deployable.
- Branch for: `feature/`, `fix/`, `chore/`, `docs/`, `perf/`, `refactor/`.
- Avoid long‑lived branches. They drift and create large conflicts.
- Open PRs early (draft). Get feedback and CI results before finishing.

When needed:
- **release/** branches: stabilize for a release.
- **hotfix/** branches: emergency fixes from the release or `main`.

Keep the model minimal. Add process only if you feel real pain.

---

## 4) Naming Conventions
Use a clear prefix and a ticket ID:
```
feature/<ticket>-<short-slug>
fix/<ticket>-<short-slug>
docs/<ticket>-<short-slug>
```
Examples:
```
feature/1234-login-form
fix/987-null-pointer-on-upload
```

---

## 5) Lifecycle Checklist
1. **Sync**: update local `main` from remote.
2. **Branch**: create from up‑to‑date `main`.
3. **Commit small**: one logical change per commit.
4. **Push early**: avoid hidden work. Enable CI.
5. **PR early**: mark as draft. Ask for review when ready.
6. **Keep it fresh**: regularly sync with `main` to reduce conflicts.
7. **Test**: unit + integration on the branch.
8. **Clean up**: delete the branch after merge.

---

## 6) Protections and Policy (recommended)
- Protect `main`: required status checks, required review, no force‑push.
- Enforce small PRs (e.g., < 300 lines net change when possible).
- Require descriptive branch names and PR titles.
- Block secrets. Scan on push.
- Auto‑delete branches on merge.

---

## 7) Minimal Commands (checkout and branch)
Create a branch and switch to it:
```bash
git checkout -b feature/1234-login-form
# alternative (newer): git switch -c feature/1234-login-form
```

Switch between branches:
```bash
git checkout main
git checkout -  # jump back to previous branch
```

List branches:
```bash
git branch          # local
git branch -a       # local + remote
```

Rename the current branch:
```bash
git branch -m feature/1234-auth-form
```

Track a remote branch (first push):
```bash
git push -u origin feature/1234-login-form
```

Delete a local branch (after merge):
```bash
git branch -d feature/1234-login-form   # safe delete
git branch -D feature/old-spike         # force delete
```

See the current upstream tracking:
```bash
git rev-parse --abbrev-ref --symbolic-full-name @{u}
```


---

## 8) Common Pitfalls and Avoidance
- **Long‑running branches** → keep branches short and sync often.
- **Mixed changes** (feature + refactor) → split into separate branches or commits.
- **Giant PRs** → break down by feature slices.
- **“Works on my machine”** → run the same CI locally with scripts or containers.
- **Binary dumps** in branches → keep large binaries out of Git; use LFS or external storage.
