## Step 1: Install MySQL and Configure

1. **Update System Packages**

   ```bash
   sudo apt update
   ```

2. **Install MySQL Server**

   ```bash
   sudo apt install mysql-server
   ```
   This installs the MySQL server package on your system.

3. **Secure the MySQL Installation**

   ```bash
   sudo mysql_secure_installation
   ```
   This interactive script helps secure your MySQL installation by setting a root password, removing test databases, and disallowing remote root logins.

4. **Log into MySQL**

   ```bash
   sudo mysql
   ```
   This opens the MySQL shell as the root user.

5. **Create a New Database for Student Projects**

   In the MySQL shell, run:
   ```sql
   CREATE DATABASE student_projects;
   ```
   This command creates a dedicated database for your student projects.

6. **Create a New User and Grant Privileges**

   In the MySQL shell, execute:
   ```sql
   CREATE USER 'student'@'localhost' IDENTIFIED BY 'your_password';
   GRANT ALL PRIVILEGES ON student_projects.* TO 'student'@'localhost';
   FLUSH PRIVILEGES;
   ```
   This creates a user named `student` with the specified password and grants them full privileges on the `student_projects` database. Flushing privileges applies the changes immediately.

7. **Exit MySQL**

   ```sql
   EXIT;
   ```

8. List All MySQL Users

```sql
SELECT User, Host FROM mysql.user;
```

9. Count the Total Number of Users

```sql
SELECT COUNT(*) AS total_users FROM mysql.user;
```


## Step 2: Uninstall MySQL

1. **Stop the MySQL Service**

   First, stop the running MySQL service:
   ```bash
   sudo systemctl stop mysql
   ```

2. **Remove MySQL Packages**

   Uninstall MySQL server, client, and common packages along with their configuration files:
   ```bash
   sudo apt remove --purge mysql-server mysql-client mysql-common
   ```

3. **Clean Up Unnecessary Dependencies**

   Remove any packages that were installed as dependencies for MySQL and are no longer needed:
   ```bash
   sudo apt autoremove
   sudo apt autoclean
   ```

4. **Remove MySQL Configuration and Data Files**

   Delete the MySQL directories to remove any remaining configuration files and databases:
   ```bash
   sudo rm -rf /etc/mysql /var/lib/mysql /var/log/mysql
   ```

### Option 2: Enabling the General Query Log

If you want to record all commands executed by the server (not just interactive commands), you can enable MySQL’s general query log. This log will capture every SQL statement processed by the server.

1. **Edit the MySQL Configuration File**

   Open the MySQL configuration file (location may vary; on Ubuntu, it’s often at `/etc/mysql/mysql.conf.d/mysqld.cnf`):

   ```bash
   sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
   ```

2. **Enable the General Query Log**

   Under the `[mysqld]` section, add or modify the following lines:

   ```ini
   general_log_file        = /var/log/mysql/mysql.log
   general_log             = 1
   ```

3. **Save and Exit**

4. **Restart MySQL to Apply Changes**

   ```bash
   sudo systemctl restart mysql
   ```

5. **View the Log File**

   To monitor the log file in real time, use:

   ```bash
   sudo tail -f /var/log/mysql/mysql.log
   ```

The general query log records every query processed by the server, which is useful for debugging but can impact performance, so it’s best used temporarily.

---

By following these steps, you can:
- List all MySQL users.
- Count the total number of user accounts.
- Check the commands you’ve executed in the MySQL shell either via the client history file or by enabling the general query log for a more comprehensive audit.

--- 

### Step 1: Install MongoDB and Configure

1Below is a sample `README.md` file that covers installing MongoDB 8.0 on Ubuntu, creating a database user, viewing database and user configuration, and finally uninstalling MongoDB.

---

```markdown
# MongoDB 8.0 Installation, Configuration, and Uninstallation Guide on Ubuntu

This guide demonstrates how to install MongoDB 8.0 on Ubuntu, configure a user for a custom database, view the database and user settings, and then completely remove MongoDB if needed.

---

## 1. Prerequisites

Check your Ubuntu version and install required tools:

```bash
cat /etc/lsb-release
sudo apt-get install -y gnupg curl
```

---

## 2. Install MongoDB 8.0

### a. Import the MongoDB GPG Key

```bash
curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg --dearmor
```

*Note:* The `apt-key` command is deprecated. This method stores the key in a secure keyring.

### b. Create the MongoDB Source List

Replace `noble` with your Ubuntu codename if needed. For example, if you are using Ubuntu 20.04 (Focal), update it to `focal`:

```bash
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
```

### c. Update the Package Database and Install MongoDB

```bash
sudo apt-get update
sudo apt-get install -y mongodb-org
```

### d. Start and Enable the MongoDB Service

```bash
sudo systemctl start mongod
sudo systemctl daemon-reload
sudo systemctl enable mongod
```

---

## 3. Configure MongoDB

### a. Open the MongoDB Shell

MongoDB 8.0 uses the new shell called `mongosh`:

```bash
mongosh
```

### b. Create a New Database and User

In the `mongosh` shell, switch to your custom database and create a user:

```javascript
use student_projects
db.createUser({
  user: "student",
  pwd: "your_password",
  roles: [{ role: "readWrite", db: "student_projects" }]
})
```

*Explanation:* This creates a user named `student` with read/write privileges on the `student_projects` database.

---

## 4. Viewing Database and User Configurations

### a. List All Databases

In the `mongosh` shell, run:

```javascript
show dbs
```

*This command shows all databases currently present.*

### b. List Users for the Current Database

To view all users in the current database (`student_projects`):

```javascript
db.getUsers()
```

### c. Check Global User Information

Alternatively, switch to the `admin` database and list all users:

```javascript
use admin
db.system.users.find().pretty()
```

### d. Review MongoDB Server Configuration

The main configuration file is usually located at `/etc/mongod.conf`. To view it:

```bash
cat /etc/mongod.conf
```

### e. Check MongoDB Service Status

To verify that MongoDB is running properly:

```bash
sudo systemctl status mongod
```

---

## 5. Uninstalling MongoDB

If you need to remove MongoDB from your system, follow these steps:

### a. Stop the MongoDB Service

```bash
sudo systemctl stop mongod
```

### b. Remove MongoDB Packages

```bash
sudo apt-get purge -y mongodb-org*
```

### c. Remove Unnecessary Dependencies

```bash
sudo apt-get autoremove -y
```

### d. Delete MongoDB Data and Log Directories

*Warning: This will remove all MongoDB data and logs permanently.*

```bash
sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongodb
```

