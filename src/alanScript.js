intent('Get the news from $(item* (.*)) category', (p) => {
    if(p.item.value ==='health'|| p.item.value ==='sports'|| p.item.value ==='business'||p.item.value ==='General'){
        p.play({ command: 'VoiceNews', data: p.item.value });
        p.play(`Fetching News on ${p.item.value} category`);
    }
    else{
        p.play(`Cannot get Data`);
    }
})
