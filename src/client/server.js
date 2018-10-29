import ServerUI from './serverUI';
import * as utils from './utils';

let serverUI = new ServerUI();


// THESE ARE UI TESTS, REMOVE THESE LATER
for (let i = 1; i <= 10000; ++i) {
    let types = ['connect', 'chat', 'disconnect'];
    let users = ['Alex', 'Benjamin', 'Chloe', 'Daisy'];
    let data = {
        type: types[utils.randomInt(0,2)],
        user: users[utils.randomInt(0,3)],
        message: utils.makeid(utils.randomInt(5,40)),
        room: 'R' + utils.makeid(5),
    }
    setTimeout(() => {
        serverUI.appendLog(data);
    }, 100*i);
}