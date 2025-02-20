
## **Session 2: Managing Common Storage for Students & Security Configuration**  

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