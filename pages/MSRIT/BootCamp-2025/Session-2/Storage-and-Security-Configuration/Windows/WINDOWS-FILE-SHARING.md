
## **Session 2: Managing Common Storage for Students & Security Configuration**  

### **Windows: Setting up shared folders using Windows File Sharing**  
- **Example:** Right-click on a folder > Properties > Sharing > Share with specific people.  
- Assign unique logins to students and grant them access to the shared folder.  

#### **Steps to Set Up Windows File Sharing:**  
1. **Create a shared folder:**  
   - Right-click on the folder you want to share.
   - Click **Properties** > **Sharing** tab.
   - Click **Share...** and select users who should have access.
2. **Set Permissions:**  
   - Click **Advanced Sharing** > **Permissions**.
   - Add users or groups and assign appropriate permissions (Read/Write).
3. **Enable Network Discovery and File Sharing:**  
   - Go to **Control Panel** > **Network and Sharing Center**.
   - Click **Change advanced sharing settings**.
   - Turn on **Network Discovery** and **File and Printer Sharing**.
4. **Access the Shared Folder:**  
   - Students can access the shared folder by typing `\\your-computer-name\shared-folder` in File Explorer.
5. **Assign Unique Logins:**  
   - Go to **Computer Management** > **Local Users and Groups**.
   - Create unique student accounts and set passwords.
   - Ensure they have permissions to access the shared folder.

---

### **Linux: Setting up shared folders using Samba**  
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
6. **Restart Samba service:**  
   ```bash
   sudo systemctl restart smbd
   ```
7. **Accessing the shared folder from Windows:**  
   - Open File Explorer.
   - In the address bar, type `\\linux-server-ip\SharedFolder`.
   - Enter the Samba username and password when prompted.

---

## **Hands-on:**
- **Set up a shared directory accessible to student users on both Linux (Samba) and Windows.**  
  - Follow the steps above to configure shared folders in both operating systems.
  - Test access from different user accounts to verify permissions.
  - Modify permissions as needed to ensure proper security.