#!/bin/bash

# Prompt for project name
echo -n "Enter project name: "
read project_name

# Prompt for virtual environment name
echo -n "Enter virtual environment name: "
read venv_name

# Prompt for git project url
echo -n "Enter git project url (default: https://github.com/yourusername/yourproject.git): "
read git_project_url

if [ -z "$git_project_url" ]; then
    git_project_url="https://github.com/yourusername/yourproject.git"
fi

# Prompt for server name
echo -n "Enter server name (default: localhost): "
read server_name

if [ -z "$server_name" ]; then
    server_name="localhost"
fi

# Clone the project repository
git clone $git_project_url

# Change directory to the project
cd $project_name

# Create a virtual environment and activate it 
python3 -m venv $venv_name
source $venv_name/bin/activate

# Install dependencies
pip install -r requirement.txt

# Create a new Gunicorn systemd service file
sudo bash -c "cat <<EOF > /etc/systemd/system/gunicorn.service
[Unit]
Description=gunicorn daemon
After=network.target

[Service]
User=yourusername
Group=www-data
WorkingDirectory=/path/to/$project_name
ExecStart=/path/to/$venv_name/bin/gunicorn --workers 3 --bind unix:/path/to/$project_name/$project_name.sock $project_name.wsgi:application

[Install]
WantedBy=multi-user.target
EOF"

# Start and enable the Gunicorn service
sudo systemctl start gunicorn
sudo systemctl enable gunicorn

# Create a new Nginx systemd service file
sudo bash -c "cat <<EOF > /etc/nginx/sites-available/$project_name
server {
    listen 80;
    server_name $server_name;

    location = /favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        root /path/to/$project_name;
    }

    location / {
        include proxy_params;
        proxy_pass http://unix:/path/to/$project_name/$project_name.sock;
    }
}
EOF"

# Create a symbolic link to the file in the sites-enabled directory
sudo ln -s /etc/nginx/sites-available/$project_name /etc/nginx/sites-enabled

# Start and enable the Nginx service
sudo systemctl start nginx
sudo systemctl enable nginx

# Display success message
echo "Deployment of $project_name complete!"
