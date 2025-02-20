

# IP Addressing, Subnetting, and DNS Configuration

## 1. IP Addressing
An **IP address** (Internet Protocol Address) is a unique identifier assigned to each device on a network. It helps devices communicate with each other across the internet or local networks.

### Types of IP Addresses:
- **IPv4 (Internet Protocol version 4)**: Consists of 4 sets of numbers (0-255) separated by periods. Example: `192.168.1.1`.
- **IPv6 (Internet Protocol version 6)**: Longer format to handle more devices. Example: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`.

### Structure of IPv4:
IPv4 addresses are written as four 8-bit sections (also called "octets"). Each section can range from 0 to 255. Example:

192.168.1.1

- **First octet (192)**: Represents the network address.
- **Second octet (168)**: Represents a subnetwork.
- **Third octet (1)**: Represents a subnet of the local network.
- **Last octet (1)**: Represents a specific device (host).

---

## 2. Subnetting
Subnetting is the practice of dividing a larger network into smaller, manageable sub-networks (subnets). This helps improve network performance, security, and management.

### Key Terms:
- **Subnet Mask**: Defines the size of the network. It determines which part of the IP address is the network portion and which part is for hosts.
  - Example of a subnet mask: `255.255.255.0`
  - It tells devices that the first 3 octets (e.g., `192.168.1`) represent the network part, and the last octet (`1-255`) is for devices on that network.

- **CIDR (Classless Inter-Domain Routing)**: This is a shorthand for writing subnet masks using a `/` followed by the number of bits for the network. Example: `192.168.1.0/24`.
  - The `/24` means the first 24 bits are used for the network part, leaving 8 bits for the hosts.

### Example of Subnetting:
If we have the network `192.168.1.0/24`, and we want to divide it into smaller subnets, we might do the following:
- **Subnet 1**: `192.168.1.0/25` (First half of the IP range)
- **Subnet 2**: `192.168.1.128/25` (Second half of the IP range)

### Why Subnetting?
- **Efficiency**: Allocating IPs as needed without wasting address space.
- **Security**: Isolating sensitive data by using different subnets.
- **Performance**: Reducing network congestion by limiting the number of devices in each subnet.

---

## 3. DNS Configuration
**DNS (Domain Name System)** is like the phonebook of the internet. It translates domain names (like `www.example.com`) into IP addresses (like `192.168.1.1`), allowing devices to find each other.

### How DNS Works:
1. You enter a domain name (e.g., `www.example.com`) in your browser.
2. The browser sends a request to a DNS server to get the IP address for that domain.
3. The DNS server responds with the corresponding IP address.
4. Your browser uses that IP address to connect to the website.

### Types of DNS Records:
- **A Record**: Points a domain to an IPv4 address.
  - Example: `example.com A 192.168.1.1`
- **AAAA Record**: Points a domain to an IPv6 address.
  - Example: `example.com AAAA 2001:0db8:85a3:0000:0000:8a2e:0370:7334`
- **CNAME Record**: Aliases one domain to another.
  - Example: `www.example.com CNAME example.com`
- **MX Record**: Specifies mail servers for the domain.
  - Example: `example.com MX mail.example.com`

---

## Summary

- **IP Addressing**: Unique identifiers for devices in a network.
- **Subnetting**: Dividing a network into smaller parts for efficient use and security.
- **DNS Configuration**: Translates domain names to IP addresses for network communication.

