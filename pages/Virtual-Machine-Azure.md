## Step 1: Log in to Azure Portal
1. Go to [Azure Portal](https://portal.azure.com/).
2. Sign in with your Azure account.

---

## Step 2: Create a Linux Virtual Machine
1. **Go to the Virtual Machines Service**:
   - In the search bar at the top, type **Virtual Machines** and select it.

2. **Click on "+ Create" → "Azure Virtual Machine"**.

3. **Configure Basic Settings**:
   - **Subscription**: Select your Azure subscription.
   - **Resource Group**: Click **"Create new"**, enter a name (e.g., `MyResourceGroup`), and click **OK**.
   - **Virtual Machine Name**: Enter a name for your VM (e.g., `MyLinuxVM`).
   - **Region**: Choose a region closest to you.
   - **Availability Options**: Select **No infrastructure redundancy required**.
   - **Image**: Choose a Linux distribution (e.g., **Ubuntu 22.04 LTS**).
   - **VM Size**: Click **"See all sizes"**, choose **Standard_B1s** (for cost efficiency), and click **Select**.

4. **Configure Administrator Account**:
   - **Authentication Type**: Choose **SSH Public Key** or **Password**.
   - **Username**: Enter your preferred username (e.g., `azureuser`).
   - **SSH Key**: If you choose SSH, upload an existing public key or generate a new one.
   - **Password**: If you choose password authentication, enter a strong password.

5. **Networking Settings**:
   - **Virtual Network**: Leave default or create a new one.
   - **Subnet**: Leave as default.
   - **Public IP**: Ensure **"Enabled"** is selected.
   - **Inbound Port Rules**:
     - Select **Allow selected ports**.
     - Choose **SSH (22)** to allow SSH connections.

6. **Click "Review + Create"**:
   - Azure will validate your configuration.
   - Click **Create** to start the deployment.

---

## Step 3: Connect to the Linux VM
### Option 1: Connect Using SSH (Mac/Linux)
1. **Find the Public IP Address**:
   - Go to **Virtual Machines** in the Azure Portal.
   - Click on your **Linux VM**.
   - Under **Overview**, find **Public IP Address** (e.g., `20.120.45.10`).

2. **Connect via SSH**:
   - Open your terminal and run:
     ```bash
     ssh azureuser@20.120.45.10
     ```
   - If using an SSH key:
     ```bash
     ssh -i /path/to/private-key azureuser@20.120.45.10
     ```

---

## Step 5: (Optional) Allow All Ports
If you need to allow all ports for testing:
1. Go to **Networking** in your VM settings.
2. Click **Add inbound rule**.
3. Select:
   - **Source**: Any
   - **Destination**: Any
   - **Protocol**: Any
   - **Action**: Allow
4. Click **Add**.

---

Your **Azure Linux VM is now up and running!** 🎉

