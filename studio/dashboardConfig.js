export default {
  widgets: [
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
                  buildHookId: '5fbd0479f9d5592a5fc14d58',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-559n8w59',
                  apiId: 'e76dd3b9-23f7-4573-928e-cec3fd23b2ce'
                },
                {
                  buildHookId: '5fbd047aaf5c4c2e01c2bae6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-a5vbigrs',
                  apiId: '95a48dda-e310-4ffc-b6fe-384b9cf316dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/linkmalloc/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-a5vbigrs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
