# MongoDB User Management in Linux

## **1. Install MongoDB (If Not Installed)**
Follow these steps to install MongoDB on Linux:

```bash
sudo apt update && sudo apt upgrade -y  # Ubuntu/Debian
sudo yum update -y                      # RHEL/CentOS
```

### **Import GPG Key & Add Repository**
For **Ubuntu/Debian**:
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt update
```
For **RHEL/CentOS**:
```bash
sudo rpm --import https://www.mongodb.org/static/pgp/server-7.0.asc
echo "[mongodb-org-7.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/\$releasever/mongodb-org/7.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-7.0.asc" | sudo tee /etc/yum.repos.d/mongodb-org-7.0.repo
```

### **Install MongoDB**
For **Ubuntu/Debian**:
```bash
sudo apt install -y mongodb-org
```
For **RHEL/CentOS**:
```bash
sudo yum install -y mongodb-org
```

### **Start & Enable MongoDB**
```bash
sudo systemctl start mongod
sudo systemctl enable mongod
sudo systemctl status mongod
```

## **2. Create a MongoDB Database and User**
### **Open MongoDB Shell**
```bash
mongosh
```
Create a new database:
```javascript
use yourdatabase
```

Create a new user for the database:
```javascript
db.createUser({
  user: "newuser",
  pwd: "newpassword",
  roles: [{ role: "readWrite", db: "yourdatabase" }]
})
```

## **3. Modify (Update) a User**
### **Change User Password**
```javascript
use admin
db.changeUserPassword("newuser", "newpassword123")
```

### **Grant Additional Roles**
```javascript
use yourdatabase
db.grantRolesToUser("newuser", [{ role: "dbAdmin", db: "yourdatabase" }])
```

### **Remove a Role**
```javascript
use yourdatabase
db.revokeRolesFromUser("newuser", [{ role: "dbAdmin", db: "yourdatabase" }])
```

## **4. Delete a User**
```javascript
use yourdatabase
db.dropUser("newuser")
```

## **5. List Users & Roles**
### **View All Users**
```javascript
use admin
show users
```

### **Check Roles of a Specific User**
```javascript
use yourdatabase
db.getUser("newuser")
```

### **View All Available Roles**
```javascript
use admin
show roles
```

## **6. Enable Authentication**
Edit the MongoDB configuration file:
```bash
sudo nano /etc/mongod.conf
```
Find the `security` section and add:
```
security:
  authorization: enabled
```
Save and restart MongoDB:
```bash
sudo systemctl restart mongod
```

Now, login with authentication:
```bash
mongosh -u adminuser -p --authenticationDatabase admin
```

## **7. Allow Remote Access (If Needed)**
Edit the MongoDB config file:
```bash
sudo nano /etc/mongod.conf
```
Change `bindIp: 127.0.0.1` to:
```
bindIp: 0.0.0.0
```
Restart MongoDB:
```bash
sudo systemctl restart mongod
```
Allow MongoDB in the firewall:
```bash
sudo ufw allow 27017/tcp  # Ubuntu
sudo firewall-cmd --add-port=27017/tcp --permanent && sudo firewall-cmd --reload  # RHEL/CentOS
```

## **8. Summary of Commands**
- **Create a Database:** `use yourdatabase`
- **Create a User:** `db.createUser({...})`
- **Change Password:** `db.changeUserPassword("user", "password")`
- **Grant Role:** `db.grantRolesToUser("user", [...])`
- **Remove Role:** `db.revokeRolesFromUser("user", [...])`
- **Delete User:** `db.dropUser("user")`
- **List Users:** `show users`
- **Enable Authentication:** Modify `mongod.conf`

Now you have full MongoDB database and user management on Linux! 🚀

