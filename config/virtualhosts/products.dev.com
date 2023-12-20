server {
        listen 80;
        server_name products.dev.com;
        
        root /var/www/html/app/public_html;
        
        index pages/home.html;
        
        location / {
                try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
                include fastcgi_params;
                fastcgi_pass unix:/run/php/php8.2-fpm.sock;
                fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        }
}