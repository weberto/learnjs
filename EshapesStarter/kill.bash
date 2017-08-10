#!/bin/bash

export pids=`ps -ef | egrep -i 'nodemon|npm' | grep -v grep`
echo $pids
ps -ef | egrep -i 'nodemon|npm' | grep -v grep | awk '{print $2}' | xargs kill
