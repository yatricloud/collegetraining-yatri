# Session 3: Lab Setup and Troubleshooting Common Issues (Windows)

## **Managing Multiple Users for Lab Usage**

### **Setting Up Unique User Accounts for Students**
1. Open **Computer Management** (`compmgmt.msc`).
2. Navigate to **Local Users and Groups > Users**.
3. Right-click **Users** and select **New User**.
4. Enter a **Username**, **Password**, and uncheck **User must change password at next logon**.
5. Click **Create**, then **Close**.
6. Repeat for each student account.

### **Windows Task Scheduler for Automated Tasks**
1. Open **Task Scheduler** (`taskschd.msc`).
2. Click **Create Basic Task**.
3. Name the task (e.g., "Backup Student Data").
4. Select **Trigger** (Daily, Weekly, or On Logon).
5. Under **Action**, choose **Start a Program**.
6. Set the program to run (e.g., `robocopy C:\StudentData D:\Backup /E`).
7. Click **Finish** to save and activate the task.

### **Managing User Quotas on Shared Network Storage**
1. Open **File Explorer** and navigate to the shared drive.
2. Right-click the drive and select **Properties**.
3. Go to the **Quota** tab and click **Show Quota Settings**.
4. Check **Enable quota management**.
5. Set limits for each user (e.g., 1GB per student).
6. Click **Apply**, then **OK**.

## **Troubleshooting Common Issues**

### **User Permission and Login Failures**
- Ensure the student account is **enabled** in `compmgmt.msc`.
- Reset the password if the user cannot log in.
- Check Group Policy settings (`gpedit.msc`) for any login restrictions.

### **Resolving Access and Permission Errors**
- Verify **NTFS Permissions**:
  1. Right-click the folder and select **Properties**.
  2. Go to **Security** and check user permissions.
  3. Click **Edit** to modify as needed.
- Check shared folder permissions:
  1. Right-click the folder, go to **Properties > Sharing**.
  2. Click **Advanced Sharing > Permissions**.
  3. Ensure users have the required access.

### **Logs to Check**
- **Windows Event Viewer** (`eventvwr.msc`):
  - Navigate to `Windows Logs > Security` for login failures.
  - Check `Windows Logs > System` for access issues.

---
