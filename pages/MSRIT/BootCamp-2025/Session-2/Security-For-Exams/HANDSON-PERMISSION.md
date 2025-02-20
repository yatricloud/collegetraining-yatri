## Hands-on

### Demonstrating File/Folder Permissions During Exam Time

#### 1. Linux:
**Setting Read-Only Permissions:**
```bash
chmod 444 /exam_folder/exam_file.txt
```

**Restricting Write Access:**
```bash
chmod -R 550 /exam_folder/
```

**Setting ACLs for Limited Access:**
```bash
setfacl -m u:student:r /exam_folder/exam_file.txt
setfacl -m u:teacher:rw /exam_folder/exam_file.txt
```

**Locking Files After Exam Time:**
```bash
chattr +i /exam_folder/exam_file.txt
```

### Troubleshooting ACL Issues in Linux

#### 1. Check If ACL Support Is Enabled
Run:
```bash
sudo mount | grep acl
```
If there’s no output, enable ACL support:
```bash
sudo mount -o remount,acl /
```
For persistent changes, add `acl` in `/etc/fstab`:
```
/dev/sdX  /  ext4  defaults,acl  0  1
```
Then remount with:
```bash
sudo mount -o remount /
```

#### 2. Verify ACL Package Is Installed
Install ACL if not installed:
```bash
sudo apt install acl -y  # Debian/Ubuntu
sudo yum install acl -y  # RHEL/CentOS
```

#### 3. Check for Invalid Characters in the Command
Try running the command separately, one at a time:
```bash
sudo setfacl -m u:student:r-- /home/exam_folder/test.txt
sudo setfacl -m u:teacher:rw- /home/exam_folder/test.txt
```

#### 4. Verify Users Exist
Check if `student` and `teacher` users exist:
```bash
getent passwd student
getent passwd teacher
```
If not, create them:
```bash
sudo useradd student
sudo useradd teacher
```

#### 5. Check If the File Exists
Run:
```bash
ls -l /home/exam_folder/test.txt
```
If it doesn’t exist, create it:
```bash
sudo touch /home/exam_folder/test.txt
```

#### 6. Verify If the File Supports ACLs
Check if the filesystem supports ACLs:
```bash
sudo tune2fs -l $(df --output=source /home | tail -1) | grep "Default mount options"
```
If `acl` is missing, enable it using `tune2fs` (for ext4):
```bash
sudo tune2fs -o acl /dev/sdX
```
Replace `/dev/sdX` with the actual partition name from the previous command.

#### 7. Verify ACLs Applied Successfully
After running the command again, check:
```bash
getfacl /home/exam_folder/test.txt
```
Expected output:
```
user:student:r--
user:teacher:rw-
```

#### 2. Windows:
**Setting Read-Only Permissions:**
1. Right-click the exam folder, select **Properties**.
2. Navigate to the **Security** tab.
3. Select **Users** and click **Edit**.
4. Check **Read & Execute** and **Deny** for **Write**.
5. Click **Apply** and **OK**.

**Using Command Line:**
```powershell
icacls C:\exam_folder\exam_file.txt /deny Everyone:(W)
```

**Restricting File Copying:**
- Use Group Policy Editor (gpedit.msc) to disable clipboard and USB access during exam time.

**Locking Files After Exam:**
```powershell
attrib +R +S +H C:\exam_folder\exam_file.txt
```

By implementing these measures, the intranet-based exam storage system will ensure security, integrity, and controlled access, preventing data breaches and unauthorized modifications.

