# Restricting User Access Using Group Policy in Windows

## **Step 1: Open Group Policy Editor**
1. Press `Win + R`, type `gpedit.msc`, and press **Enter**.
2. Navigate to **Computer Configuration** or **User Configuration**, depending on whether you want to apply restrictions to the system or individual users.

## **Step 2: Restrict Access to Critical System Settings**
### Disable Control Panel and Settings Access
1. Navigate to:
   ```
   User Configuration > Administrative Templates > Control Panel
   ```
2. Double-click **Prohibit access to Control Panel and PC settings**.
3. Select **Enabled**, then click **Apply** and **OK**.

### Restrict Task Manager Access
1. Navigate to:
   ```
   User Configuration > Administrative Templates > System > Ctrl+Alt+Del Options
   ```
2. Double-click **Remove Task Manager**.
3. Select **Enabled**, then click **Apply** and **OK**.

### Restrict Command Prompt Access
1. Navigate to:
   ```
   User Configuration > Administrative Templates > System
   ```
2. Double-click **Prevent access to the command prompt**.
3. Select **Enabled**, then click **Apply** and **OK**.

## **Step 3: Set Up Exam Environment Restrictions**

### Prevent Running Specific Applications
1. Navigate to:
   ```
   User Configuration > Administrative Templates > System
   ```
2. Double-click **Don't run specified Windows applications**.
3. Select **Enabled**, then click **Show**.
4. Add applications to block (e.g., `chrome.exe`, `cmd.exe`, `powershell.exe`).
5. Click **OK**, then **Apply** and **OK**.

# Restricting Applications in Windows

## **Method 1: Use Registry Editor to Block Applications**
1. Press `Win + R`, type `regedit`, and press **Enter**.
2. Navigate to:  
   ```
   HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer
   ```
3. Right-click **Explorer**, select **New > DWORD (32-bit) Value**, and name it:  
   ```
   DisallowRun
   ```
4. Double-click `DisallowRun`, set its value to `1`, and click **OK**.
5. Create a new key under **Explorer**:
   - Right-click **Explorer**, select **New > Key**, and name it **DisallowRun**.
6. Inside **DisallowRun**, right-click and select **New > String Value**.
   - Name it `1`, then double-click it and enter the name of the blocked application (e.g., `chrome.exe`).
7. Repeat Step 6 for additional applications (`2`, `3`, etc.).
8. Restart your computer or log out/in for changes to take effect.

---

## **Method 2: Use Applocker (Windows Pro & Enterprise)**
1. Press `Win + R`, type `secpol.msc`, and press **Enter**.
2. Navigate to:  
   ```
   Security Settings > Application Control Policies > AppLocker > Executable Rules
   ```
3. Right-click **Executable Rules** and select **Create New Rule**.
4. Click **Next** > Select **Deny** > Click **Next**.
5. Select **Path** and browse for the application (e.g., `C:\Program Files\Google\Chrome\chrome.exe`).
6. Click **Next**, then **Create**.
7. Restart the system to apply the rule.

---

## **Method 3: Use Software Restriction Policies**
1. Press `Win + R`, type `gpedit.msc`, and press **Enter**.
2. Navigate to:  
   ```
   Computer Configuration > Windows Settings > Security Settings > Software Restriction Policies
   ```
3. If not present, right-click **Software Restriction Policies** and select **New Software Restriction Policies**.
4. Under **Additional Rules**, right-click and choose **New Path Rule**.
5. Browse to the application you want to block (e.g., `C:\Program Files\Google\Chrome\chrome.exe`).
6. Set the **Security Level** to **Disallowed**.
7. Click **Apply** > **OK**, then restart your computer.

---


### Restrict USB Storage Access
1. Navigate to:
   ```
   Computer Configuration > Administrative Templates > System > Removable Storage Access
   ```
2. Double-click **All Removable Storage classes: Deny all access**.
3. Select **Enabled**, then click **Apply** and **OK**.

### Disable Right-Click Context Menu
1. Navigate to:
   ```
   User Configuration > Administrative Templates > Windows Components > File Explorer
   ```
2. Double-click **Remove Windows Explorer’s default context menu**.
3. Select **Enabled**, then click **Apply** and **OK**.

## **Step 4: Apply Group Policy Changes**
1. Open **Command Prompt** as Administrator.
2. Run the command:
   ```
   gpupdate /force
   ```
3. Restart the computer to ensure changes take effect.

## **Step 5: Testing the Restrictions**
1. Log in with a restricted user account.
2. Try accessing **Control Panel**, **Task Manager**, or blocked applications.
3. Verify that the restrictions are enforced correctly.
4. If any setting doesn’t apply, run:
   ```
   gpresult /R
   ```
   to check applied policies.

