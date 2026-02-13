# Connecting with GitHub

Since Git is not in your system PATH, you might need to use GitHub Desktop or configure Git manually. However, try running these commands in your terminal if you have Git installed:

1.  **Initialize Git:**
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Create a Repository on GitHub:**
    - Go to [github.com/new](https://github.com/new)
    - Name your repository (e.g., `portfolio-scrolly`)
    - Click "Create repository"

3.  **Link and Push:**
    - Copy the commands from the "...or push an existing repository from the command line" section.
    - Run them in your project folder:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/portfolio-scrolly.git
    git branch -M main
    git push -u origin main
    ```

**Note:** If `git` command is not found, please install Git from [git-scm.com](https://git-scm.com/downloads) and restart your terminal.
