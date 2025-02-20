# Installing MongoDB on Ubuntu 24.04

## **1. Update System Packages**
Ensure all existing packages are up-to-date:
```bash
sudo apt update && sudo apt upgrade -y
```

## **2. Install Prerequisites**
Install `gnupg` and `curl` if they aren't already installed:
```bash
sudo apt install -y gnupg curl
```

## **3. Import the MongoDB GPG Key**
Add the MongoDB public GPG key to your system:
```bash
curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \
  sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg \
  --dearmor
```

## **4. Add the MongoDB Repository**
Create a list file for MongoDB:
```bash
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | \
  sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
```

## **5. Update Package Database**
Reload the local package database:
```bash
sudo apt update
```

## **6. Install MongoDB**
Install the MongoDB packages:
```bash
sudo apt install -y mongodb-org
```

## **7. Start and Enable MongoDB Service**
Start the MongoDB service and enable it to start on boot:
```bash
sudo systemctl start mongod
sudo systemctl enable mongod
```

## **8. Verify Installation**
Check the status of the MongoDB service:
```bash
sudo systemctl status mongod
```

To access the MongoDB shell, run:
```bash
mongosh
```

If you encounter any issues during installation, refer to the [official MongoDB installation guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/) for Ubuntu.

