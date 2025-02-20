### Step 1: Install Docker on Ubuntu
Run these commands one by one:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo tee /etc/apt/keyrings/docker.asc > /dev/null
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### Step 2: Enable & Verify Docker
```bash
sudo systemctl enable docker
sudo systemctl start docker
docker --version
```
(Optional: Allow Docker without `sudo`)
```bash
sudo usermod -aG docker $USER
newgrp docker
```
Logout and login again.

---

### Step 3: Install Node.js and NPX
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```

---

### Step 4: Create a React App
```bash
npx create-react-app my-react-app
cd my-react-app
npm start  # Check if the app runs locally
```

---

### Step 5: Create a Dockerfile
Inside `my-react-app`, create a new file named `Dockerfile`:
```bash
touch Dockerfile
```
Add this simple content:
```dockerfile
# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy all files
COPY . .

# Expose all ports
EXPOSE 0-65535

# Start app
CMD ["npm", "start"]
```

---

### Step 6: Build the Docker Image
```bash
docker build -t my-react-app .
```

---

### Step 7: Run the Container
```bash
docker run -d -p 3000:3000 my-react-app
```
Now open **http://localhost:3000** in your browser.

---

### Step 8: Log in to Docker Hub
```bash
docker login
```
Enter your Docker Hub username & password.

---

### Step 9: Push Image to Docker Hub
```bash
docker tag my-react-app YOUR_DOCKERHUB_USERNAME/my-react-app:v1
docker push YOUR_DOCKERHUB_USERNAME/my-react-app:v1
```

---

### Step 10: Pull Image on Another System
```bash
docker pull YOUR_DOCKERHUB_USERNAME/my-react-app:v1
```

---

### Step 11: Run the Pulled Image
```bash
docker run -d -p 3000:3000 YOUR_DOCKERHUB_USERNAME/my-react-app:v1
```
Now your React app is running inside a Docker container.

