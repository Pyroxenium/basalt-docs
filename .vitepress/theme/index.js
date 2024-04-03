// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import CopyButton from 'vitepress-copy-helper';
import 'vitepress-copy-helper/style.css';

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('C', CopyButton);
  }
}