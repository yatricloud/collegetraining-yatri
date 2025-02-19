# Setting File/Folder Permissions for Exam Time in Windows

## **Step 1: Create an Exam Folder**
1. Right-click on the desktop or a drive location.
2. Select **New > Folder**.
3. Name it **Exam_Files**.

## **Step 2: Open Folder Properties**
1. Right-click on **Exam_Files** and select **Properties**.
2. Go to the **Security** tab.
3. Click on **Edit** to modify permissions.

## **Step 3: Restrict Access for Students**
1. Click **Add** to add users or groups.
2. Type the username (e.g., `student1`) and click **Check Names**.
3. Click **OK** to add the user.
4. Select the user from the list and modify permissions:
   - **Deny Modify** (prevents editing or deleting files).
   - **Allow Read & Execute** (allows access but no modifications).
5. Click **Apply**, then **OK**.

## **Step 4: Grant Full Control to Administrators**
1. Select the **Administrators** group.
2. Check **Full control** to allow unrestricted access.
3. Click **Apply**, then **OK**.

## **Step 5: Apply Advanced Restrictions (Optional)**
1. In the **Security** tab, click **Advanced**.
2. Disable **Inheritance** if needed.
3. Click **Add** > **Deny** for specific users.
4. Choose permissions such as:
   - **Deny Delete** (prevents accidental file deletion).
   - **Deny Write** (prevents modification).
5. Click **Apply**, then **OK**.

## **Step 6: Testing the Restrictions**
1. Log in as a **student user**.
2. Try modifying, deleting, or renaming files inside **Exam_Files**.
3. Verify that restricted actions are blocked.
4. Log back in as an **admin** and confirm full access.

---
