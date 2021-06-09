import React from "react";

const FolderStructure = () => {
  return (
    <div>
      <h3>Let's talk about what's inside the downloaded package.</h3>
      <p>
        Once you purchased our theme you've to download The All Files &
        Documentation zip file. Following folder structure is based on that zip
        file, in that zip file only you'll get all of our theme files including
        demo content & offline documentation folder.
      </p>
      <pre className="!leading-tight">
        nc-blog
        {`
 
 ├── documentation
 │
 ├── ncblog
    │
    ├── package.json
    ├── tsconfig.json
    ├── craco.config.js
    ├── manifest.json
    ├── tailwind.config.js
    │
    ├── public
    │   │
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    │   
    ├── build
    │   │
    │   ├── static
    │   │   │
    │   │   ├── css
    │   │   ├── js
    │   │   └── media
    │   │
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    │   
    └── src
        │
        ├── app
        ├── components 
        ├── constants
        ├── containers
        ├── data
        ├── fonts
        ├── images
        ├── routers
        ├── styles
        ├── utils
        ├── App.tsx
        ├── index.css
        ├── index.tsx
        └── reportWebVitals.ts`}
      </pre>
    </div>
  );
};

export default FolderStructure;
