module.exports = {
  name: 'deals',
  path: './deals/deals.controller',
  tags: ['deals'],
  schemas: './deals/deals.schemas',
  interfaces: [
    {
      httpMethod: 'get',
      controllerMethod: 'list',
      path: '/deals/list',
      preHandler: [],
    },
    {
      httpMethod: 'get',
      controllerMethod: 'listWithSelector',
      path: '/deals/:selector/list',
      preHandler: [],
    },
    {
      httpMethod: 'get',
      controllerMethod: 'getStats',
      path: '/deals/stats',
      preHandler: [],
    },
    {
      httpMethod: 'get',
      controllerMethod: 'getDeal',
      path: '/deals/details/:id',
      preHandler: [],
    },
  ],
}