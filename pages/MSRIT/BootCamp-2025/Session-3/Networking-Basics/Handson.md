## Setting Up a Simple Local Network Using Multiple Linux Machines

### 1. Identify Network Interfaces
Check available network interfaces on each machine.

```bash
ip a
```
or  
```bash
ifconfig
```

### 2. Assign Static IP Addresses (Optional)
If you want static IPs instead of DHCP, configure them manually.

#### For Ubuntu/Debian:  
Edit the Netplan configuration file:

```bash
sudo nano /etc/netplan/01-netcfg.yaml
```

Add the following configuration (modify according to your network setup):

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:
      dhcp4: no
      addresses:
        - 192.168.1.10/24
      gateway4: 192.168.1.1
      nameservers:
        addresses: [8.8.8.8, 8.8.4.4]
```

Apply the changes:

```bash
sudo netplan apply
```

#### For RHEL/CentOS:  
Edit the network configuration file:

```bash
sudo nano /etc/sysconfig/network-scripts/ifcfg-eth0
```

Modify the file:

```
DEVICE=eth0
BOOTPROTO=none
ONBOOT=yes
IPADDR=192.168.1.10
PREFIX=24
GATEWAY=192.168.1.1
DNS1=8.8.8.8
DNS2=8.8.4.4
```

Restart networking:

```bash
sudo systemctl restart NetworkManager
```

### 3. Set Hostnames (Optional)
To identify machines easily, set unique hostnames.

```bash
sudo hostnamectl set-hostname machine1
```

Edit `/etc/hosts` file to map hostnames to IPs:

```bash
sudo nano /etc/hosts
```

Add entries:

```
192.168.1.10  machine1
192.168.1.11  machine2
```

Save and exit.

### 4. Enable SSH for Remote Access
If you need to access machines remotely:

```bash
sudo apt install openssh-server -y  # Ubuntu/Debian
sudo yum install openssh-server -y  # RHEL/CentOS
```

Start and enable SSH:

```bash
sudo systemctl start ssh
sudo systemctl enable ssh
```

Check SSH status:

```bash
systemctl status ssh
```

### 5. Verify Network Connectivity
Test connectivity between machines.

```bash
ping 192.168.1.11
```

### 6. File Sharing (Optional - Using SCP)
Copy files between machines:

```bash
scp file.txt user@192.168.1.11:/home/user/
```

### 7. Enable Firewall Rules (If Needed)
Allow SSH and ICMP (Ping):

```bash
sudo ufw allow ssh   # Ubuntu/Debian
sudo firewall-cmd --add-service=ssh --permanent  # RHEL/CentOS
sudo firewall-cmd --reload
```

### 8. Troubleshooting
Check network status:

```bash
ip route show
```

Restart networking:

```bash
sudo systemctl restart networking  # Ubuntu/Debian
sudo systemctl restart NetworkManager  # RHEL/CentOS
```

Check DNS resolution:

```bash
nslookup google.com
```

This setup should help you establish a simple local network between multiple Linux machines.

