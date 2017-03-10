#!/bin/bash

instances=6

n=1
while [ $n -le $instances ]
do
  machine_name="host"-$n
  docker-machine rm -y $machine_name &
	n=$(( n + 1 ))
done
