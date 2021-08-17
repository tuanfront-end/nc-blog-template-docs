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
        chisfis
        {`
 
 ├── documentation
 │
 ├── chisfis
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
      <h4>Src folder also includes these subfolders:</h4>
      <ul>
        <li>
          <span className="text-red-400">/app</span> - hooks, actions and store
          of redux toolkit
        </li>
        <li>
          <span className="text-red-400"> /components</span> - React components
        </li>
        <li>
          <span className="text-red-400"> /containers </span>- files for every
          page, and component container (the components have connect with redux)
        </li>
        <li>
          <span className="text-red-400"> /contains </span>- files js colors for
          first letter of avatars have not image.
        </li>
        <li>
          <span className="text-red-400"> /data</span> - JSON data sample files
          for pages and components
        </li>
        <li>
          <span className="text-red-400">/images </span> - logo default and some
          placeholder image.
        </li>
        <li>
          <span className="text-red-400">/fonts </span> - the folders fonts of
          template
        </li>
        <li>
          <span className="text-red-400">/styles </span> - where you can find
          all scss files (you can change colors, fonts, ... on scss files in
          this folder)
        </li>
        <li>
          <span className="text-red-400">/utils </span> - Some common js file.
        </li>
        <li>
          <span className="text-red-400">/templates </span> - We use
          generate-react-cli component for quickly create components. You can
          delete this folder if do not use generate-react-cli.
        </li>
      </ul>
    </div>
  );
};

export default FolderStructure;
