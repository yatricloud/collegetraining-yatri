## Creating Users in Windows

### Creating User Accounts in Windows

#### Through Control Panel:
1. Open **Control Panel**.
2. Go to **User Accounts** > **Manage another account**.
3. Click **Add a new user in PC settings**.
4. Choose **Add someone else to this PC**.
5. Follow the prompts to create a new user account.

#### Using PowerShell:
To create a user account using PowerShell, use the following command:
```powershell
New-LocalUser -Name "student1" -Password (ConvertTo-SecureString "password" -AsPlainText -Force)
```
This creates a new local user named **student1** with the specified password.

### Adding Users to Groups
To add the user to a specific group, use the following PowerShell command:
```powershell
Add-LocalGroupMember -Group "Users" -Member "student1"
```
This command adds **student1** to the **Users** group.
