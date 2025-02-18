# **Corporate Training Guide: Linux & Windows User Management (Easy Explanation)**  
## **Session 1: Introduction to System Administration & User Management (Linux & Windows)**  
**Duration:** 2 Hours  
**Focus:** Linux & Windows User Management  

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
4. **Create a user in Windows and assign proper file/folder permissions to that user:**  
   ```powershell
   New-LocalUser -Name "student2" -Password (ConvertTo-SecureString "password123" -AsPlainText -Force)
   Add-LocalGroupMember -Group "Users" -Member "student2"
   takeown /f "C:\example\folder" /r /d Y
   icacls "C:\example\folder" /grant student2:(M)
   ```
