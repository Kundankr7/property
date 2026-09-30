# Netlify Deployment & Configuration Guide

## Prerequisites
- [ ] Project pushed to Git repository (GitHub/GitLab/Bitbucket)
- [ ] Next.js build verified locally: `npm run build`
- [ ] Environment variables configured (if any)

## Step 1: Deploy to Netlify

### Option A: Connect via Git (Recommended)
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Select your Git provider and authorize
4. Select your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next` (Next.js default)
   - **Node version**: 18.x or higher
6. Deploy!

### Option B: Manual Deploy via Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## Step 2: Verify Form Detection

### Netlify Forms Auto-Detection
1. Once deployed, go to **Netlify Dashboard > Forms**
2. You should see **"contact-form"** listed automatically
3. Form submissions will appear in real-time

### If Form Not Detected:
- Verify form has `netlify` attribute
- Verify form has `name="contact-form"`
- Verify form is in server-rendered HTML (not dynamically created only)
- Redeploy site after verifying form code

### Form Submission Settings:
1. Click on **"contact-form"** in Forms dashboard
2. **Notifications**: Set up email alerts for submissions
3. **Integrations**: Connect to Slack, Discord, Zapier, etc.
4. **Spam filtering**: Enable if needed

---

## Step 3: Configure DNS

### Add Custom Domain
1. Go to **Netlify Dashboard > Domain management**
2. Click "Add custom domain"
3. Enter: `onestoppropertysolution.in`
4. Update DNS records at your domain registrar:
   ```
   CNAME: www.onestoppropertysolution.in → your-site.netlify.app
   ```
5. Add redirect from root domain to www (in Netlify or registrar)

### SSL/HTTPS
- [ ] Automatic SSL certificate via Let's Encrypt (enabled by default)
- [ ] Verify in **Netlify > Domain management > SSL/TLS certificates**
- [ ] Wait 24 hours for certificate generation if using custom domain

---

## Step 4: Environment Variables (if needed)

In **Netlify Dashboard > Site settings > Build & deploy > Environment**:
```
NEXT_PUBLIC_API_URL = https://api.example.com
```

---

## Step 5: Verify SEO Setup

### Check Search Engine Verification Codes
You need to add your verification codes before submitting sitemap. Update `app/layout.js`:

```javascript
// Line ~108 - Google Search Console
<meta name="google-site-verification" content="YOUR-GOOGLE-CODE" />

// Line ~114 - Bing Webmaster Tools  
"other": {
  "bing-site-verification": "YOUR-BING-CODE",
},
```

Then redeploy with these codes added.

### Submit Sitemaps
1. **Google Search Console**:
   - Go to https://search.google.com/search-console
   - Add property: `https://onestoppropertysolution.in`
   - Submit sitemap: `https://onestoppropertysolution.in/sitemap.xml`

2. **Bing Webmaster Tools**:
   - Go to https://www.bing.com/webmasters
   - Add your site
   - Submit sitemap: `https://onestoppropertysolution.in/sitemap.xml`

---

## Step 6: Verify Netlify Features

### Check Form Functionality
1. Navigate to https://onestoppropertysolution.in/contact
2. Fill out contact form
3. Check **Netlify Dashboard > Forms > contact-form** for submission
4. Response should show "Message Received!" (client-side confirmation)

### Test Image Loading
- [ ] Gallery images load: https://onestoppropertysolution.in/#gallery
- [ ] Sachin's photo loads correctly
- [ ] All WebP images display properly
- [ ] Test on slow 3G network (DevTools)

### Test Responsive Design
- [ ] Mobile view: Gallery displays 2 columns
- [ ] Tablet view: Gallery displays 3 columns
- [ ] Desktop view: Gallery displays 3 columns
- [ ] Form is usable on all devices

---

## Step 7: Set Up Monitoring

### Netlify Analytics (Optional)
1. In **Site settings > Analytics**
2. Enable Netlify Analytics
3. Monitor:
   - Page views
   - Bandwidth usage
   - Build minutes

### Set Up Alerts
In **Site settings > Build & deploy > Branch deploy contexts**:
- [ ] Notify on deploy failures
- [ ] Notify on successful deploys

---

## Step 8: Performance Optimization

### Enable Netlify Features
1. **Edge Functions** (optional): For server-side redirect logic
2. **Netlify Serverless Functions** (if API calls needed)
3. **Image CDN**: Enable in Site settings for image optimization

