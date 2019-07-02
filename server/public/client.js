$(document).ready(onReady);

function onReady() {
    console.log('in jQuery');

    // TO DO - Setup form

    // TO DO - Get music
    getAllMusic();
}

function getAllMusic() {

    // Make ajax GET request to server
    $.ajax({
        method: 'GET',
        url: '/music'
    }).then(function(response){
        console.log('back from server', response);
        
    }).catch(function(error){
        console.log('Error in GET client.js', error);
        alert('Sorry, could not get music. Try again later.');
    })
}
