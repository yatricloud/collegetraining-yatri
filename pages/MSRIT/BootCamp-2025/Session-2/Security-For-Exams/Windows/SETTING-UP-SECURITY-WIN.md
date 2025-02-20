# 🔒 Windows Security for Exam Settings

## 1⃣ Restricting Access to System Settings & Resources
The goal is to **lock down the exam environment**, preventing students from modifying system settings, accessing unauthorized applications, or browsing files outside the exam folder.

---

## 📌 A. Restrict User Access Using Group Policy (GPO)

### 1. Open Group Policy Editor
- Press `Win + R`, type `gpedit.msc`, and hit **Enter**.
- Navigate to **User Configuration > Administrative Templates**.

---

### 2. Disable Access to Control Panel & Settings
**Prevents students from modifying system settings.**  
- Go to:  

User Configuration > Administrative Templates > Control Panel

- Find **"Prohibit access to Control Panel and PC settings"**, **Enable** it.

✅ **Now, students cannot open the Control Panel.**  

---

### 3. Restrict Access to Drives (Prevent Browsing Files)
- Go to:

User Configuration > Administrative Templates > Windows Components > File Explorer

- Find **"Prevent access to drives from My Computer"**, **Enable** it.  
- Choose **C: drive** (or other necessary drives).  

✅ **This blocks students from accessing system files.**  

---

### 4. Prevent Access to Command Prompt (CMD & PowerShell)
To **stop students from running commands**:
- Go to:

User Configuration > Administrative Templates > System

- Enable **"Prevent access to the command prompt"**.
- Enable **"Turn off Windows PowerShell"**.

✅ **CMD and PowerShell will be blocked.**  

---

### 5. Disable Task Manager (Prevent Process Termination)
To **stop students from closing monitoring software**:
- Go to:

User Configuration > Administrative Templates > System > Ctrl+Alt+Del Options

- Enable **"Remove Task Manager"**.

✅ **Students cannot open Task Manager.**  

---

### 6. Restrict USB Storage (Prevent Copying Data)
- Go to:

Computer Configuration > Administrative Templates > System > Removable Storage Access

- Enable **"All Removable Storage classes: Deny all access"**.

✅ **USB storage devices will be blocked.**  

---

### 7. Prevent Internet Browsing (Block Websites)
#### 1. Block Internet Explorer/Microsoft Edge
- Go to:

User Configuration > Administrative Templates > Windows Components > Internet Explorer

- Enable **"Prevent running First Run wizard"**.  
- Enable **"Disable changing proxy settings"** to stop students from bypassing blocks.  

#### 2. Block Specific Websites Using Windows Firewall
- Open **Windows Defender Firewall** (`wf.msc`).
- Go to **Outbound Rules > New Rule**.
- Select **Program > Block Internet Browsers** (`chrome.exe`, `firefox.exe`, etc.).

✅ **No unauthorized browsing during exams.**  

---

## 📌 B. Set Up Exam User Restrictions

### 1. Create a Dedicated Exam User Account
1. Open **Local Users and Groups** (`lusrmgr.msc`).
2. Create a new user (e.g., `examuser`).
3. Add it to the **Users** group (NOT Administrators).

✅ **This ensures students don’t have admin privileges.**  

---

### 2. Prevent Students from Running Unauthorized Apps
1. Open **Group Policy Editor** (`gpedit.msc`).
2. Go to:

User Configuration > Administrative Templates > System

3. Enable **"Don't run specified Windows applications"**.
4. Click **Show**, then add:

```
chrome.exe
firefox.exe
cmd.exe
powershell.exe
taskmgr.exe
regedit.exe
```

✅ **Now, these applications won’t run for students.**  

---

### 3. Allow Only Exam-Related Applications
To restrict students to **only exam software**:
1. Go to:

User Configuration > Administrative Templates > System

2. Enable **"Run only specified Windows applications"**.
3. Click **Show**, then add **only the necessary applications** (e.g., `examapp.exe`).  

✅ **Now, only exam software will run.**  

---

### 4. Automatically Logout Students After Exam
To **force logout after the exam**:
- Open **Task Scheduler** (`taskschd.msc`).
- Create a new task:
- **Trigger:** Set **Exam End Time** (e.g., 12:00 PM).
- **Action:** Run **shutdown -l** to log out the user.

✅ **Students will be logged out automatically.**  

---

## 📌 C. Additional Security Measures

### 1. Enable Kiosk Mode (Single App Mode)
To **lock students to one exam app**:
1. Open **Settings > Accounts > Assigned Access**.
2. Choose the **exam user account**.
3. Select an **exam application** (e.g., `examapp.exe`).

✅ **The user is locked to one application.**  

---

### 2. Block External Software Installation
To **prevent students from installing new software**:
- Go to:

Computer Configuration > Windows Settings > Security Settings > Software Restriction Policies

- Right-click **Software Restriction Policies** > **New Policies**.
- Enable **Disallowed by Default**.
- Add only the necessary exam software to **"Allowed"**.

✅ **No external software can be installed.**  

---

### 3. Restrict Printing (Prevent Cheating)
To **disable printing during exams**:
- Go to:

User Configuration > Administrative Templates > Control Panel > Printers

- Enable **"Prevent adding printers"**.
- Enable **"Disable the ability to print"**.

✅ **Printing will be blocked.**  

---

# 📌 Conclusion
By using **Group Policy, firewall rules, and user restrictions**, you can **lock down** the exam environment and **prevent cheating or system modifications**.  

🔹 Need **step-by-step automation** using PowerShell? Let me know! 🚀

