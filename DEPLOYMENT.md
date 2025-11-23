# Deployment Instructions

Your landing page is configured for automatic deployment to Cloudflare Pages.

## One-Time Setup (5 minutes)

### 1. Get Cloudflare API Token
1. Go to [https://dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Click "Create Token"
3. Use "Edit Cloudflare Workers" template or create custom with:
   - Permissions: `Account > Cloudflare Pages > Edit`
4. Copy the token

### 2. Get Cloudflare Account ID
1. Go to [https://dash.cloudflare.com](https://dash.cloudflare.com)
2. Select any site or go to Workers & Pages
3. Copy the Account ID from the right sidebar (or URL)

### 3. Add Secrets to GitHub
1. Go to your repo: [https://github.com/culturenteam/hio.space_landing/settings/secrets/actions](https://github.com/culturenteam/hio.space_landing/settings/secrets/actions)
2. Click "New repository secret"
3. Add two secrets:
   - Name: `CLOUDFLARE_API_TOKEN` → Value: (token from step 1)
   - Name: `CLOUDFLARE_ACCOUNT_ID` → Value: (ID from step 2)

### 4. Push This Code
```bash
git add .
git commit -m "Add Cloudflare Pages deployment"
git push
```

### 5. Connect Your Domain
1. Go to [https://dash.cloudflare.com](https://dash.cloudflare.com) → Workers & Pages
2. Find your `hio-space` project
3. Go to Custom domains → Add custom domain
4. Enter your domain (e.g., `hio.space`)
5. Follow DNS instructions (automatic if domain is on Cloudflare)

## After Setup

Every time you push to main/master branch:
- GitHub Actions automatically builds your site
- Deploys to Cloudflare Pages
- Available at your custom domain in ~1 minute

## Preview URL
Before connecting domain, your site will be at:
`https://hio-space.pages.dev`
