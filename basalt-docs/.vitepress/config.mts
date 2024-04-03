import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Basalt",
  description: "A CC:Tweaked UI Framework",
  lang: 'en-US',
  lastUpdated: true,
  base: "basalt-docs",

  head: [
    //[
    //  'link',
    //  { rel: 'stylesheet', href: '../css/computer.css', type: 'text/css' }
    //],
    //[
    //  'script',
    //  { async: '', src: 'https://copy-cat.squiddev.cc/require.js' }
    //],
    //[
    //  'script',
    //  {},
    //  `require.config({ paths: { copycat: "https://copy-cat.squiddev.cc/" } });
    //  require(["copycat/embed"], setup => setup(document.getElementById("embed-computer")));`
    //],
    //[
    //  'script',
    //  {src: '../js/computer.js' },
    //],

    //HTML for this:
    //<button onclick="toggleComputer('computer-1')">Click Me</button>
    //<div id="computer-1" class="computer">
    //  <div id="embed-computer"></div>
    //</div>
  ],

  themeConfig: {
    editLink: {
      pattern: 'https://github.com/Pyroxenium/Basalt/tree/master/docs/:path'
    },
    search: {
      provider: 'local'
    },
    
    outline: 2,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Robert Jelic'
    },
    nav: [
      { text: 'Home', link: '/home' },
      { text: 'Guides', link: '/guides/' },
      { text: 'References', link: '/references/main' },
    ],

    docFooter: {
      prev: false,
      next: false
    },

    sidebar: {
      '/guides/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Home', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],

      '/references/':[
      {
        text: 'References', link: 'references/main',
        items: [
          {text: 'Basalt', link: 'references/basalt'},
          {text: 'BasicElement', link: 'references/element',
          items: [
            {text: 'VisualElement', link: 'references/visualelement',    
            items: [
              {text: 'Container', link: 'references/container',
              items: [
                {text: 'Baseframe', link: 'references/baseframe'},
                {text: 'Frame', link: 'references/frame'},
                {text: 'Monitor', link: 'references/monitor'},
                {text: 'BigMonitor', link: 'references/bigmonitor'},
              ]},
              {text: 'Button', link: 'references/button'},
              {text: 'Checkbox', link: 'references/checkbox'},
              {text: 'Image', link: 'references/image'},
              {text: 'Input', link: 'references/input'},
              {text: 'Label', link: 'references/label'},
              {text: 'List', link: 'references/list',
              items: [
                {text: 'Dropdown', link: 'references/dropdown'},
                {text: 'Radio', link: 'references/Radio'},
                {text: 'Menubar', link: 'references/Menubar'},


              ]},
              {text: 'Program', link: 'references/program'},
              {text: 'Progressbar', link: 'references/progressbar'},
              {text: 'Scrollbar', link: 'references/scrollbar'},
              {text: 'Slider', link: 'references/slider'},
              {text: 'Textfield', link: 'references/textfield'},
            ]
            },
          ]
          },
      ]
      },
    ],
    },


    socialLinks: [
      { icon: 'github', link: 'https://github.com/Pyroxenium/Basalt' }
    ]
  }
})
