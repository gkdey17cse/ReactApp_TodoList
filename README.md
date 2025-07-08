# 📝 My Todo List

This is a simple React-based Todo List project built as part of my React learning journey by following [CodeWithHarry's YouTube tutorial](https://youtu.be/RGKi6LSPDLU?si=_Fa9HXeQ80t8hqT8). It is currently hosted at - https://gkdey17cse.github.io/ReactApp_TodoList/ 

---

## 📦 Available Scripts

After cloning the repository and running `npm install`, you can run the following commands:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 🚀 Deployment to GitHub Pages

This project is deployed using **GitHub Pages**.

### ✅ One-time Setup

1. Install the `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages

### Update your package.json with the following:

Add a homepage field:
```bash
"homepage": "https://gkdey17cse.github.io/ReactApp_TodoList"
```
Add these deploy scripts under scripts:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
---

### How to Deploy

Make sure all changes are committed:
```bash
git add .  
git commit -m "Your commit message"  
git push origin main
```
Deploy the project:
```bash
npm run deploy
```
---

### Deployment Process (Visual Summary)
```bash
main (your source code)  
  |  
  |  make changes, commit, push  
  V  
npm run deploy  
  |  
  |  builds the app → creates new build/ folder  
  |  pushes to:  
  V  
gh-pages (auto-updated branch for hosting)  
  |  
  V  
GitHub Pages re-serves your new version online
```
---

### Live Demo

Your site is live at:  
`https://gkdey17cse.github.io/ReactApp_TodoList`
