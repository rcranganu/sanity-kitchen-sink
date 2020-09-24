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
                  buildHookId: '5f6c613e36f4aceb79f336bc',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cgi38j3y',
                  apiId: '0b317d00-e3a0-48fd-ae50-336e299c6e24'
                },
                {
                  buildHookId: '5f6c613e36f4aceab9f33630',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-h5hcykjg',
                  apiId: '5e28dc8c-b3de-428c-9165-53d5fd3343eb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rcranganu/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-h5hcykjg.netlify.app', category: 'apps'}
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
