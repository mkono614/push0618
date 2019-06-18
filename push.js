'use strict';

const push = require('web-push');

const GCM_API_KEY = 'AIzaSyCMyAThwN2E7dqWkEfqipDuIPRd4RTcDZ8';
push.setGCMAPIKey(GCM_API_KEY);

const data = {
    'endpoint': '**エンドポイントを指定**',
    'userAuth': '**鍵生成に使用する乱数指定**',
    'userPublicKey': 'BEywNnDr_ukOsN8JHjfYqntHZG113s_1SQtuFYwcavIKC1xUGPGhBCM6q5W7IrvkHUJDOs-0i44nXupkAsvDBMM'
};

const pushSubscription = {
    endpoint: data.endpoint,
    keys: {
        auth: data.userAuth,
        p256dh: data.userPublicKey
    }
}

push.sendNotification(pushSubscription,'Hi! How are you?')
    .then(function(result) {
    console.log("success!");
        console.log(result);
    })
    .catch(function(err) {
    console.log("fail!");    
        console.error(err);
    });