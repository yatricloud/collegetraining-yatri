# Setting Up a Shared Directory for Student Users Using Samba on Linux

## Step 1: Install Samba
```bash
sudo apt update && sudo apt install samba -y  # For Debian/Ubuntu
sudo yum install samba -y  # For RHEL/CentOS
```

## Step 2: Create a Shared Directory
```bash
sudo mkdir -p /srv/samba/students
sudo chmod 777 /srv/samba/students  # Grant read/write access to all users
```

## Step 3: Configure Samba
Edit the Samba configuration file:
```bash
sudo nano /etc/samba/smb.conf
```
Add the following at the end of the file:
```ini
[students]
   path = /srv/samba/students
   browseable = yes
   writable = yes
   guest ok = no
   create mask = 0775
   directory mask = 0775
   valid users = @students
```
Save and exit (`Ctrl + X`, `Y`, `Enter`).

## Step 4: Create a Student Group and Add Users
```bash
sudo groupadd students
sudo useradd -m -G students student1
sudo useradd -m -G students student2
sudo passwd student1  # Set password for student1
sudo passwd student2  # Set password for student2
```

## Step 5: Add Users to Samba
```bash
sudo smbpasswd -a student1
sudo smbpasswd -a student2
sudo smbpasswd -e student1  # Enable user for Samba
sudo smbpasswd -e student2  # Enable user for Samba
```

## Step 6: Restart Samba Service
```bash
sudo systemctl restart smbd
sudo systemctl enable smbd
```

## Step 7: Allow Firewall Rules (if applicable)
```bash
sudo ufw allow samba  # For UFW (Ubuntu/Debian)
sudo firewall-cmd --permanent --add-service=samba  # For Firewalld (RHEL/CentOS)
sudo firewall-cmd --reload
```

## Step 8: Test the Shared Folder Access
### From Linux Client:
```bash
smbclient -L //<server-IP> -U student1
smbclient //<server-IP>/students -U student1
```

### From Windows Client:
1. Open **Run** (`Win + R`), type `\\<server-IP>\students`, and press **Enter**.
2. Enter the username (`student1`) and password.
3. Access the shared directory.

## Step 9: Verify Permissions
On the Samba server, check permissions:
```bash
ls -ld /srv/samba/students
getfacl /srv/samba/students
```
Ensure student users can create, modify, and delete files within the shared folder.

## Step 10: Troubleshooting
- Restart Samba if access issues occur: `sudo systemctl restart smbd`
- Check Samba logs: `sudo tail -f /var/log/samba/log.smbd`
- Verify user authentication: `smbpasswd -L`

---
This completes the setup of a shared Samba directory for student users! 🚀
