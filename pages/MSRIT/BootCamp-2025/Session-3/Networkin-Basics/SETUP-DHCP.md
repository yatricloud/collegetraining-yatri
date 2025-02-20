
# Setting Up DHCP and DNS Servers for Local Networking

## 1. DHCP Server Setup
A **DHCP (Dynamic Host Configuration Protocol)** server automatically assigns IP addresses to devices (clients) on a network, eliminating the need to manually configure each device.

### Steps to Set Up a DHCP Server on a Linux Server:
1. **Install the DHCP server**:
   On a Linux server, you can install the **ISC DHCP Server** using the following commands:

   ```bash
   sudo apt update
   sudo apt install isc-dhcp-server

	2.	Configure the DHCP server:
The DHCP configuration file is typically located at /etc/dhcp/dhcpd.conf. Edit it to define the network range and settings.
Example of the configuration:

sudo nano /etc/dhcp/dhcpd.conf

Add the following configuration:

# Define the subnet and range of IP addresses to be assigned to clients
subnet 192.168.1.0 netmask 255.255.255.0 {
    range 192.168.1.100 192.168.1.200;  # IP range for clients
    option routers 192.168.1.1;  # Gateway IP
    option domain-name-servers 192.168.1.1;  # DNS server address
    option domain-name "localnetwork";  # Network domain name
    default-lease-time 600;  # Lease time in seconds
    max-lease-time 7200;  # Max lease time in seconds
}


	3.	Define the network interface:
The server needs to know which network interface it should listen on. Open /etc/default/isc-dhcp-server to specify the interface (e.g., eth0):

sudo nano /etc/default/isc-dhcp-server

Change the line to:

INTERFACESv4="eth0"


	4.	Restart the DHCP service:
After configuring, restart the DHCP server to apply the changes:

sudo systemctl restart isc-dhcp-server


	5.	Check the status:
To verify if the DHCP server is running:

sudo systemctl status isc-dhcp-server

2. DNS Server Setup

A DNS server is responsible for resolving domain names to IP addresses. Here, we’ll set up a simple DNS server using BIND (Berkeley Internet Name Domain) on a Linux system.

Steps to Set Up a DNS Server Using BIND:
	1.	Install BIND (DNS Server):
Install the BIND9 package using the following commands:

sudo apt update
sudo apt install bind9 bind9utils bind9-doc


	2.	Configure BIND for Local DNS:
The main configuration file for BIND is /etc/bind/named.conf.local. You need to define your local DNS zones here.
Example configuration for a local domain:

sudo nano /etc/bind/named.conf.local

Add the following lines for your local domain (localnetwork):

zone "localnetwork" {
    type master;
    file "/etc/bind/db.localnetwork";  # Path to your local DNS file
};


	3.	Create the Zone File:
Now, create a zone file that defines how domain names in the localnetwork domain will be resolved.

sudo nano /etc/bind/db.localnetwork

Example contents for the db.localnetwork file:

$TTL    604800
@       IN      SOA     ns1.localnetwork. admin.localnetwork. (
                    2025021701 ; Serial
                    604800     ; Refresh
                    86400      ; Retry
                    2419200    ; Expire
                    604800 )   ; Negative Cache TTL

; Name servers
@       IN      NS      ns1.localnetwork.

; A records for your local devices
ns1     IN      A       192.168.1.1
server  IN      A       192.168.1.2

This defines a DNS zone for localnetwork, with an ns1 and a server host.

	4.	Configure DNS Resolver:
You need to make sure that BIND uses the correct resolver. Edit /etc/bind/named.conf.options:

sudo nano /etc/bind/named.conf.options

Example to use a public DNS resolver (like Google’s DNS):

options {
    directory "/var/cache/bind";
    forwarders {
        8.8.8.8;  # Google's DNS
        8.8.4.4;  # Google's secondary DNS
    };
    allow-query { any; };
};


	5.	Restart BIND Service:
After the configuration is complete, restart the DNS service:

sudo systemctl restart bind9


	6.	Verify DNS Configuration:
To check if your DNS server is working, you can use the dig command to query the local domain:

dig @192.168.1.1 server.localnetwork

It should return the IP address 192.168.1.2 for the server host.

Summary

DHCP Setup:
	•	DHCP Server automatically assigns IP addresses to devices on the network.
	•	Configuration involves editing /etc/dhcp/dhcpd.conf to define IP ranges, gateways, and DNS servers.

DNS Setup:
	•	DNS Server translates domain names into IP addresses.
	•	Configuration involves setting up BIND, creating zone files, and defining local domain settings.

Both DHCP and DNS servers simplify network management and ensure efficient IP address allocation and domain resolution.

