
# Setting Up Security for Exams on Linux

## 1. Limit Access to Shared Folder and Restrict Write Permissions During Exams

### a. Create a shared folder
```bash
sudo mkdir /home/exam_folder
```

### b. Restrict write permissions for the shared folder
```bash
sudo chmod 755 /home/exam_folder
```

### c. Test if permissions are set correctly
- Check permissions using:
```bash
ls -ld /home/exam_folder
```
- You should see something like:
```bash
drwxr-xr-x 2 root root 4096 Feb 17 12:00 /home/exam_folder
```

## 2. Use AppArmor or SELinux for Enhanced Security

### a. Install AppArmor
```bash
sudo apt update
sudo apt install apparmor apparmor-utils
```

### b. Enforce AppArmor security profile
```bash
sudo aa-enforce /etc/apparmor.d/usr.bin.YourApp
```
Replace `YourApp` with the app you want to secure.

### c. Test if AppArmor is enforcing profiles
```bash
sudo apparmor_status
```

### d. Use SELinux (Alternative)
Install SELinux if preferred:
```bash
sudo apt install selinux-utils
```

### e. Test SELinux status
```bash
sestatus
```

## 3. Lock Down Student Accounts and Prevent System Modifications During Exam Times

### a. Lock student accounts
```bash
sudo passwd -l student_username
```

### b. Prevent login by modifying `/etc/passwd`
```bash
sudo usermod -s /sbin/nologin student_username
```

### c. Test if student account is locked
```bash
su - student_username
```

## 4. Additional Measures

### a. Prevent access to certain files during the exam
```bash
sudo mount -o remount,noexec /home/exam_folder
```

### b. Test `noexec` flag
```bash
cd /home/exam_folder
./your_script.sh
```

You should receive a permission denied message if the `noexec` flag is correctly set.

## Troubleshooting: Fixing "This account is currently not available" Error

If you see the message **“This account is currently not available”**, it indicates that the `student_username` account may be missing a home directory or its shell is set to `/sbin/nologin` or another non-interactive shell, preventing login.

### Steps to fix the issue:

#### 1. Check the student_username account details
Use the `grep` command to check the details of the `student_username` account in `/etc/passwd`:
```bash
grep student_username /etc/passwd
```
The output will look something like:
```bash
student_username:x:1001:1001::/home/student_username:/bin/bash
```

- **Home directory**: Ensure the path `/home/student_username` exists. If it does not, create it:
```bash
sudo mkdir /home/student_username
sudo chown student_username:student_username /home/student_username
```

- **Shell**: Make sure the shell is set to a valid one (e.g., `/bin/bash`):
If the shell is set to `/sbin/nologin` or another non-interactive shell, change it to `/bin/bash`:
```bash
sudo usermod -s /bin/bash student_username
```

#### 2. Verify the account is not locked or unavailable
Check the account status to ensure it is unlocked and available for login:
```bash
sudo passwd -S student_username
```
If the account is locked, unlock it:
```bash
sudo passwd -u student_username
```

#### 3. Try to log in again
After making these changes, try switching to the `student_username` account again:
```bash
su - student_username
```

This should resolve the issue. If the problem persists, please share more details.
