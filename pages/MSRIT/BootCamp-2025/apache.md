# Apache2 Installation and Virtual Host Setup for Education Website

This guide outlines the steps to install Apache2, set up a custom document root, and configure a virtual host on an Ubuntu server to serve content from `/var/www/education`.

## Step 1: Update and Install Apache2

Update your package lists and install Apache2:

```bash
sudo apt update
sudo apt install apache2
```

## Step 2: Create the Document Root

Create the directory for your website and adjust the ownership so you can manage the files:

```bash
sudo mkdir -p /var/www/education
sudo chown -R $USER:$USER /var/www/education
```

## Step 3: Create the `index.html` File

Navigate to the document root and create the `index.html` file:

```bash
cd /var/www/education/
nano index.html
```

Add the following HTML content to the file:

```html
<html>
<head>
  <title> Education </title>
</head>
<body>
  <p> Education Website
</body>
</html>
```

Save the file and exit the editor.

## Step 4: Configure the Virtual Host

Navigate to Apache’s sites-available directory and copy the default configuration as a starting point:

```bash
cd /etc/apache2/sites-available/
sudo cp 000-default.conf education.conf
```

Edit the new configuration file:

```bash
sudo nano education.conf
```

**Modify the `DocumentRoot` directive** in `education.conf` so that it points to `/var/www/education`. For example:

```apache
DocumentRoot /var/www/education
```

Save and exit the file.

## Step 5: Enable the New Virtual Host and Reload Apache

Enable your custom site and reload Apache to apply the changes:

```bash
sudo a2ensite education.conf
sudo systemctl reload apache2
```

Disable the default site to ensure your custom virtual host is used:

```bash
sudo a2dissite 000-default.conf
sudo systemctl reload apache2
```

## Step 6: Update Your Hosts File

To test your configuration locally using a custom domain, edit your hosts file:

```bash
sudo nano /etc/hosts
```

Add the following line:

```plaintext
127.0.0.1    education.local
```

## Step 7: Managing Server Logs

   To view the logs:
   ```bash
  tail -f /var/log/apache2/education_access.log
  tail -f /var/log/apache2/education_error.log
   ```

## Step 8: Uninstall Apache2

If you need to uninstall Apache2 from your system, follow these steps:

1. **Stop the Apache2 Service**

   ```bash
   sudo systemctl stop apache2
   ```

2. **Remove the Apache2 Package**

   This command will remove the Apache2 package:
   ```bash
   sudo apt remove apache2
   ```

3. **Purge Apache2 to Remove Configuration Files**

   To remove Apache2 along with its configuration files, run:
   ```bash
   sudo apt purge apache2
   ```

4. **Remove Unnecessary Dependencies**

   Clean up any leftover packages that are no longer needed:
   ```bash
   sudo apt autoremove

Reference: https://ubuntu.com/tutorials/install-and-configure-apache#1-overview