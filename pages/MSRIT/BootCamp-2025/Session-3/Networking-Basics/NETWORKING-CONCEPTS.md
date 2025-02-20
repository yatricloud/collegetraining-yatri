## 1. IP Addressing, Subnetting, and DNS Configuration

### 1.1 Understanding IP Addresses
- **IPv4 Basics**:
  - An IP address is a unique identifier for a device on a network.
  - It consists of four octets (e.g., 192.168.1.1) and follows the format of `X.X.X.X`, where `X` ranges from 0 to 255.
  - Classes: A (1.0.0.0 to 126.255.255.255), B (128.0.0.0 to 191.255.255.255), C (192.0.0.0 to 223.255.255.255), D (Multicast), E (Experimental).
  - Private IP Ranges:
    - Class A: 10.0.0.0 - 10.255.255.255
    - Class B: 172.16.0.0 - 172.31.255.255
    - Class C: 192.168.0.0 - 192.168.255.255
  - Public vs. Private IPs: Private IPs are used within local networks, while public IPs are routable over the internet.
  
- **IPv6 Basics**:
  - A 128-bit address written in hexadecimal format (e.g., `2001:0db8:85a3::8a2e:0370:7334`).
  - Supports a much larger number of unique addresses.
  - Designed to replace IPv4 due to address exhaustion.
  
### 1.2 Understanding Subnetting
- **Subnet Mask**:
  - Defines which portion of the IP address is the network and which is the host.
  - Example: `255.255.255.0` means the first three octets represent the network, and the last octet represents hosts.

- **CIDR Notation**:
  - Written as `IP/Prefix` (e.g., `192.168.1.0/24`).
  - `/24` means the first 24 bits are for the network, leaving 8 bits for host addresses.

- **Subnetting Example**:
  - If we divide `192.168.1.0/24` into two subnets:
    - `192.168.1.0/25` (First half: 192.168.1.1 to 192.168.1.126)
    - `192.168.1.128/25` (Second half: 192.168.1.129 to 192.168.1.254)
  - This allows better allocation of IPs within large networks.

### 1.3 DNS (Domain Name System) Configuration
- **How DNS Works**:
  - Translates domain names (e.g., `google.com`) into IP addresses.
  - Uses a hierarchy of DNS servers (Root, TLD, and Authoritative).
  
- **Types of DNS Records**:
  - `A` (Address Record) – Maps a domain to an IPv4 address.
  - `AAAA` – Maps a domain to an IPv6 address.
  - `CNAME` (Canonical Name) – Redirects one domain to another.
  - `MX` (Mail Exchange) – Defines mail servers for a domain.
  - `PTR` (Pointer Record) – Reverse DNS lookup.
  
- **Setting Up a Local DNS Server**:
  - Install a DNS server package (`bind9` on Linux).
  - Configure `/etc/bind/named.conf.local` to define zones.
  - Add zone files (`/var/named/example.com.zone`) with DNS records.
  - Restart the DNS service and test using `nslookup` or `dig`.

---

## 2. Hands-On Lab

### 2.1 Setting Up a Simple Local Network Using Multiple Machines

#### Prerequisites:
- At least two computers (or virtual machines).
- A router or switch (or software-defined networking tools like VirtualBox’s NAT).
- Network cables (if using physical machines).

#### Steps:
1. **Assign Static IPs** (or use DHCP for automatic IP assignment).
   - Example:
     - PC1: `192.168.1.10/24`
     - PC2: `192.168.1.11/24`
     - Gateway (Router): `192.168.1.1/24`
2. **Enable DHCP Server** on one machine (if required):
   - Install `isc-dhcp-server` on Linux.
   - Configure `/etc/dhcp/dhcpd.conf`:
     ```
     subnet 192.168.1.0 netmask 255.255.255.0 {
         range 192.168.1.50 192.168.1.100;
         option routers 192.168.1.1;
         option domain-name-servers 8.8.8.8;
     }
     ```
   - Restart the DHCP service: `sudo systemctl restart isc-dhcp-server`.
   
3. **Enable DNS Resolution**:
   - Set primary DNS server to `192.168.1.1` on all devices.
   - Verify DNS resolution using `nslookup example.com`.
   
4. **Network Connectivity Test**:
   - Ping test between machines: `ping 192.168.1.11` from `192.168.1.10`.
   - Check default gateway: `ip route show`.

---

### 2.2 Troubleshooting Common Network Issues
#### Issue 1: No Internet Connectivity
- **Check IP Configuration**: `ip addr show` (Linux) or `ipconfig` (Windows).
- **Verify Default Gateway**: `ip route` or `tracert 8.8.8.8`.
- **DNS Resolution**: Test using `nslookup google.com`.

#### Issue 2: IP Conflict
- Check for duplicate IPs using `arp -a`.
- Use DHCP to avoid static IP conflicts.

#### Issue 3: Firewall Blocking Connections
- Disable firewall temporarily: `sudo ufw disable` (Linux) or `netsh advfirewall set allprofiles state off` (Windows).
- Add firewall rules to allow necessary traffic.

#### Issue 4: Slow Network
- Check bandwidth usage: `iftop` (Linux) or `task manager` (Windows).
- Restart the router or switch.
- Reduce interference if using Wi-Fi.

---


