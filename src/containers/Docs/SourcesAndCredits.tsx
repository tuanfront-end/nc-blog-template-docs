import React from "react";

const SourcesAndCredits = () => {
  return (
    <div>
      <p>
        Fonts Used int the template are google fonts, you can find theme on
        Google Fonts API
      </p>
      <ol>
        <li>
          <strong>Fonts Used are :</strong>
          <ul>
            <li>Inter</li>
            <li>Poppins</li>
          </ul>
        </li>

        {/*  */}
        <li>
          <strong> Icons Used are :</strong>
          <ul>
            <li>
              <a
                href="https://icons8.com/line-awesome"
                target="_blank"
                rel="noopener noreferrer"
              >
                line-awesome-1.3.0
              </a>
            </li>
            <li>
              <a
                href="https://heroicons.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                heroicons (icon svg)
              </a>
            </li>
          </ul>
        </li>
        {/*  */}
        <li>
          <strong> Images, vectors :</strong>
          <ul>
            <li>
              Pexels:{" "}
              <a
                href="http://Pexels.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pexels.com
              </a>
            </li>
            <li>
              Unsplash:{" "}
              <a
                href="http://Unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash.com
              </a>
            </li>
          </ul>
        </li>
        {/*  */}
      </ol>
    </div>
  );
};

export default SourcesAndCredits;
