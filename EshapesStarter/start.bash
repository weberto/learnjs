#!/bin/bash

export HOST=`ifconfig en0 | grep broadcast | awk '{print $2}'`
echo "HOST is: $HOST"

cat ./src/actions/index.js | perl -lne 's/const EXPRESS_ROOT =.*$/const EXPRESS_ROOT = "http:\/\/$ENV{HOST}:8081\/";/g; print' > ./src/actions/index.js.tmp
cp ./src/actions/index.js.tmp ./src/actions/index.js

npm start &
sleep 15
(cd express && nodemon server) &

