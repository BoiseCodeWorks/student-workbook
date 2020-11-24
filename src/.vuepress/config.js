const fs = require("fs");
const path = require("path");
const { config } = require("vuepress-theme-hope");


const GITHUB_USERNAME = 'REPLACE_ME' // TODO 


module.exports = config({
  base: "/blog/",
  title: 'Codeworks Student Learning Blog',
  description: "My thoughts notes and reflections while attending Codeworks Immersive FullStack Program",
  head: [
    ['meta', { name: 'theme-color', content: '#3093d9' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'application-name', content: `${GITHUB_USERNAME} Learning Blog` }],
    ['meta', { name: 'ROBOTS', content: 'FOLLOW' }],
    ['meta', { name: 'og:image', content: 'https://bcw.blob.core.windows.net/public/img/8600856373152463' }],
    ['meta', { name: 'og:type', content: 'article' }],
    ['meta', { name: 'og:url', content: `https://${GITHUB_USERNAME}.github.io/blog` }],
    ['meta', { name: 'og:title', content: 'Learn to Code. Develop Your Future' }],
    ['meta', { name: 'og:locale', content: 'en_US' }]
  ],
  themeConfig: {
    logo: 'https://bcw.blob.core.windows.net/public/img/2900578872732848',
    editLinks: true,
    repo: `${GITHUB_USERNAME}/student-workbook`,
    repoLabel: 'Contribute!',
    docsDir: 'src',
    docsBranch: 'main',
    darkmode: "switch",
    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#00ffdc",
      orange: "#fb9b5f",
      purple: "#8e44ad"
    },
    nav: [
      {
        text: 'Reflections',
        link: '/reflections/',
      },
      {
        text: 'Codeworks',
        link: 'https://boisecodeworks.com'
      }
    ],
    sidebar: {
      '/reflections/': [
        ...getSideBar('reflections', 'Student Reflections'),
        ...getSideBar('reflections/wk1', 'Building Blocks of Web Development'),
        ...getSideBar('reflections/wk2', 'Intro to Js'),
        ...getSideBar('reflections/wk3', 'Advancing with JS'),
        ...getSideBar('reflections/wk4', 'Asynchronous Code'),
        ...getSideBar('reflections/wk5', 'Servers with Node/Express'),
        ...getSideBar('reflections/wk6', 'Frontend Frameworks with Vue3'),
        ...getSideBar('reflections/wk8', 'Working in a Professional Environment'),
        ...getSideBar('reflections/wk10', 'Foundations of C#'),
        ...getSideBar('reflections/wk11', 'Dotnet WebApi\'s')
      ]
    },
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    ["@mr-hope/sitemap", { hostname: `https://${GITHUB_USERNAME}.github.io/blog` }],
  ]
})

function getSideBar(folder, title) {
  const extension = [".md"];
  const root = folder.lastIndexOf('/') === -1 ? '' : folder.slice(folder.lastIndexOf('/') + 1)
  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(file =>
      file.toLowerCase() != "readme.md" &&
      fs.statSync(path.join(`${__dirname}/../${folder}`, file)).isFile() &&
      extension.includes(path.extname(file))
    ).map(filename => {
      if (!root) {
        return filename
      }
      return root + '/' + filename
    });
  const children = [...files]
  if (!root) {
    children.unshift('')
  }
  return [{ title: title, children }];
}
