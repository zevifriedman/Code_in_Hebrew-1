const api = 'AIzaSyADj8nY1JheHT0BhF7zadkX9hMavNWolYc';
const idLookipod = 'UCY34VjPyNEexeU2JYluJRxw';
const urlLookipod = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${idLookipod}&key=${api}`;

fetch(urlLookipod)
    .then(response => {
        if (!response.ok){
            throw new Error(`הבעיה היא : ${response.status}`);
        } 
        return response.json();
    })
    .then(data => {
        const stats = data.items[0].statistics;
        document.getElementById('subscribersLookipod').textContent = stats.subscriberCount;
        document.getElementById('viewsLookipod').textContent = stats.viewCount;
        document.getElementById('videosLookipod').textContent = stats.videoCount;
        
        const snippet = data.items[0].snippet;
        document.getElementById('channelNameLookipod').textContent = snippet.title;
        document.getElementById('channelDescriptionLookipod').textContent = snippet.description;
        document.getElementById('channelImageLookipod').src = snippet.thumbnails.default.url;
    })
    .catch(error => {
        console.error('Error fetching YouTube API data:', error);
        document.getElementById('subscribers').textContent = 'Error';
        document.getElementById('views').textContent = 'Error';
        document.getElementById('videos').textContent = 'Error';
        document.getElementById('channelName').textContent = 'Error';
        document.getElementById('channelDescription').textContent = 'Error';
        document.getElementById('channelImage').src = 'Error';
    })

const idBina = 'UCDV9l0it2a3Nqhp-G7JmiDw';// 'UCY34VjPyNEexeU2JYluJRxw';

const urlBina = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${idBina}&key=${api}`;

fetch(urlBina)
    .then(response => {
        if (!response.ok){
            throw new Error(`הבעיה היא : ${response.status}`);
        } 
        return response.json();
    })
    .then(data => {
        const stats = data.items[0].statistics;
        document.getElementById('subscribersBina').textContent = stats.subscriberCount;
        document.getElementById('viewsBina').textContent = stats.viewCount;
        document.getElementById('videosBina').textContent = stats.videoCount;
        
        const snippet = data.items[0].snippet;
        document.getElementById('channelNameBina').textContent = snippet.title;
        document.getElementById('channelDescriptionBina').textContent = snippet.description;
        document.getElementById('channelImageBina').src = snippet.thumbnails.default.url;
    })
    .catch(error => {
        console.error('Error fetching YouTube API data:', error);
        document.getElementById('subscribers').textContent = 'Error';
        document.getElementById('views').textContent = 'Error';
        document.getElementById('videos').textContent = 'Error';
        document.getElementById('channelName').textContent = 'Error';
        document.getElementById('channelDescription').textContent = 'Error';
        document.getElementById('channelImage').src = 'Error';
    })

    
