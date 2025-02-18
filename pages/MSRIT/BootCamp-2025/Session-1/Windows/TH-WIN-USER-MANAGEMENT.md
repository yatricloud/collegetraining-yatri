# **Corporate Training Guide: Linux & Windows User Management (Easy Explanation)**  
## **Session 1: Introduction to System Administration & User Management (Linux & Windows)**  
**Duration:** 2 Hours  
**Focus:** Linux & Windows User Management  

---

## **What is User Management?**  
Both Linux and Windows are multi-user systems, which means multiple people can use the same computer or server at the same time. To manage these users, administrators need to:  
✅ **Create users** – Add new users to the system.  
✅ **Manage passwords & directories** – Secure user accounts and assign them a home folder.  
✅ **Modify users** – Change user information, permissions, or settings.  
✅ **Delete users** – Remove users when they are no longer needed.  
✅ **Change ownership** – Transfer file control from one user to another.  

Think of a company where employees need **user accounts** to access their computers. The **system administrator (you)** is responsible for creating, modifying, and deleting these accounts securely.  

---

## **Linux User Management**  
### **1. Creating Users in Linux**  
To add a new user, we use the **useradd** command.  

### **Command to Create a User:**  
```bash
sudo useradd username
```
Example:  
```bash
sudo useradd raj
```
This will create a new user named **raj**.  

### **Setting a Password for a User**  
```bash
sudo passwd username
```
Example:  
```bash
sudo passwd raj
```

### **Assigning Default Directories & User Permissions**  
Modify a user’s home directory:  
```bash
sudo useradd -d /custom_directory username
```
Example:  
```bash
sudo useradd -d /data/raj raj
```

### **Deleting Users in Linux**  
```bash
sudo userdel username
```
Example:  
```bash
sudo userdel raj
```

To delete a user and their home directory:  
```bash
sudo userdel -r username
```
Example:  
```bash
sudo userdel -r raj
```

### **Changing Ownership in Linux**  
```bash
sudo chown newuser filename
```
Example:  
```bash
sudo chown raj file1.txt
```

---

## **Windows User Management**  
### **1. Creating Users in Windows**  
Users can be created through **Control Panel** or **PowerShell**.  

#### **Using PowerShell to Create a User**  
```powershell
New-LocalUser -Name "student1" -Password (ConvertTo-SecureString "password" -AsPlainText -Force)
```
This command creates a new user named **student1** with a password.  

### **Adding Users to Groups in Windows**  
To add a user to a group:  
```powershell
Add-LocalGroupMember -Group "Users" -Member "student1"
```

### **2. Deleting Users in Windows**  
Users can be deleted through **Control Panel** or **PowerShell**.  

#### **Using PowerShell to Delete a User**  
```powershell
Remove-LocalUser -Name "student1"
```
This removes **student1** from the system.  

### **3. Changing Ownership and Permissions in Windows**  
To modify file/folder ownership and permissions:  

#### **Command to Change Ownership**  
```cmd
takeown /f "file_path" /r /d Y
```
This gives ownership of the file to the current user.  

#### **Command to Change Permissions**  
```cmd
icacls "file_path" /grant student1:(F)
```
This grants **student1** full access to the file.  

---

## **Hands-on Exercise**  
### **Linux:**  
1. **Create a new student user:**  
   ```bash
   sudo useradd student
   ```
2. **Set a password for the student user:**  
   ```bash
   sudo passwd student
   ```
3. **Create a test file and assign ownership to the student:**  
   ```bash
   sudo touch /home/student/testfile.txt
   sudo chown student /home/student/testfile.txt
   ```

### **Windows:**  
1. **Create a user using PowerShell:**  
   ```powershell
   New-LocalUser -Name "student1" -Password (ConvertTo-SecureString "password" -AsPlainText -Force)
   ```
2. **Add user to a group:**  
   ```powershell
   Add-LocalGroupMember -Group "Users" -Member "student1"
   ```
3. **Change file ownership and permissions:**  
   ```cmd
   takeown /f "C:\example\file.txt" /r /d Y
   icacls "C:\example\file.txt" /grant student1:(F)
   ```

---

## **Summary**  
| Task | Linux Command | Windows Command |
|------|--------------|----------------|
| Create a new user | `sudo useradd username` | `New-LocalUser -Name "username" -Password (ConvertTo-SecureString "password" -AsPlainText -Force)` |
| Set a password | `sudo passwd username` | Set during user creation |
| Add user to a group | `sudo usermod -g groupname username` | `Add-LocalGroupMember -Group "GroupName" -Member "username"` |
| Delete a user | `sudo userdel username` | `Remove-LocalUser -Name "username"` |
| Delete a user and home directory | `sudo userdel -r username` | Not applicable (Windows keeps user profiles) |
| Change file ownership | `sudo chown newuser filename` | `takeown /f "file_path" /r /d Y` |
| Change file permissions | `chmod u+rwx filename` | `icacls "file_path" /grant username:(F)` |

This session gives a **strong foundation in user management** for both Linux and Windows system administration. 🚀
