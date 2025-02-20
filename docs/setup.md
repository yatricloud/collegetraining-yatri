# Project Setup Guide

This guide will help you set up the project on your local machine.

## Prerequisites

Make sure the following are installed on your system:

- **Node.js** (version 14.x or higher)
- **npm** (Node package manager)
- **pnpm** (Fast, disk space efficient package manager)

### Install Node.js and npm

If Node.js and npm are not installed, follow these steps:

For **Linux (Ubuntu)**:

```bash
sudo apt update
sudo apt install nodejs npm -y
```

For **macOS**:

```bash
brew install node
```

For **Windows**:

Download the latest version of Node.js from [Node.js official website](https://nodejs.org) and follow the installer.

After installation, check the versions to ensure proper setup:

```bash
node -v
npm -v
```

### Install pnpm

pnpm is required to manage packages for this project. Install it globally using npm:

```bash
npm install -g pnpm
```

### Verify the installation:

```bash
pnpm -v
```

## Project Setup

Follow the steps below to set up the project:

### 1. Clone the Repository

Clone the repository to your local machine using git:

```bash
git clone <repository-url>
cd <project-folder>
```

### 2. Install Dependencies

Install all project dependencies using pnpm:

```bash
pnpm i
```

### 3. Start the Development Server

Once all dependencies are installed, start the development server:

```bash
pnpm dev
```

The project should now be running on `http://localhost:3000`. You can view the site in your browser.

### 4. Troubleshooting Common Issues

#### Command Not Found: pnpm

If pnpm is not recognized after installation, ensure that the global npm directory is in your system’s `PATH`:

- **Windows**: 

```bash
 pnpm add nextra nextra-theme-docs
```
Add `C:\Users\<YourUsername>\AppData\Roaming\npm` to the system’s `PATH`.
- **macOS/Linux**: Add the following line to your shell configuration file (`.bashrc` or `.zshrc`):

    ```bash
    export PATH="$PATH:$(npm bin -g)"
    ```

    Then run:

    ```bash
    source ~/.bashrc   # For bash users
    source ~/.zshrc    # For zsh users
    ```

#### Node.js Version Issues

Ensure you are running Node.js version 14.x or higher. You can update Node.js using `nvm` (Node Version Manager):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.nvm/nvm.sh
nvm install 18
nvm use 18
```

After updating, remove the existing `node_modules` folder and reinstall dependencies:

```bash
rm -rf node_modules
pnpm i
```

### Production

```bash
pnpm clean # Clean any cached modules
pnpm install
pnpm build
git add .
git commit -m "message"
git push origin <branch>
```

### 5. Additional Commands

To install new dependencies:

```bash
pnpm add <package-name>
```

To remove dependencies:

```bash
pnpm remove <package-name>
```
