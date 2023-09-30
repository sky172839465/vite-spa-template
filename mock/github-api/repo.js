export default [
  {
    url: '/api/github/repos',
    method: 'get',
    timeout: 3000,
    response: () => ({
      code: 0,
      message: 'ok',
      data: [
        {
          id: 1,
          name: 'repo1',
          description: 'This is repo1'
        },
        {
          id: 2,
          name: 'repo2',
          description: 'This is repo2'
        }
      ]
    })
  }
]
