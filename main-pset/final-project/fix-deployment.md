# Fix GitHub Pages Deployment Issue

## Problem
The `npm ci` command fails because package.json and package-lock.json are out of sync:
- package.json specifies `vite: ^5.0.0`
- package-lock.json contains `vite: 6.3.5`

## Solution 1: Regenerate package-lock.json (Recommended)

1. Delete the current package-lock.json:
```bash
cd main-pset/final-project
rm package-lock.json
```

2. Delete node_modules to ensure a clean install:
```bash
rm -rf node_modules
```

3. Reinstall dependencies (this creates a new package-lock.json):
```bash
npm install
```

4. Verify the build works locally:
```bash
npm run build
```

5. Commit the new package-lock.json:
```bash
git add package-lock.json
git commit -m "fix: regenerate package-lock.json to match package.json versions"
git push
```

## Solution 2: Update package.json to use newer versions

If you want to use the newer versions (vite 6.x), update package.json:

```json
{
  "devDependencies": {
    "sass": "^1.77.8",
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "vite": "^6.0.0"
  }
}
```

Then run:
```bash
npm install
npm run build
```

## Why This Happened
This typically occurs when:
- Someone ran `npm update` or `npm install package@latest`
- The lock file was updated but package.json wasn't
- Different npm versions were used

## Prevention
- Always commit both package.json and package-lock.json together
- Use `npm ci` in development to catch these issues early
- Consider using exact versions for critical dependencies
