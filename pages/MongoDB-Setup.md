
# Installing MongoDB on a Linux System & Creating a User

## Step 1: Update Your System
Before installing, update your package list:

```sh
sudo apt update && sudo apt upgrade -y  # For Debian/Ubuntu
sudo yum update -y                      # For RHEL/CentOS
```

## Step 2: Import MongoDB GPG Key
MongoDB requires a GPG key for secure package installation. Run:

```sh
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -   # Ubuntu
sudo rpm --import https://www.mongodb.org/static/pgp/server-7.0.asc   # RHEL/CentOS
```

## Step 3: Add MongoDB Repository
For Ubuntu/Debian (Replace focal with your version if needed):

```sh
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt update
```

For RHEL/CentOS:

```sh
echo "[mongodb-org-7.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/\$releasever/mongodb-org/7.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-7.0.asc" | sudo tee /etc/yum.repos.d/mongodb-org-7.0.repo
```

## Step 4: Install MongoDB
For Ubuntu/Debian:

```sh
sudo apt install -y mongodb-org
```

For RHEL/CentOS:

```sh
sudo yum install -y mongodb-org
```

## Step 5: Start & Enable MongoDB
```sh
sudo systemctl start mongod
sudo systemctl enable mongod
sudo systemctl status mongod  # Check if MongoDB is running
```

## Step 6: Verify Installation
Check the installed version:

```sh
mongod --version
```

Connect to MongoDB shell:

```sh
mongosh
```

If `mongosh` is not found, install it manually:

```sh
sudo apt install -y mongodb-mongosh
```

## Step 7: Create a MongoDB User
1. Open MongoDB shell:

```sh
mongosh
```

2. Switch to the admin database:

```sh
use admin
```

3. Create a new user (Replace `youruser` and `yourpassword`):

```sh
db.createUser({
  user: "youruser",
  pwd: "yourpassword",
  roles: [{ role: "root", db: "admin" }]
})
```

4. Exit the MongoDB shell:

```sh
exit
```

## Step 8: Enable Authentication (Optional but Recommended)
Edit the MongoDB configuration file:

```sh
sudo nano /etc/mongod.conf
```

Find the security section and add:

```yaml
security:
  authorization: enabled
```

Save and exit (CTRL+X, then Y, then ENTER).

Restart MongoDB:

```sh
sudo systemctl restart mongod
```

Now, to connect with authentication:

```sh
mongosh -u youruser -p --authenticationDatabase admin
```

## Step 9: Allow Remote Access (If Required)
Edit the MongoDB config file:

```sh
sudo nano /etc/mongod.conf
```

Find `bindIp: 127.0.0.1` and change it to:

```yaml
bindIp: 0.0.0.0
```

Save the file and restart MongoDB:

```sh
sudo systemctl restart mongod
```

To allow MongoDB in the firewall:

```sh
sudo ufw allow 27017/tcp  # For Ubuntu
sudo firewall-cmd --add-port=27017/tcp --permanent && sudo firewall-cmd --reload  # For CentOS/RHEL
```

## Done! 🚀
Now you have MongoDB installed, a user created, and authentication enabled! 🎯
```

