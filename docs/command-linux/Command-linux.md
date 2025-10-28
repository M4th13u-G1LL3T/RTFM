# Essential Linux Commands

A compact guide to the most important Linux commands for daily use.

---

## 🧭 1. Navigation and File Management

| Action | Command                   | Description                                            |
|--------|---------------------------|--------------------------------------------------------|
| List files | `ls`, `ls -l`, `ls -a`    | Show directory contents                                |
| Change directory | `cd`, `cd ..`, `cd /`     | Move between folders                                   |
| Show current path | `pwd`                     | Display current directory                              |
| Create a directory | `mkdir`, `mkdir -p`       | Make one or multiple folders                           |
| Remove a directory | `rmdir`, `rm -r` , `rm -f`| Delete folders (recursive with `-r`) (force with `-f`) |
| Copy files | `cp`, `cp -r`             | Copy files or directories                              |
| Move / rename | `mv`                      | Move or rename files                                   |
| Delete a file | `rm`, `rm -f`             | Remove files                                           |

---

## 📄 2. Viewing and Editing Files

| Action | Command | Description |
|--------|----------|-------------|
| View a file | `cat`, `less`, `more` | Read contents quickly |
| Create an empty file | `touch file.txt` | Create a new file |
| Edit a file | `nano`, `vim` | Text editors in terminal |
| Show start / end | `head`, `tail` | Display first or last lines |
| Count lines / words / bytes | `wc -l`, `wc -w`, `wc -c` | Statistics |
| Search text | `grep`, `grep -r`, `grep -i` | Search inside files |
| Find a file | `find`, `locate` | Search by name or pattern |

---

## ⚙️ 3. Permissions and Ownership

| Command | Description |
|----------|-------------|
| `chmod` | Change file permissions (e.g. `chmod 755 script.sh`) |
| `chown` | Change file owner |
| `chgrp` | Change group ownership |
| `ls -l` | Show permissions and ownership |

---

## 📦 4. System and Processes

| Command               | Description |
|-----------------------|-------------|
| `ps`, `ps aux`        | List running processes |
| `top`, `htop`         | Live system monitoring |
| `kill`, `kill -9 PID` | Terminate a process |
| `df -h`               | Disk space usage |
| `du -h`               | Directory size |
| `free -h`             | Memory usage |
| `uptime`              | System uptime |
| `whoami or id`        | Show current user |
| `hostname`            | Display machine name |
| `uname -a`            | Kernel and system info |

---

## 🌐 5. Networking

| Command | Description |
|----------|-------------|
| `ping` | Test connectivity |
| `curl`, `wget` | Download from a URL |
| `ip addr`, `ifconfig` | Network interfaces |
| `netstat`, `ss` | Show open ports |
| `scp` | Copy files via SSH |
| `ssh` | Connect to remote server |

---

## 🔐 6. User Management

| Command | Description |
|----------|-------------|
| `adduser`, `useradd` | Create a user |
| `passwd` | Change password |
| `deluser`, `userdel` | Remove a user |
| `groups` | Show user groups |
| `sudo` | Run with admin privileges |

---

## 🧩 7. Archives and Compression

| Command | Description |
|----------|-------------|
| `tar -cvf`, `tar -xvf` | Create / extract archives |
| `gzip`, `gunzip` | Compress or decompress `.gz` files |
| `zip`, `unzip` | Manage `.zip` archives |

---

## 📚 8. History and Help

| Command | Description |
|----------|-------------|
| `history` | Show command history |
| `!n` | Execute command number *n* from history |
| `man <command>` | Manual page |
| `<command> --help` | Short help |
| `alias` | Create command shortcuts |
| `clear` | Clear the screen |

---

## 🧠 9. Useful Extras

| Command | Description |
|----------|-------------|
| `date`, `cal` | Date / calendar |
| `echo`, `printf` | Display text |
| `env`, `export` | Environment variables |
| `which`, `whereis` | Locate a binary |
| `sudo !!` | Re-run last command with sudo |
| `xargs` | Build and execute command lines |
| `tee` | Display and write output simultaneously |
| `grep`, `awk`, `sed` | Text processing tools |

---

## 🪄 Tips

- Combine commands with `|` (pipe). Example: `ps aux | grep python`
- Redirect output with `>` (overwrite) or `>>` (append).
- Use `man` to learn more: `man ls`, `man grep`, etc.
- Keep scripts in `~/bin` or `/usr/local/bin` for easy execution.

