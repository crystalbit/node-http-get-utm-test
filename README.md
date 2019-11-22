# node-http-get-utm-test
Simple script for making N http get requests with random parameters

HOWTO INSTALL:
npm install

HOWTO RUN:
mac, linux: COUNT=10 THREADS=3 TEMPLATE='https://google.com?q=*&qq=*' TIMEOUT=5000 node app
or use npm start scripts (see scripts section in package.json)
(default COUNT is 10, default threads are 3, default TIMEOUT is 1000 (ms) = 1 second !!!)
also threads are not real threads, just async stuff

result is like:
starting 10 threads...
new thread started
new thread started
new thread started
new thread started
new thread started
new thread started
new thread started
new thread started
new thread started
new thread started
gotten https://google.com?q=87ooz7dhsxyoeg1v4yt9h&qq=zqlxrkg6xn60bxuo3yj0c
gotten https://google.com?q=ruknvqn0iallifmsdpvl1d&qq=lhkfwea0fqszhw3j3rk2r
gotten https://google.com?q=tg5fdmalmjj15fv26lg3ci&qq=shbh96orwrj2e32pqhgti
gotten https://google.com?q=9z5n0qk2fspydvormtc3vh&qq=l34qucavza9ejvfeqg1u4r
gotten https://google.com?q=bcswpef34nsubl1jgrebp&qq=5o84g7opsux37x9p9f05ms
gotten https://google.com?q=q61iylw2t6la2dys95pdvq&qq=pcu6sozfeivyh9tggaris
gotten https://google.com?q=3t198g6rgpnkwsslc3lgdh&qq=jo75m5t562i51f6887jgjy
gotten https://google.com?q=c0xzhbx374cqxv7h9y1uv&qq=xxl5iuzqujqsuk06i76lq
gotten https://google.com?q=ie5ukml2mwvp3e9he1hze&qq=2yga9hcszqrhq34z88zn7l
gotten https://google.com?q=iv9kk0ip6il0u59j9p6l&qq=r7ksbbdfn2x45ukcirbr