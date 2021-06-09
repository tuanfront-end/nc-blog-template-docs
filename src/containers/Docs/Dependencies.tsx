import React from "react";

const Dependencies = () => {
  return (
    <div>
      <p>
        You’ll need to have Node{` >= 12.13.0`} on your local development
        machine (but it’s not required on the server). You can use{" "}
        <a
          href="https://github.com/creationix/nvm#installation"
          target="_blank"
          rel="noopener noreferrer"
        >
          nvm
        </a>{" "}
        (macOS/Linux) or{" "}
        <a
          href="https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows"
          target="_blank"
          rel="noopener noreferrer"
        >
          nvm-windows
        </a>{" "}
        to switch Node versions between different projects.
      </p>
      <p>
        <strong>npx</strong>
      </p>
      <p>
        <i>
          (
          <a
            href="https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"
            target="_blank"
            rel="noopener noreferrer"
          >
            npx
          </a>{" "}
          comes with npm 5.2+ and higher, see{" "}
          <a
            href="https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f"
            target="_blank"
            rel="noopener noreferrer"
          >
            instructions
          </a>{" "}
          for older npm versions)
        </i>
      </p>
      <p>
        <strong>npm</strong>
      </p>
      <p>
        <i>npm init {`<initializer>`} is available in npm 6+</i>
      </p>
    </div>
  );
};

export default Dependencies;
