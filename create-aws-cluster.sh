#!/bin/bash

aws_region=eu-west-1
instances=6

n=1
while [ $n -le $instances ]
do
  machine_name="host"-$n

  docker-machine create \
    --driver amazonec2 \
    --amazonec2-region $aws_region \
    --amazonec2-security-group 'swarm-cluster' \
    $machine_name &

	n=$(( n + 1 ))
done
