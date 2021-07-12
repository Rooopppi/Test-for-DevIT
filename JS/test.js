function test() {
    while (true) {
        if (Math.random() < 0.5) {
            break;
        } else {
            console.log('ok');
        }
    }
}

test()