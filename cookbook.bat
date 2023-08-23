docker rm test
docker rmi test
docker build -t test .
docker run --name test test