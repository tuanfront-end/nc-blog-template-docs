import React from "react";

const CustomColors = () => {
  return (
    <div>
      <div>
        <h3>1- Custom colors</h3>
        <div>
          We use css variable for 3 main theme colors:
          <strong> Primary color</strong>, <strong>Secondary color</strong> and{" "}
          <strong>Neutrals color</strong>
          <h4>Primary, Secondary color:</h4>
          <p>
            These are the splashes of color that should appear the most in your
            UI, and are the ones that determine the overall "look" of the site.
            Use these for things like primary actions, links, navigation items,
            icons, accent borders, or text you want to emphasize.
          </p>
          <h4>Neutrals color:</h4>
          <p>
            These are the colors you will use the most and will make up the
            majority of your UI. Use them for most of your text, backgrounds,
            and borders, as well as for things like secondary buttons and links.
          </p>
          <h4>How to custom color?</h4>
          <p>
            To customize the colors you just need to go to the
            __theme_colors.scss file on styles folder and change the css
            variable values in it.
          </p>
        </div>
      </div>
      <div>
        <h3>2- Custom fonts</h3>
        <div>
          We use css variable for 2 main theme fonts:
          <strong> Display fonts</strong> and <strong>Body font</strong>
          <h4>Display font:</h4>
          <p>
            User for heading tag : H1 to H5 and other title tags, font-size
            bigger than 16px
          </p>
          <h4>Body font:</h4>
          <p>User for main font smaller than 14px</p>
          <h4>How to custom fonts?</h4>
          <p>
            To customize the fonts you just need to go to the __theme_font.scss
            file on styles folder and change the css variable values in it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomColors;
