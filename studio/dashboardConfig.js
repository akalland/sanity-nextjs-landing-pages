export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5cec6b0ae52995dc942b7b09',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sbowtnx1',
                  apiId: 'c6f52f7a-a2ff-400a-bcd6-e2ced9e21ccf'
                },
                {
                  buildHookId: '5cec6b0a43aa24e79a448711',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-sdozg41q',
                  apiId: '9927d71b-dd2f-42bb-9f1f-7592363cbbc9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/akalland/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-sdozg41q.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
