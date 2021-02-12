export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60268b1e6828671a59e81bba',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-agu2b4tf',
                  apiId: '73dbd49b-3ae5-4155-af57-5f4f95e89a0c'
                },
                {
                  buildHookId: '60268b1e7e097216663688fe',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-mhr57dom',
                  apiId: 'a5f52cb1-a899-4bda-bd3d-d1cae89128d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jiftuq/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-mhr57dom.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
