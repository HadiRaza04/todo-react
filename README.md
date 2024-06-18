# <a href="https://todoreact04.netlify.app/">Todo App</a>

![Project Image](./todo.png)

## Project Overview

In this project, I make a todo app and it is totally responsive.

You can easily add your todo work step by step and you can easily edit, mark as completed and delete using just one click.

## Steps to run this project on your local machine

1. Clone this repository on your local machine.<br>Note: For cloning the repository, You have to install git on your machine. You can download git from here <a href="https://git-scm.com/downloads">https://git-scm.com/downloads</a>. And configure your "username" and "email".<br> Run this command 
```
git clone "https://github.com/HadiRaza04/todo-react.git"
```
2. Then open the command prompt OR Powershell run this below command and hit enter. <br> Note: You have to install Node JS on your machine to run this command. You can download Node JS from here <a href="https://nodejs.org/en/download/current">https://nodejs.org/en/download/current</a>.
```
npm install
```
3. In the last step you have to run the script dev command to run the project.
```
npm run dev
```
4. You can visit "http://localhost:5173/" on your default browser to see the project.

# How to Convert a Vite (React App) into PWA (Prograssive Web App)

## Step 1
Goto here <a href="https://favicon.inbrowser.app/tools/favicon-generator">FavIcon Generator</a> and generate all icons and "site.webmanifest" file

## Step 2
Paste all the generated images and file in public folder in the app (all images and site.webmanifest file)

## Step 3
Goto "index.html" file add this given line under the head tag
```
<link rel="manifest" href="/site.webmanifest">
```
## Step 4
Goto "vite.config.js" file and add this give below code and replace all icons with your icons from your generated "site.webmanifest" file.
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
const manifestForPlugin = {
  registerType:'autoUpdate',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    name:"Todo Mobile App",
    short_name:"Todo App",
    description:"Simple app that helps you to do your daily tasks.",
    icons:[{
      "src": "/pwa-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/pwa-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/pwa-maskable-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "/pwa-maskable-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  theme_color:'#07013b',
  background_color:'#e0cc3b',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  },
};
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});
```

## Don't forget to install this
```
npm i vite-plugin-pwa
```