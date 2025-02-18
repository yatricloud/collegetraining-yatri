# Session 3: Lab Setup and Troubleshooting Common Issues

## Duration: 2 Hours

## Managing Multiple Users for Lab Usage

### 1. Setting Up Unique User Accounts for Students in Computer Labs
#### Linux:
- Create user accounts using the `useradd` command:
  ```bash
  sudo useradd -m -s /bin/bash student1
  sudo passwd student1
  ```
- Use a script to create multiple users:
  ```bash
  for i in {1..10}; do sudo useradd -m -s /bin/bash student$i; echo "student$i:password" | sudo chpasswd; done
  ```
- Assign user groups and permissions:
  ```bash
  sudo usermod -aG students student1
  ```

#### Windows:
- Open Command Prompt as Administrator and create a user:
  ```cmd
  net user student1 Password123 /add
  ```
- Using PowerShell to create multiple users:
  ```powershell
  1..10 | ForEach-Object { New-LocalUser -Name "student$_" -Password (ConvertTo-SecureString "Password123" -AsPlainText -Force) -UserMayChangePassword $true -AccountNeverExpires $true }
  ```

### 2. Scheduling Tasks with Cron on Linux for Backup
- Open crontab for editing:
  ```bash
  crontab -e
  ```
- Add a job to back up student data every night at midnight:
  ```bash
  0 0 * * * tar -czf /backup/student_data_$(date +\%F).tar.gz /home/student*
  ```

### 3. Windows Task Scheduler for Automated Tasks
- Open Task Scheduler → Create Basic Task → Set Trigger & Action
- Use PowerShell to create a backup task:
  ```powershell
  $action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "Compress-Archive -Path C:\Users\* -DestinationPath C:\backup\student_data.zip"
  $trigger = New-ScheduledTaskTrigger -Daily -At 12am
  Register-ScheduledTask -TaskName "StudentDataBackup" -Action $action -Trigger $trigger -User "SYSTEM" -RunLevel Highest
  ```

### 4. Managing User Quotas on a Shared Network Storage System
#### Linux:
- Enable quota on the filesystem:
  ```bash
  sudo apt install quota
  sudo mount -o remount,usrquota,grpquota /home
  sudo quotacheck -cug /home
  sudo quotaon /home
  ```
- Assign a quota to a user:
  ```bash
  sudo edquota -u student1
  ```

#### Windows:
- Enable disk quotas:
  - Right-click on the drive → Properties → Quota Tab → Enable Quota Management
  - Set quota limits for each user.

## Troubleshooting Common Issues

### 1. Common Issues with User Permissions and Login Failures
#### Linux:
- Check if the user exists:
  ```bash
  cat /etc/passwd | grep student1
  ```
- Reset a forgotten password:
  ```bash
  sudo passwd student1
  ```
- Check user permissions:
  ```bash
  ls -l /home/student1
  ```
- Change ownership if needed:
  ```bash
  sudo chown student1:student1 /home/student1 -R
  ```

#### Windows:
- Check if the user exists:
  ```cmd
  net user student1
  ```
- Reset a forgotten password:
  ```cmd
  net user student1 newpassword
  ```
- Check user permissions on files:
  ```powershell
  Get-Acl C:\Users\student1
  ```

### 2. Resolving Access Issues and Permissions Errors
#### Linux:
- Check if the home directory exists:
  ```bash
  ls -ld /home/student1
  ```
- Check if the user is locked:
  ```bash
  sudo passwd -S student1
  ```
- Unlock the user if needed:
  ```bash
  sudo passwd -u student1
  ```

#### Windows:
- Check if the user account is disabled:
  ```cmd
  net user student1
  ```
- Enable the user account:
  ```cmd
  net user student1 /active:yes
  ```

### 3. Logs to Check
#### Linux:
- Authentication logs:
  ```bash
  cat /var/log/auth.log | grep student1
  ```

#### Windows:
- Open Event Viewer → Windows Logs → Security
- Use PowerShell to filter logs:
  ```powershell
  Get-EventLog -LogName Security -Newest 10
  ```

## Hands-On Activities
1. **Troubleshooting user login issues**
   - Simulate and resolve login failures.
2. **File access troubleshooting**
   - Modify file permissions and resolve access issues.
3. **Restoring user data**
   - Recover lost files from backups.

