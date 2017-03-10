eval $(docker-machine env host-1)

docker-compose build

docker-compose bundle

docker stack deploy matchday

docker service scale matchday_web=3

docker service ls

docker service inspect matchday_proxy
