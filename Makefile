IMAGE_NAME = vue-site
CONTAINER_NAME = vue-site-container
PORT = 5173

build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run -d -p $(PORT):5173 --name $(CONTAINER_NAME) $(IMAGE_NAME)

stop:
	docker stop $(CONTAINER_NAME) || true

rm:
	docker rm $(CONTAINER_NAME) || true

clean: stop rm

rebuild: clean build run
