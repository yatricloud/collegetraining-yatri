# **Managing Common Storage for Students & Security Configuration**



---

## **Introduction**  
In a school, college, or university, students often need a common storage area to **share files, submit assignments, and access study materials**. Instead of using external drives or emails, we can set up **a centralized file-sharing system** within the local network (**Intranet**).  

This storage system ensures that:  
✅ **All students can access shared files**  
✅ **Each student has a unique login** for security  
✅ **Permissions are managed properly** (e.g., students cannot delete important files)  

This can be done using:  
- **Linux (Samba)** for cross-platform file sharing  
- **Windows File Sharing** for an easy, built-in solution  

---

## **Intranet-Based File Storage**  

### **What is Intranet-Based Storage?**  
- Intranet is a **private network** used within a school or office.  
- A shared folder is created on a **central computer (server)**.  
- Students **log in using their credentials** to access shared files.  
- Access is **controlled using permissions**, so only **authorized students** can view or edit files.  

---

## **Method 1: Setting Up Shared Folders on Linux Using Samba**  

### **What is Samba?**  
Samba is a tool that allows **Windows and Linux** computers to share files over a local network. It acts as a **bridge** between different operating systems.  

### **Why Use Samba?**  
- Works with both **Windows & Linux**  
- Allows **secure access with passwords**  
- Supports **read/write permissions**  

### **How Samba Works?**  
1. A **shared folder** is created on a Linux server.  
2. Samba is configured to **allow students to access this folder** using their logins.  
3. **Permissions** are set to prevent unauthorized access.  

**Example Usage:**  
- A **teacher uploads assignments** to the shared folder.  
- **Students log in** and download the assignments.  
- **Students submit completed assignments** by uploading them back.  

---

## **Method 2: Using Windows File Sharing**  

### **What is Windows File Sharing?**  
Windows has a built-in feature to **share folders on a network**. This allows **other computers** to access files from a central location.  

### **How Windows File Sharing Works?**  
1. A folder is created and set to **"Shared"** in Windows.  
2. **User permissions** are added to allow or restrict access.  
3. Students access the shared folder from their computers.  

### **Example:**  
- A student accesses **a shared "Study Materials" folder** from their laptop.  
- The student can **read** documents but **cannot delete them**.  
- Only **the teacher** has permission to add or remove files.  

---

## **Security Configuration (Protecting the Shared Storage)**  

Security is important to **prevent unauthorized access or accidental file deletion**. Here’s how we ensure safety:  

### **User Authentication**  
- Every student must use a **username and password** to log in.  
- Unregistered users **cannot access** the shared files.  

### **Read/Write Permissions**  
- **Teachers** can **add, edit, and delete files**.  
- **Students** can **only read and upload** files but **cannot delete anything**.  

### **Backup & Recovery**  
- Important files are backed up regularly to **avoid data loss**.  

---

## **Conclusion**  

- **Intranet-Based File Storage** makes it easy for students to share and access files securely.  
- **Linux (Samba)** is best for schools using both **Windows & Linux computers**.  
- **Windows File Sharing** is simpler for Windows-only environments.  
- **Security is crucial**—each student must have their own login, and permissions must be set correctly.  


