export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-studio-1f9jpsoc',
                  apiId: '615fc8ae-c3d4-46ae-aab9-111c0c07b221'
                },
                {
                  buildHookId: '615fcb9336fe546b4fdf3095',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-web-u2qmz3ok',
                  apiId: '786b9d46-cefd-4648-bcf2-7f88d645f48b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wujr5/sanity-nuxt-events',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-web-u2qmz3ok.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
