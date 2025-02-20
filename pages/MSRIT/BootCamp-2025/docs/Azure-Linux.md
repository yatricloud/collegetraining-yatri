## Secure SSH Connection Guide

### Prerequisites:
1. Ensure you have SSH installed on your system.
2. Your private key file (PEM file) should be available.
3. Permissions must be set correctly on the private key.

### Steps to Connect to Your Server

#### Step 1: Set Correct Permissions for the Private Key
Run the following command to restrict permissions on the private key:
```bash
chmod 600 ~/.ssh/yatharth-yatricloud-msrit_key.pem
```
This ensures that only you have read/write permissions on the key.

#### Step 2: Enable Hidden Files Visibility (Mac)
To view hidden files in Finder, press:
```
Shift + Cmd + .
```
This will allow you to verify that the key file is in the correct location.

#### Step 3: Connect to the Server Using SSH
Run the following SSH command to connect to the remote server:
```bash
ssh -i ~/.ssh/yatharth-yatricloud-msrit_key.pem yatharth-yatricloud-msrit@4.247.152.241
```
This command:
- Uses the `-i` flag to specify the identity file (PEM key)
- Connects to the server with the provided username (`yatharth-yatricloud-msrit`)
- Uses the specified IP address (`4.247.152.241`)

#### Additional Tips:
- If you encounter a `Permission denied (publickey)` error, ensure that the key is correct and has the right permissions.
- If the connection is slow or fails, check network/firewall settings.
- You can add the key to SSH agent using:
  ```bash
  ssh-add ~/.ssh/yatharth-yatricloud-msrit_key.pem
  ```
  This avoids specifying `-i` every time.

Once connected, you can execute commands on the remote server securely!

