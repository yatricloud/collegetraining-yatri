# Linux User Management

## Creating Users in Linux
Linux allows system administrators to create and manage users with various commands. Below are the key commands used for user management.

### 1. `useradd` - Creating a New User
The `useradd` command is used to create a new user account in Linux.

#### Basic Syntax:
```bash
sudo useradd <username>
```

#### Explanation:
- `sudo` – Runs the command with administrator privileges.
- `useradd` – The command used to add a new user.
- `<username>` – Replace with the actual username you want to create.

#### Example:
```bash
sudo useradd yatharth
```
This will create a new user named `yatharth`.

### 2. Setting a Password with `passwd`
After creating a user, you need to set a password using the `passwd` command.

#### Syntax:
```bash
sudo passwd <username>
```

#### Example:
```bash
sudo passwd yatharth
```
After running this command, the system will prompt you to enter and confirm the new password.

### 3. `id` - Display User ID and Group ID
The `id` command shows the user ID (UID), group ID (GID), and other associated group IDs.

#### Example:
```bash
id yatharth
```

### 4. `whoami` - Display the Current Logged-in User
```bash
whoami
```

### 5. `groups` - Show Groups of a User
```bash
groups yatharth
```

### 6. `usermod` - Modifying User Accounts
The `usermod` command allows you to modify user properties like home directory, shell, and group.

# Linux User Management

## Creating Users in Linux
Linux allows system administrators to create and manage users with various commands. Below are the key commands used for user management.

### 1. `useradd` - Creating a New User
The `useradd` command is used to create a new user account in Linux.

#### Basic Syntax:
```bash
sudo useradd <username>
```

#### Explanation:
- `sudo` – Runs the command with administrator privileges.
- `useradd` – The command used to add a new user.
- `<username>` – Replace with the actual username you want to create.

#### Example:
```bash
sudo useradd yatharth
```
This will create a new user named `yatharth`.

### 2. Setting a Password with `passwd`
After creating a user, you need to set a password using the `passwd` command.

#### Syntax:
```bash
sudo passwd <username>
```

#### Example:
```bash
sudo passwd yatharth
```
After running this command, the system will prompt you to enter and confirm the new password.

### 3. `id` - Display User ID and Group ID
The `id` command shows the user ID (UID), group ID (GID), and other associated group IDs.

#### Example:
```bash
id yatharth
```

### 4. `whoami` - Display the Current Logged-in User
```bash
whoami
```

### 5. `groups` - Show Groups of a User
```bash
groups yatharth
```

### 6. `usermod` - Modifying User Accounts
The `usermod` command allows you to modify user properties like home directory, shell, and group.

#### Change Home Directory:
```bash
sudo usermod -d /home/customhome yatharth
```
This sets `/home/customhome` as the home directory for `yatharth`.

#### Change Username:
```bash
sudo usermod -l newyatharth yatharth
```
This renames `yatharth` to `newyatharth`.

#### Add User to a Group:
```bash
sudo usermod -aG sudo yatharth
```
This adds `yatharth` to the `sudo` group (granting administrative privileges).

---

## Assigning Default Directories and User Permissions

### 1. Default Home Directory
By default, new users get a home directory under `/home/<username>`. To specify a custom home directory:
```bash
sudo useradd -m -d /custom/home yatharth
```
The `-m` flag ensures that the directory is created if it doesn’t exist.

### 2. Setting User Permissions
Linux assigns default file and directory permissions using the `chmod` and `chown` commands.

#### Change File Ownership:
```bash
sudo chown yatharth:yatharth /home/yatharth
```
This assigns ownership of `/home/yatharth` to the user `yatharth`.

#### Change File Permissions:
```bash
sudo chmod 700 /home/yatharth
```
This ensures only `yatharth` has access to their home directory.

---

## Managing Groups in Linux

### 1. Show All Groups
```bash
getent group
```
OR
```bash
cat /etc/group
```

### 2. Show Groups of a Specific User
```bash
groups yatharth
```
OR
```bash
id yatharth
```

