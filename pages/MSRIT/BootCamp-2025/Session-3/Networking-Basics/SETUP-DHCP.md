# Setting Up DHCP and DNS Servers for Local Networking on Ubuntu

## 1. Introduction
This guide will help you set up **DHCP and DNS servers** on an Ubuntu machine to manage local network addressing and name resolution.

---

## 2. Install Required Packages
Update package lists and install the necessary services:
```bash
sudo apt update
sudo apt install isc-dhcp-server bind9 -y
```

---

## 3. Configure the DHCP Server
### Step 1: Identify the Network Interface
Run the following command to find your network interface name:
```bash
ip a
```
Example output:
```
2: enp0s3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 ...
    inet 192.168.1.1/24 brd 192.168.1.255 scope global enp0s3
```
Here, `enp0s3` is the interface name.

### Step 2: Edit DHCP Configuration
Open the DHCP configuration file:
```bash
sudo nano /etc/dhcp/dhcpd.conf
```
Add or modify the following lines:
```plaintext
subnet 192.168.1.0 netmask 255.255.255.0 {
    range 192.168.1.100 192.168.1.200;
    option routers 192.168.1.1;
    option domain-name-servers 192.168.1.1, 8.8.8.8;
    option domain-name "local.lan";
    default-lease-time 600;
    max-lease-time 7200;
}
```
Save and exit (`CTRL+X`, then `Y`, then `ENTER`).

### Step 3: Set the DHCP Server Interface
Edit the defaults file:
```bash
sudo nano /etc/default/isc-dhcp-server
```
Modify the `INTERFACESv4` line:
```plaintext
INTERFACESv4="enp0s3"
```
Save and exit.

### Step 4: Restart and Enable DHCP Service
```bash
sudo systemctl restart isc-dhcp-server
sudo systemctl enable isc-dhcp-server
sudo systemctl status isc-dhcp-server
```

---

## 4. Configure the DNS Server (BIND9)
### Step 1: Edit BIND Configuration
Open the main configuration file:
```bash
sudo nano /etc/bind/named.conf.options
```
Modify it as follows:
```plaintext
options {
    directory "/var/cache/bind";
    listen-on { 192.168.1.1; };
    allow-query { 192.168.1.0/24; };
    forwarders {
        8.8.8.8;
        8.8.4.4;
    };
    dnssec-validation auto;
    auth-nxdomain no;
    listen-on-v6 { none; };
};
```
Save and exit.

### Step 2: Configure a Local DNS Zone
Edit the BIND local configuration file:
```bash
sudo nano /etc/bind/named.conf.local
```
Add:
```plaintext
zone "local.lan" {
    type master;
    file "/etc/bind/db.local.lan";
};
```
Save and exit.

Create a new zone file:
```bash
sudo cp /etc/bind/db.local /etc/bind/db.local.lan
sudo nano /etc/bind/db.local.lan
```
Modify it as follows:
```plaintext
;
; BIND data file for local.lan
;
$TTL    604800
@       IN      SOA     local.lan. admin.local.lan. (
                              2         ; Serial
                         604800         ; Refresh
                          86400         ; Retry
                        2419200         ; Expire
                         604800 )       ; Negative Cache TTL

@       IN      NS      local.lan.
@       IN      A       192.168.1.1
server  IN      A       192.168.1.1
```
Save and exit.

### Step 3: Restart and Enable DNS Service
```bash
sudo systemctl restart bind9
sudo systemctl enable bind9
sudo systemctl status bind9
```

### Step 4: Test the DNS Server
Check if DNS resolves correctly:
```bash
nslookup server.local.lan 192.168.1.1
```
or
```bash
dig server.local.lan @192.168.1.1
```

---

## 5. Configure Clients to Use DHCP & DNS
For client machines:
1. Set **IP to automatic (DHCP)**.
2. Set **DNS server to 192.168.1.1**.

Test connectivity by running:
```bash
ping google.com
ping server.local.lan
```

---

## 6. Troubleshooting
### Check DHCP Logs
```bash
journalctl -u isc-dhcp-server --no-pager | tail -n 20
```
### Check DNS Logs
```bash
journalctl -u bind9 --no-pager | tail -n 20
```
### Check Running Services
```bash
sudo systemctl status isc-dhcp-server
sudo systemctl status bind9
```

---


