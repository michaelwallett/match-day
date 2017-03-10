#!/bin/bash

# Init managers
hostname="host-1"
echo $hostname
manager_ip="$(docker-machine ip $hostname):2377"
docker $(docker-machine config $hostname) swarm init --advertise-addr $manager_ip --listen-addr $manager_ip

manager_token="$(docker $(docker-machine config $hostname) swarm join-token manager -q)"
worker_token="$(docker $(docker-machine config $hostname) swarm join-token worker -q)"

hostname="host-2"
echo $hostname
ip="$(docker-machine ip $hostname):2377"
docker $(docker-machine config $hostname) swarm join \
    --token $manager_token \
    $manager_ip \
    --advertise-addr $ip --listen-addr $ip

hostname="host-3"
echo $hostname
ip="$(docker-machine ip $hostname):2377"
docker $(docker-machine config $hostname) swarm join \
    --token $manager_token \
    $manager_ip \
    --advertise-addr $ip --listen-addr $ip

# Init workers
hostname="host-4"
echo $hostname
ip="$(docker-machine ip $hostname):2377"
docker $(docker-machine config $hostname) swarm join \
    --token $worker_token \
    $manager_ip \
    --advertise-addr $ip --listen-addr $ip

hostname="host-5"
echo $hostname
ip="$(docker-machine ip $hostname):2377"
docker $(docker-machine config $hostname) swarm join \
    --token $worker_token \
    $manager_ip \
    --advertise-addr $ip --listen-addr $ip

hostname="host-6"
echo $hostname
ip="$(docker-machine ip $hostname):2377"
docker $(docker-machine config $hostname) swarm join \
    --token $worker_token \
    $manager_ip \
    --advertise-addr $ip --listen-addr $ip