### 3. Create a New Group
```bash
sudo groupadd developers
```

### 4. Create a Group with a Specific GID
```bash
sudo groupadd -g 1050 testers
```

### 5. Add a User to a Group
```bash
sudo usermod -aG developers yatharth
```

### 6. Remove a User from a Group
```bash
sudo gpasswd -d yatharth developers
```

### 7. Delete a Group
```bash
sudo groupdel testers
```

### 8. Change a User’s Primary Group
```bash
sudo usermod -g developers yatharth
```

---

## Deleting Users in Linux
To remove users, use the `userdel` command.

### 1. Basic User Deletion
```bash
sudo userdel yatharth
```
This deletes the user `yatharth` but keeps their home directory and files.

### 2. Delete User and Home Directory
```bash
sudo userdel -r yatharth
```
The `-r` flag removes the home directory and all user-related files.

### 3. Remove a User from a Group
```bash
sudo gpasswd -d yatharth sudo
```
This removes `yatharth` from the `sudo` group.

---

## Changing Ownership in Linux
Ownership of files and directories can be changed using `chown`.

### 1. Change File Ownership
```bash
sudo chown yatharth /var/www/html/index.html
```
This makes `yatharth` the owner of `index.html`.

### 2. Change Group Ownership
```bash
sudo chown :developers /var/www/html/index.html
```
This changes the group ownership to `developers`.

### 3. Change Both Owner and Group
```bash
sudo chown yatharth:developers /var/www/html/index.html
```
This assigns `yatharth` as the owner and `developers` as the group.

### 4. View Ownership and Permissions
```bash
ls -l /var/www/html/index.html
```
This displays file ownership and permission details.

---

#### Change Home Directory:
```bash
sudo usermod -d /home/customhome yatharth
```
This sets `/home/customhome` as the home directory for `yatharth`.

#### Change Username:
```bash
sudo usermod -l newyatharth yatharth
```
This renames `yatharth` to `newyatharth`.

#### Add User to a Group:
```bash
sudo usermod -aG sudo yatharth
```
This adds `yatharth` to the `sudo` group (granting administrative privileges).

---

## Assigning Default Directories and User Permissions

### 1. Default Home Directory
By default, new users get a home directory under `/home/<username>`. To specify a custom home directory:
```bash
sudo useradd -m -d /custom/home yatharth
```
The `-m` flag ensures that the directory is created if it doesn’t exist.

### 2. Setting User Permissions
Linux assigns default file and directory permissions using the `chmod` and `chown` commands.

#### Change File Ownership:
```bash
sudo chown yatharth:yatharth /home/yatharth
```
This assigns ownership of `/home/yatharth` to the user `yatharth`.

#### Change File Permissions:
```bash
sudo chmod 700 /home/yatharth
```
This ensures only `yatharth` has access to their home directory.

---

## Deleting Users in Linux
To remove users, use the `userdel` command.

### 1. Basic User Deletion
```bash
sudo userdel yatharth
```
This deletes the user `yatharth` but keeps their home directory and files.

### 2. Delete User and Home Directory
```bash
sudo userdel -r yatharth
```
The `-r` flag removes the home directory and all user-related files.

### 3. Remove a User from a Group
```bash
sudo gpasswd -d yatharth sudo
```
This removes `yatharth` from the `sudo` group.

---

## Changing Ownership in Linux
Ownership of files and directories can be changed using `chown`.

### 1. Change File Ownership
```bash
sudo chown yatharth /var/www/html/index.html
```
This makes `yatharth` the owner of `index.html`.

### 2. Change Group Ownership
```bash
sudo chown :developers /var/www/html/index.html
```
This changes the group ownership to `developers`.

### 3. Change Both Owner and Group
```bash
sudo chown yatharth:developers /var/www/html/index.html
```
This assigns `yatharth` as the owner and `developers` as the group.

### 4. View Ownership and Permissions
```bash
ls -l /var/www/html/index.html
```
This displays file ownership and permission details.

---

