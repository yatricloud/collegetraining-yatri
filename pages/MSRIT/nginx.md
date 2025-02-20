# Nginx Installation, Server Block Setup, and Uninstallation for Education Website

This guide provides step-by-step instructions to install Nginx, configure a custom server block to serve your website from `/var/www/education`, and uninstall Nginx if needed.

## Step 1: Update and Install Nginx

First, update your package lists and install Nginx:

```bash
sudo apt update
sudo apt install nginx
```

## Step 2: Create the Document Root

Create a directory for your website and adjust its ownership:

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

Add the following HTML content:

```html
<html>
<head>
  <title> Ubuntu rocks! </title>
</head>
<body>
  <p> I'm running this website on an Ubuntu Server with Nginx!
</body>
</html>
```

Save the file and exit the editor.

## Step 4: Configure the Server Block

Create a new server block configuration file in Nginx’s `sites-available` directory:

```bash
sudo nano /etc/nginx/sites-available/education
```

Paste the following configuration into the file:

```nginx
server {
    listen 80;
    server_name education.local;
    root /var/www/education;
    index index.html index.htm;
    
    access_log /var/log/nginx/education_access.log;
    error_log /var/log/nginx/education_error.log;
    
    location / {
        try_files $uri $uri/ =404;
    }
}
```

Save and exit the file.

## Step 5: Enable the New Server Block and Reload Nginx

Enable the configuration by creating a symbolic link to the `sites-enabled` directory, then test and reload Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/education /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## Step 6: Update Your Hosts File

To test your configuration locally using the custom domain, edit your hosts file:

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
   tail -f /var/log/nginx/education_access.log
   tail -f /var/log/nginx/education_error.log
   ```

## Step 8: Uninstall Nginx

If you need to uninstall Nginx from your Ubuntu system, follow these steps:

1. **Stop the Nginx Service**

   ```bash
   sudo systemctl stop nginx
   ```

2. **Remove the Nginx Package**

   ```bash
   sudo apt remove nginx
   ```

3. **Purge Nginx to Remove Configuration Files**

   ```bash
   sudo apt purge nginx
   ```

4. **Remove Unnecessary Dependencies**

   ```bash
   sudo apt autoremove
   ```
