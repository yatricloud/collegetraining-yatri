### **Step 1: Install `dnsmasq`**
1. Update your package list:
   ```bash
   sudo apt update
   ```

2. Install `dnsmasq`:
   ```bash
   sudo apt install dnsmasq
   ```

---

### **Step 2: Configure `dnsmasq`**
1. Backup the default configuration file:
   ```bash
   sudo cp /etc/dnsmasq.conf /etc/dnsmasq.conf.backup
   ```

2. Edit the `dnsmasq` configuration file:
   ```bash
   sudo nano /etc/dnsmasq.conf
   ```

3. Add the following configuration to set up DHCP and DNS:
   ```bash
   # Listen on a specific interface (e.g., eth0 or enp0s3)
   interface=enp0s3

   # Enable DHCP
   dhcp-range=192.168.1.100,192.168.1.200,12h

   # Set the gateway (router) IP
   dhcp-option=3,192.168.1.1

   # Set the DNS server (e.g., Google DNS)
   dhcp-option=6,8.8.8.8,8.8.4.4

   # Enable DNS service
   no-resolv
   server=8.8.8.8
   server=8.8.4.4
   ```

   Replace `enp0s3` with your network interface name (use `ip a` to check). Adjust the IP ranges and gateway as needed.

4. Save and exit the file (`Ctrl+O`, `Enter`, `Ctrl+X`).

---

### **Step 3: Restart `dnsmasq`**
1. Restart the `dnsmasq` service to apply the changes:
   ```bash
   sudo systemctl restart dnsmasq
   ```

2. Enable `dnsmasq` to start on boot:
   ```bash
   sudo systemctl enable dnsmasq
   ```

---

### **Step 4: Verify the Setup**
1. Check the status of `dnsmasq`:
   ```bash
   sudo systemctl status dnsmasq
   ```

2. Test DHCP by connecting a client device to the network. It should automatically receive an IP address in the range you specified.

3. Test DNS by pinging a domain name from a client:
   ```bash
   ping google.com
   ```

---

### **Step 5: (Optional) Configure Firewall**
If you have a firewall enabled (e.g., `ufw`), allow DHCP and DNS traffic:
```bash
sudo ufw allow 53/tcp  # DNS
sudo ufw allow 53/udp  # DNS
sudo ufw allow 67/udp  # DHCP
sudo ufw allow 68/udp  # DHCP
```

---

### **Step 6: Troubleshooting**
1. Check logs for errors:
   ```bash
   sudo journalctl -u dnsmasq
   ```

2. If clients are not receiving IP addresses, ensure:
   - The correct network interface is configured.
   - No other DHCP server is running on the network.

---

### **Resolving Port 53 Conflicts**
Your system doesn’t have net-tools installed, which includes netstat. You can install it with:
```bash
sudo apt update && sudo apt install net-tools -y
```
After that, run:
```bash
sudo netstat -tulnp | grep ":53 "
```
If you prefer an alternative without installing net-tools, use:
```bash
sudo ss -tulnp | grep ":53 "
```
This will check which process is using port 53, which is crucial for resolving the dnsmasq issue.

If `systemd-resolved` is using port 53, you can:

1. Disable `systemd-resolved`:
   ```bash
   sudo systemctl stop systemd-resolved
   sudo systemctl disable systemd-resolved
   ```

2. Remove the symlink:
   ```bash
   sudo rm /etc/resolv.conf
   ```

3. Create a new `resolv.conf` file:
   ```bash
   sudo ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf
   ```

4. Restart `dnsmasq`:
   ```bash
   sudo systemctl restart dnsmasq
   ```

This should free up port 53 for dnsmasq and allow it to run properly.
