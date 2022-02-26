// Returning function as a default so any name on import side will work.
export default () => {
  return `
      <div class="icon">
        <img src="./img/icon.svg" alt="logo" /> <a href="./index.html">Libre Translate</a>
      </div>
      <div class="link">
        <ul>
          <li><a href="https://github.com/LibreTranslate/LibreTranslate" target="_blank">Github</a></li>
          <li><a href="https://libretranslate.de/docs" target="_blank">API Docs</a></li>
        </ul>
      </div>
`;
};
