# **Corporate Training Guide: Linux & Windows User Management (Easy Explanation)**  

## **Purpose:**  
This guide is designed to help IT administrators and trainers set up and manage user accounts and shared storage on Linux and Windows systems efficiently. By following these steps, organizations can ensure secure and structured access control for users, particularly students in an educational environment.  

## **Session 1: Introduction to System Administration & User Management (Linux & Windows)**  
**Duration:** 2 Hours  
**Focus:** Linux & Windows User Management  

---  

## **Session 2: Managing Common Storage for Students & Security Configuration**  
**Duration:** 2 Hours  

### **Intranet-Based File Storage:**  
#### **Overview:**  
- How to set up shared folders on the local network (Intranet), accessible by all students with unique logins.  
- **Linux:** Configure Samba for file sharing on the intranet.  

### **Why Use Intranet-Based File Storage?**  
- Provides a secure and controlled environment for students to access and share files.  
- Eliminates dependency on external cloud storage, reducing security risks.  
- Enhances collaboration and ensures easy monitoring of access and file changes.  

#### **Basic Samba Configuration:**  
1. **Install Samba:**  
   ```bash
   sudo apt update
   sudo apt install samba
   ```  
2. **Create a shared directory:**  
   ```bash
   sudo mkdir -p /srv/samba/shared
   sudo chmod 777 /srv/samba/shared
   ```  
3. **Edit Samba configuration file:**  
   ```bash
   sudo nano /etc/samba/smb.conf
   ```  
   Add the following lines at the end:  
   ```
   [SharedFolder]
   path = /srv/samba/shared
   browseable = yes
   writable = yes
   guest ok = no
   valid users = @students
   ```  
4. **Create a Samba user group:**  
   ```bash
   sudo groupadd students
   ```  
5. **Add students to the group and set Samba password:**  
   ```bash
   sudo usermod -aG students student1
   sudo smbpasswd -a student1
   ```  
   If you get an error like `usermod: user 'student1' does not exist`, create the user first:  
   ```bash
   sudo useradd -m student1
   sudo passwd student1
   ```  
   Then re-run the `usermod` and `smbpasswd` commands.  
6. **Restart Samba service:**  
   ```bash
   sudo systemctl restart smbd
   ```  

### **Testing Samba Configuration:**  
1. **Verify Samba Service:**  
   ```bash
   sudo systemctl status smbd
   ```  
2. **Check Shared Folder Permissions:**  
   ```bash
   ls -ld /srv/samba/shared
   ```  
3. **Test Access from Another System:**  
   - On Windows, open File Explorer and enter `\\<server-ip>\SharedFolder` in the address bar.
   - On Linux, use the `smbclient` command:
     ```bash
     smbclient -U student1 -L //<server-ip>/SharedFolder
     ```  

By following these steps, administrators can ensure smooth and secure user and storage management for students.

