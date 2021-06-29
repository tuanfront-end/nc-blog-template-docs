import React from "react";
import install1 from "images/docs/install1.png";
import install2 from "images/docs/install2.png";
import install3 from "images/docs/install3.png";
import install4 from "images/docs/install4.png";

const Install = () => {
  return (
    <div>
      <h3>
        <strong className="font-bold underline">*Note:</strong>
      </h3>
      <strong>
        Please install according to our instructions below. Installation by
        yourself may lead to unexpected errors.
      </strong>
      {/* ================== STEP 1 ================== */}
      <div className="step">
        <p>
          1. Extract the <strong>nc-blog.zip</strong> file.
        </p>
        <div>
          <p>
            2. Open the Terminal, write a <code>cd</code> and space and drag the
            folder into the Terminal, and press ENTER.
          </p>
          <img src={install1} alt="install1" />
        </div>
      </div>

      {/* ================== STEP 2 ================== */}
      <div>
        <p>
          4. Write <code>npm install</code> or <code>yarn</code> if you use yarn
          instead npm , press enter and wait for the system to finish installing
          all the plugins.
        </p>
        <figure>
          <img src={install2} alt="install2" />
          <figcaption>installing all the plugins</figcaption>
        </figure>
      </div>

      {/* ================== STEP 3 ================== */}
      <div>
        <p>
          3. Write{" "}
          <code>
            npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat
            postcss@^7 autoprefixer@^9
          </code>{" "}
          or{" "}
          <code>
            yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7
            autoprefixer@^9
          </code>
          , press enter and wait for the system to finish installing tailwindcss
          all the plugins.
        </p>
      </div>

      {/* ================== STEP 4 ================== */}
      <div>
        <p>
          4. Once the installation is completed successfully without errors you
          can run the template in the <code>npm run start</code> or with yarn is{" "}
          <code>yarn start</code> command.
        </p>
        <figure>
          <img src={install3} alt="install3" />
        </figure>
      </div>

      {/* ================== STEP 5 ================== */}
      <div>
        <p>
          5. Open browser in next URL: <strong>localhost:3000</strong> command.
        </p>
        <figure>
          <img src={install4} alt="install4" />
        </figure>
      </div>

      {/* ================== STEP 6 ================== */}
      <div>
        <p>6. All done. Thank you.</p>
      </div>
    </div>
  );
};

export default Install;
