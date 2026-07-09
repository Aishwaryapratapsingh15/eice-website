# Server Setup — Production Deployment

Server: `cloud-server-9999600` (same server jahan staging bhi hai)

## Ports

| Environment | Container name           | Port          | Compose file             |
|-------------|---------------------------|---------------|---------------------------|
| Staging     | `eicetech-website`        | `3009:3000`   | `docker-compose.yml`      |
| Production  | `eicetech-website-prod`   | `3010:3000`   | `docker-compose.prod.yml` |

## 1. Container start karna (production folder ke andar)

```bash
cd /path/to/production-folder
# .env file yahan honi chahiye (production endpoints ke saath)
docker compose -f docker-compose.prod.yml up -d --build
```

Useful commands:

```bash
docker compose -f docker-compose.prod.yml ps
docker compose -f docker-compose.prod.yml logs -f
docker compose -f docker-compose.prod.yml down
```

Deploy karne se pehle confirm karo container respond kar raha hai:

```bash
curl -I http://localhost:3010
```

## 2. Nginx config — `eicetechnology.com`

Abhi `eicetechnology.com` purana static/PHP site serve karta hai
(`root /opt/lampp/htdocs/eicetechnology/`). Isko naye Next.js
production container (port 3010) par proxy karna hai.

### Backup pehle

```bash
sudo cp /etc/nginx/sites-available/eicetechnology.com /etc/nginx/sites-available/eicetechnology.com.bak-$(date +%Y%m%d)
```

### Naya config (`/etc/nginx/sites-available/eicetechnology.com`)

```nginx
server {
    listen 443 ssl;
    server_name eicetechnology.com www.eicetechnology.com;

    location / {
        proxy_pass http://localhost:3010;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Content-Security-Policy "default-src 'self'; frame-src 'self' https://rise.eicetechnology.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' data: https: https://fonts.gstatic.com; connect-src 'self' https://rise.eicetechnology.com https://www.google-analytics.com https://region1.google-analytics.com;" always;

    server_tokens off;

    ssl_certificate /etc/letsencrypt/live/eicetechnology.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/eicetechnology.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    listen 80;
    server_name eicetechnology.com www.eicetechnology.com;
    return 301 https://$host$request_uri;
}
```

### Apply karna

```bash
sudo nano /etc/nginx/sites-available/eicetechnology.com
# (purana content hata ke upar wala naya config paste karo, save karo)

sudo nginx -t
sudo systemctl reload nginx
```

### Rollback (agar kuch galat ho)

```bash
sudo cp /etc/nginx/sites-available/eicetechnology.com.bak-<date> /etc/nginx/sites-available/eicetechnology.com
sudo nginx -t
sudo systemctl reload nginx
```

## 2a. Known issue — GA real-time data missing / Google Fonts not loading

Root cause: CSP header above blocked `googletagmanager.com` (script-src) and
`fonts.googleapis.com` (style-src), so both got silently blocked by the
browser (visible as `(blocked:csp)` in DevTools Network tab). Fixed in the
CSP line above — script-src now allows GTM, connect-src allows the GA
beacon endpoints, style-src/font-src allow Google Fonts.

Verify after reload:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

- Open the site, DevTools → Network → filter by "google" — `gtag/js` and
  `collect`/`g/collect` requests should show status 200/204, not `(blocked:csp)`.
- Check GA → Reports → Realtime — should show the active session within a
  few seconds of hitting a page.
- Console tab should show 0 CSP errors for `googletagmanager.com` /
  `fonts.googleapis.com`.

## 3. Purana React/PHP site (`/opt/lampp/htdocs/eicetechnology/`)

Delete mat karo turant. Production 1-2 hafte stable chalne ke baad:

```bash
sudo mv /opt/lampp/htdocs/eicetechnology /opt/lampp/htdocs/eicetechnology_old_react_backup
```

Nginx config ka `.bak-<date>` file bhi tab tak rakhna — rollback plan hai.
