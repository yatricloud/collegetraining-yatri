# Linux User Management - Hands-on for Student User

## 1. Create a User for a Student
To create a new user, use the `useradd` command with the `-m` option to create a home directory.

```bash
sudo useradd -m student
```

## 2. Assign a Password to the User
Set a password for the newly created user:

```bash
sudo passwd student
```
You will be prompted to enter and confirm the new password.

## 3. Change Ownership of Files to the User
If there are files that need to be owned by the `student` user, use the `chown` command:

```bash
sudo chown -R student:student /path/to/files
```

For example, if there is a directory `/home/shared_docs` that should belong to `student`:

```bash
sudo chown -R student:student /home/shared_docs
```

## 4. Verify the Changes
Check the ownership of the files:

```bash
ls -l /home/shared_docs
```

Check the user's details:

```bash
id student
```

Now the `student` user has been created, assigned a password, and given ownership of the specified files. 🚀
