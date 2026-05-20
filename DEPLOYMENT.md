# GitHub Pages Deployment Guide

## Overview
This portfolio is configured for deployment to GitHub Pages as a user site (elizabethfoster02.github.io).

## Configuration Details

### Vite Base Path
The `vite.config.ts` is configured with `base: '/'`, which is correct for user/organization GitHub Pages sites.

```typescript
export default defineConfig({
  base: '/',  // Correct for elizabethfoster02.github.io
  // ...
})
```

### Build Output
The project builds to the `dist/` directory with:
- `dist/index.html` - Entry point
- `dist/assets/` - Bundled CSS and JavaScript

## Deployment Steps

### Option 1: GitHub Pages from dist/ folder
1. Commit and push all changes to the repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose the branch and set folder to `/dist`
5. Save and wait for deployment

### Option 2: GitHub Actions (Recommended)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Common Deployment Issues & Solutions

### Issue 1: Routing Not Working (404 on Refresh)
**Problem**: Pages work with JavaScript routing but fail on direct refresh
**Solution**: GitHub Pages requires `public/404.html` to redirect to `index.html`

Create `public/404.html`:
```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;url=/">
  </head>
  <body>
  </body>
</html>
```

### Issue 2: CSS Not Loading
**Problem**: Styles work locally but not on GitHub Pages
**Solution**: Ensure `vite.config.ts` has correct base path set

### Issue 3: Assets (Images) Broken
**Problem**: Images reference broken paths
**Solution**: Use relative paths or import images:
```tsx
import image from '../assets/image.png'
<img src={image} alt="description" />
```

### Issue 4: Build Fails in GitHub Actions
**Problem**: Node version or dependency issues
**Solution**: Ensure `.github/workflows/deploy.yml` specifies compatible Node version (16+)

## Pre-Deployment Checklist

- [ ] Build succeeds locally: `npm run build`
- [ ] No TypeScript errors: `npm run lint`
- [ ] `dist/` folder generated with `index.html`
- [ ] Base path in `vite.config.ts` is `/`
- [ ] All links use React Router or relative paths
- [ ] Images imported as modules or use public/ folder
- [ ] `.gitignore` includes `node_modules/` and `dist/`

## Build & Preview Locally

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment-Specific Configuration

For different environments:
- Development: `npm run dev` (localhost:3000)
- Production: `npm run build && npm run preview`
- GitHub Pages: Automatic via GitHub Actions or manual from dist/

## Troubleshooting

**Blank Page on Deploy**: Check browser console for errors, verify vite.config.ts base path
**Flash of Unstyled Content**: CSS bundle might be loading late, minify in build
**Routes Not Working**: React Router basename might need adjustment for GitHub Pages
**Slow Deploy**: Use GitHub Actions for caching, avoid large assets

## Next Steps

1. Push all code to repository
2. Set up GitHub Pages deployment method
3. Test the live site
4. Update contact links and project URLs to point to live versions
