function createField(name, displayName, type, required) {
  const form = document.getElementById('form');
  
  const nameHeader = document.createElement('h1');
  nameHeader.innerHTML = displayName + ':&nbsp;';
  nameHeader.style = 'display: inline;';
  form.appendChild(nameHeader);

  const input = document.createElement('input');
  input.type = type;
  form.appendChild(input);

  if(required) {
    const asterisk = document.createElement('h1');
    asterisk.innerHTML = '*';
    asterisk.style = 'display: inline; color:#F00; font-size:40px;';
    form.appendChild(asterisk);
  }

  form.appendChild(document.createElement('br'));
  
  // <h1 style="display: inline;">Name:&nbsp;</h1><input type="text"></input><h1 style="display: inline; color:#F00; font-size:40px;">*</h1><br><br>
}

createField('name', 'Name', 'text', true);
  form.appendChild(document.createElement('br'));
createField('songName', 'Song Name', 'text', true);
createField('songUrl', 'Song URL', 'text', true);
  form.appendChild(document.createElement('br'));
createField('songName', 'Song Name', 'text', true);
createField('songUrl', 'Song URL', 'text', true);
  form.appendChild(document.createElement('br'));
  form.appendChild(document.createElement('br'));
createField('description', 'Description', 'text', false);

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