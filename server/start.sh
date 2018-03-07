#!/bin/bash
clear
echo "Running server setup..."
echo
sleep 2
echo "!--------> Setting up docker <---------!"
echo
sleep 1
echo "---------> fetching docker image..."
echo
sleep 2
docker pull mongo
echo
echo "---------> ...fetching docker image done!"
echo
sleep 2
echo "---------> removing old container and starting new container..."
echo
sleep 2
docker run --rm --name l10-mongo -p 27017:27017 -d mongo
echo
echo "---------> ...starting container done!"
echo
sleep 1
echo "Docker image info:"
echo "Name: l10-mongo"
echo "Port on localhost: 27018"
echo "Default database: local"
echo
sleep 4
echo "!--------> Starting server <---------!"
echo
sleep 2
npm run start
