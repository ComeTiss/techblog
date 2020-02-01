echo
echo "STEP 1 - Removing volumes..."
docker-compose down -v
echo "DONE!"
echo
echo
echo "STEP 2 - Deleting Images"
docker rmi techblog_  reactapp
echo
echo
echo "STEP 3 - Starting docker-compose..."
docker-compose up -d --build