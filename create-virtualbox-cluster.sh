#!/bin/bash

instances=6

n=1
while [ $n -le $instances ]
do
  machine_name="host"-$n

  docker-machine create \
    --driver=virtualbox \
    $machine_name &

	n=$(( n + 1 ))
done
