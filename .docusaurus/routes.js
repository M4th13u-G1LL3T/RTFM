import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '04a'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '8c3'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '240'),
            routes: [
              {
                path: '/docs/Dump/WSL-installation',
                component: ComponentCreator('/docs/Dump/WSL-installation', 'ffa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/git/branch',
                component: ComponentCreator('/docs/git/branch', '247'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/git/clone',
                component: ComponentCreator('/docs/git/clone', '4e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/git/commit',
                component: ComponentCreator('/docs/git/commit', 'a31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/git/merge',
                component: ComponentCreator('/docs/git/merge', '61a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/git/ssh-keygen',
                component: ComponentCreator('/docs/git/ssh-keygen', 'b78'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
