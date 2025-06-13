IMAGE_NAME = vue-site
CONTAINER_NAME = vue-site-container
PORT = 5173
PROJECT_DIR = $(shell pwd)

build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run -d -p $(PORT):5173 \
		--name $(CONTAINER_NAME) \
		-v $(PROJECT_DIR):/app \
		-v /app/node_modules \
		-w /app \
		$(IMAGE_NAME) \
		npm run dev -- --host

stop:
	docker stop $(CONTAINER_NAME) || true

rm:
	docker rm $(CONTAINER_NAME) || true

clean: stop rm

rebuild: clean build run

npm-build:
	docker exec $(CONTAINER_NAME) npm run build