### Caching Strategy
In **Site settings > Build & deploy > Post processing**:
- [ ] Enable minifying CSS/JS
- [ ] Enable minifying HTML (verify output looks correct)
- [ ] Enable pretty URLs

### Security Headers
In **netlify.toml** (create if doesn't exist):
```toml
[[headers]]
for = "/*"
[headers.values]
X-Frame-Options = "DENY"
X-Content-Type-Options = "nosniff"
X-XSS-Protection = "1; mode=block"
Referrer-Policy = "no-referrer-when-downgrade"
Permissions-Policy = "geolocation=()"
```

---

## Step 9: Continuous Integration

### Auto-Deploy on Git Push
Already configured! Every push to your repository will:
1. Trigger Netlify build
2. Run build command: `npm run build`
3. Deploy if successful
4. Redirect old URLs to new ones

### Preview Deploys
- Every branch gets its own preview URL
- Pull requests show deployment preview
- Perfect for testing before merging to production

---

## Step 10: Monitor After Deployment

### First Week
- [ ] Check Netlify Dashboard daily for errors
- [ ] Monitor form submissions
- [ ] Test all links work
- [ ] Check mobile responsiveness
- [ ] Verify analytics working

### First Month
- [ ] Monitor Search Console for crawl errors
- [ ] Check Core Web Vitals in PageSpeed Insights
- [ ] Monitor form submission quality
- [ ] Track organic traffic increase
- [ ] Check search rankings for target keywords

---

## Troubleshooting

### Form Not Submitting
**Issue**: Contact form shows "Message Received" but doesn't appear in Netlify Forms
**Solution**:
1. Verify form has `name="contact-form"` attribute
2. Verify form has `netlify` attribute
3. Check for JavaScript errors in console
4. Clear browser cache and retry
5. Redeploy site

### Images Not Loading
**Issue**: Gallery or Sachin images not showing
**Solution**:
1. Verify file paths: `/gallery/01.webp`, `/gallery/sachin.jpeg`, etc.
2. Check file extensions match exactly (case-sensitive)
3. Verify files exist in `public/gallery/` folder
4. Clear browser cache
5. Check Network tab in DevTools for 404 errors

### SEO Not Improving
**Issue**: Keywords still not ranking
**Solution**:
1. Wait 2-4 weeks for Google to crawl and index
2. Submit sitemap in Google Search Console
3. Add search verification codes
4. Create more content targeting keywords
5. Build backlinks from authority sites
6. Check rankings in Search Console Performance report

### Build Failures
**Issue**: Deployment shows red X
**Solution**:
1. Check **Netlify Dashboard > Deploys > Latest** for error message
2. Common issues:
   - `npm run build` fails locally first
   - Missing environment variables
   - Node version incompatibility
3. Fix locally, commit, and push to retrigger

---

## Useful Netlify Links

- **Dashboard**: https://app.netlify.com
- **Documentation**: https://docs.netlify.com
- **Build Config**: https://docs.netlify.com/configure-builds/overview
- **Forms Setup**: https://docs.netlify.com/forms/setup
- **DNS Settings**: https://docs.netlify.com/domains-https/netlify-dns
- **Edge Functions**: https://docs.netlify.com/edge-functions/overview

---

## Rollback Procedure

If something breaks:

1. Go to **Netlify Dashboard > Deploys**
2. Find the last working deployment
3. Click **...** menu → **Publish deploy**
4. Site rolls back immediately
5. Fix code and redeploy

---

## Post-Deployment Checklist

- [ ] Site loads at https://onestoppropertysolution.in
- [ ] Contact form works and stores submissions
- [ ] All images load correctly
- [ ] Mobile responsive design works
- [ ] Search Console shows valid sitemap
- [ ] Analytics tracking working
- [ ] Google verification code submitted
- [ ] Bing verification code submitted
- [ ] Schema markup validates
- [ ] No broken links
- [ ] SSL certificate active (green lock)
- [ ] Core Web Vitals acceptable
- [ ] Forms receiving submissions

---

## Monthly Maintenance

- [ ] Review Netlify build logs for warnings
- [ ] Monitor form submissions and respond quickly
- [ ] Check Search Console for new errors
- [ ] Review Core Web Vitals trends
- [ ] Test all contact methods (phone, WhatsApp, email)
- [ ] Verify analytics accuracy
- [ ] Check for security updates to dependencies

---

*Last Updated: April 28, 2026*
*For support: Check Netlify Dashboard > Site Settings > Support*
