## TODO remove me - all in package.json
.PHONY: docker_build_frontend
docker_build_frontend:
	docker build -t cid-checker-frontend --build-arg REACT_APP_FILECOIN_CID_CHECKER_API=/api -f ./packages/frontend/Dockerfile .


.PHONY: docker_build_watcher
docker_build_watcher:
	docker build -t cid-checker-watcher -f ./packages/watcher/Dockerfile .

.PHONY: docker_build_api
docker_build_api:
	docker build -t cid-checker-api -f ./packages/backend/Dockerfile .

.PHONY: docker_build_all
docker_build_all: docker_build_frontend docker_build_watcher docker_build_api

.PHONY: up
up:	docker_build_all
	docker-compose up -d
