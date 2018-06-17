/*
import { promises } from "fs"; NO FUNCIONA
function getData(method, url){
    return new Promise(function (resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function(){
            if(this.status >= 200 && this.status < 300){
                resolve(xhr.response);
            }else{
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function(){
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}
getData('GET', 'https://laboratoria-la-staging.firebaseapp.com/campuses').then(function(data){
    let campuses = JSON.parse(data);
    let output = '';
    for(let api of campuses){
        output += `
        <li>
            <h3>${lab.campuses}</h3>
            <p>${lab.id}</p>
            <p>${lab.name}</p>
            <p>${lab.locale}</p>
            <p>${lab.timezone}</p>
            <p>${lab.active}</p>
        </li>
        `;
    }
    document.getElementById('template').innerHTML = output;
}).catch(function(err){
});
*/function loadJson () {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'users.json', true)
  xhr.onload = function () {
    if (this.status === 200) {
      var users = JSON.parse(this.responseText)
      var output = ''
      for (var i in users) {
        output += '<ul>' +
            '<li>ID: ' + users[i].id + '</li>' +
            '<li>signupCohort: ' + users[i].signupCohort + '</li>' +
            '<li>TimeZone: ' + users[i].timezone + '</li>' +
            '<li>Name: ' + users[i].name + '</li>' +
            '<li>Locale: ' + users[i].locale + '</li>' +
            '<li>Role: ' + users[i].role + '</li>' +
            '</ul>'
      }
      document.getElementById('template').innerHTML = output
    }
  }
  xhr.send()
}
