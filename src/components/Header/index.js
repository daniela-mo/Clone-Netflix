import React from "react";
import "./index.css";

export default ({ black }) => {
  return (
    <header className={black ? "black" : " "}>
      <div className="header--logo">
        <a href="/">
          <span
            class="svg-nfLogo our-story-logo nfLogo"
            data-uia="netflix-header-svg-logo-noclick"
          >
            <svg
              viewBox="0 0 111 30"
              class="svg-icon svg-icon-netflix-logo"
              focusable="false"
            >
              <g id="netflix-logo">
                <path
                  d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                  id="Fill-14"
                ></path>
              </g>
            </svg>
          </span>
        </a>
      </div>

      <div className="header--user">
        <a href="/">
          <img
            src="data:image/jpeg;base64,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"
            alt="Usuário"
          />
        </a>
      </div>
    </header>
  );
};
