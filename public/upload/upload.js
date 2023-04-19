function upload() {
  post('/upload_collab', {
    name: 'name',
    songName: 'darude sandstorm',
    songUrl: 'https://google.com',
    coverUrl: 'https://google.com',
    serverUrl: 'https://google.com',

    description: '',
    collabType: 'layout',
    difficulty: 'easy',
    averagePartLength: '1',
    qualityStandards: '1',
    activity: 'high'
  });
}