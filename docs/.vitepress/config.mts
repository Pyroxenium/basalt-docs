import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Basalt",
  description: "A CC:Tweaked UI Framework",
  base: '/basalt-docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/api' },
      { text: 'Guides', link: '/guides' }
    ],

    sidebar: [
      {text: 'Getting Started', link: '/getting-started'},
      {
        text: 'API', link: '/api',
        items: [
          {text: 'Basalt', link: 'api/basalt'},
          {text: 'Object', link: 'api/object',
          items: [
            {text: 'VisualObject', link: 'api/visualobject',    
            items: [
              {text: 'Container', link: 'api/container',
              items: [
                {text: 'Baseframe', link: 'api/baseframe'},
                {text: 'Frame', link: 'api/frame'},
                {text: 'Monitor', link: 'api/monitor'},
                {text: 'BigMonitor', link: 'api/bigmonitor'},
              ]},
              {text: 'Button', link: 'api/button'},
              {text: 'Checkbox', link: 'api/checkbox'},
              {text: 'Image', link: 'api/image'},
              {text: 'Input', link: 'api/input'},
              {text: 'Label', link: 'api/label'},
              {text: 'List', link: 'api/list',
              items: [
                {text: 'Dropdown', link: 'api/dropdown'},
                {text: 'Radio', link: 'api/Radio'},
                {text: 'Menubar', link: 'api/Menubar'},


              ]},
              {text: 'Program', link: 'api/program'},
              {text: 'Progressbar', link: 'api/progressbar'},
              {text: 'Scrollbar', link: 'api/scrollbar'},
              {text: 'Slider', link: 'api/slider'},
              {text: 'Textfield', link: 'api/textfield'},
            ]
            },
          ]
          },
      ]
      },
      {
        text: 'Guides', 
        items: [
          {text: 'Introduction', link: 'guides/introduction'},
          {text: 'Properties', link: 'guides/properties'},
        ]
      },
	
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Pyroxenium/Basalt' }
    ]
  }
})
