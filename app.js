var friends = ['Jeff', 'Ben', 'Jake', 'Billy', 'Max'];

/* i loop nested inside f(friends) loop */


for (var f = 0; f < friends.length; f++) {
    console.log(`${friends[f]}:`);

    for (var i = 99; i >= 1; i--) {
        if (i == 1) {
            console.log(`${(i)} line of code in the file, ${(i)} line of code; ${friends[f]} strikes one out, clears it all out, no more lines of code in the file`);
        } else {
            console.log(`${(i)} lines of code in the file, ${(i)} lines of code; ${friends[f]} strikes one out, clears it all out, ${(i - 1)} lines of code in the file`);
        }
    }
};