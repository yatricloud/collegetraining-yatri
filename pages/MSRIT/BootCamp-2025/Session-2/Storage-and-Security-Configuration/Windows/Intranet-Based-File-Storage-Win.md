# Setting Up Shared Folders Using Windows File Sharing

## Step 1: Create a Shared Folder
1. Right-click on the folder you want to share.
2. Click on **Properties**.
3. Go to the **Sharing** tab.
4. Click **Share**.
5. Select **Specific People**.
6. Choose the users you want to grant access.
7. Click **Share**, then **Done**.

## Step 2: Assign Unique Logins to Students
1. Open **Control Panel**.
2. Go to **User Accounts > Manage Accounts**.
3. Click **Add a new user**.
4. Enter a username and password.
5. Assign the appropriate access rights.
6. Click **Create Account**.

## Step 3: Set Permissions for Shared Folder
1. Go to the **Sharing** tab in folder properties.
2. Click **Advanced Sharing**.
3. Check **Share this folder**.
4. Click **Permissions**.
5. Add the users and set **Read** or **Full Control** as needed.
6. Click **OK** and **Apply**.

## Step 4: Accessing the Shared Folder from Another PC
1. Press `Win + R`, type `\\<Your-PC-Name>` or `\\<IP-Address>` and press Enter.
2. Enter the assigned username and password.
3. Open the shared folder.

## Step 5: Testing in a New Window
1. Open **Run** (`Win + R`).
2. Type `\\<Your-PC-Name>` or `\\<IP-Address>`.
3. Click **OK**.
4. Verify if the folder is accessible.
5. Try opening and modifying files to check permissions.
6. Log in with another student account and verify access restrictions.

## Step 6: Troubleshooting
- Ensure that **File and Printer Sharing** is enabled in **Control Panel > Network and Sharing Center**.
- Check the **Windows Firewall** to allow file sharing.
- Verify that both PCs are on the same network.
- Restart the system if access issues persist.
