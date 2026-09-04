# 🎁 Birthday / Profile Web Application Setup & Customization Guide

Welcome! This document will guide you step-by-step on how to setup, run, customize, and deploy this web application—even if you only have basic coding knowledge.

---

## 📋 Table of Contents
1. [Prerequisites](#-prerequisites)
2. [How to Run the Project Locally](#-how-to-run-the-project-locally)
3. [How to Customize Images & Media](#-how-to-customize-images--media)
4. [How to Edit Text & Content](#-how-to-edit-text--content)
5. [How to Change Audio & Sounds](#-how-to-change-audio--sounds)
6. [How to Deploy Online (Share with Everyone)](#-how-to-deploy-online-share-with-everyone)
7. [Troubleshooting & FAQs](#-troubleshooting--faqs)

---

## 🛠️ Prerequisites

Before you start, make sure you have the following installed on your computer:

1. **Node.js**: Download and install the LTS version from [nodejs.org](https://nodejs.org/).
2. **Code Editor**: We recommend [VS Code (Visual Studio Code)](https://code.visualstudio.com/).
3. **Unzip Tool**: Extract the zip folder to a location on your computer (e.g., `Desktop` or `Documents`).

---

## 🚀 How to Run the Project Locally

Follow these easy steps to get the project running on your computer:

### Step 1: Open the Project in VS Code
- Open **VS Code**.
- Click **File > Open Folder...** and select the unzipped project folder.

### Step 2: Open the Terminal
- In VS Code, go to the top menu and click **Terminal > New Terminal** (or press ``Ctrl + ` ``).

### Step 3: Install Dependencies
Type the following command in the terminal and press **Enter**:
```bash
npm install
```
*(Wait a couple of minutes for all required packages to install).*

### Step 4: Start the Development Server
Type the following command in the terminal and press **Enter**:
```bash
npm run dev
```

### Step 5: View in Browser
- Open your browser (Chrome, Edge, Safari, etc.).
- Go to: **[http://localhost:3000](http://localhost:3000)**

🎉 You should now see the website running locally on your computer!

---

## 🖼️ How to Customize Images & Media

All the main photos and images used on the website are located inside the `public/` folder.

### 📍 Where are the images stored?
Navigate to:
```
public/
  └── ref/          <-- Main photo gallery & profile images
  └── frames/       <-- Frame assets (if applicable)
  └── pages/        <-- Book pages (if applicable)
  └── elements/     <-- Decorative graphics
```

### 📸 How to replace the photos in the `ref/` folder:

1. Go to the `public/ref/` directory in your file explorer or inside VS Code.
2. You will see images named like:
   - `girl.jpg`
   - `girl2.jpg`
   - `girl3.jpg`
   - ...
   - `girl11.jpg`
   - `heart.jpg`

3. **To replace an image:**
   - **Option A (Easiest)**: Take your new image, rename it to match the exact filename (e.g., rename your new photo to `girl.jpg`), and replace the file inside `public/ref/`.
   - **Option B**: Add your new image into `public/ref/` (e.g., `my_photo.jpg`), then open the website code files inside `components/` or `app/page.tsx` and search for `/ref/girl.jpg`, replacing it with `/ref/my_photo.jpg`.

> 💡 **Tip:** For best visual appearance, try to use images with similar dimensions or high resolution!

---

## ✍️ How to Edit Text & Content

All main page elements, messages, and titles are stored inside the `components/` and `app/` folders.

### Key Files to Edit:

| File Path | Description / What to edit |
| :--- | :--- |
| `app/page.tsx` | Main home page structure, main greetings, title, and section order. |
| `components/BalloonsEffect.tsx` | Balloon animations & floating elements. |
| `components/DraggableCards.tsx` | Interactive photo cards (update photos, captions, or notes). |
| `components/StellarGallery.tsx` | Image gallery grid and slider. |
| `components/ToggleSection.tsx` | Interactive toggle buttons and hidden surprise sections. |

### How to edit text:
1. Open any of the `.tsx` files listed above in VS Code.
2. Press **`Ctrl + F`** (Windows) or **`Cmd + F`** (Mac) to search for the specific text you want to change (e.g., "Happy Birthday" or person's name).
3. Replace the text between the quotes or HTML tags with your custom message.
4. Save the file (`Ctrl + S`). The web page in your browser will automatically update!

---

## 🎵 How to Change Audio & Sounds

Sound files are located in:
```
public/sounds/
```

- To swap a sound effect or background music, replace the files in `public/sounds/` with your own `.mp3` files using the same filenames, or update the audio paths in the code (e.g., in `app/page.tsx` or audio handler components).

---

## 🌐 How to Deploy Online (Share with Everyone)

To share this website with someone using a link, you can deploy it for free using **Vercel**:

1. Create a free account on [Vercel.com](https://vercel.com).
2. Install Vercel CLI (optional) or upload via GitHub:
   - Push this codebase to a private/public **GitHub** repository.
   - Click **Import Project** on Vercel and select your repository.
   - Click **Deploy**.
3. In under 2 minutes, Vercel will give you a shareable link (e.g., `https://your-custom-name.vercel.app`).

---

## ❓ Troubleshooting & FAQs

### Q: Command `npm run dev` gives an error?
- Make sure you ran `npm install` first.
- Make sure Node.js is installed properly by checking `node -v` in your terminal.

### Q: My new images aren't loading/appearing?
- Double-check the file extension (`.jpg` vs `.png` vs `.jpeg`). File names are case-sensitive!
- Clear your browser cache or refresh with `Ctrl + F5`.

### Q: How do I stop the local server?
- In the VS Code terminal, press `Ctrl + C` and type `y` if prompted.

---

*Made with ❤️. Enjoy customizing your project!*
