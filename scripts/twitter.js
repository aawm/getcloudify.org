﻿new TWTR.Widget({
    version: 2,
    type: 'profile',
    width:100,
    interval: 120000,
	  rpp: 3,
    title: '',
    subject: '',
    width: 230,
    height: 278,	
    theme: {
        shell: {
            background: 'none',
            color: '#ffffff'
        },
        tweets: {
            background: 'none',
            color: '#393939',
            links: '#24ACC5',
        }
    },
    features: {
        scrollbar: false,
        loop: true,
        live: true,
		avatars: false,
        behavior: 'all'
    }
}).render().setUser('cloudifysource').start();

