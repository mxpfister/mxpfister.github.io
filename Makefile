deploy: 
	@if [ "$$(git branch --show-current)" != "gh-pages" ]; then \
		echo "Error: deploy must be run on branch gh-pages."; \
		exit 1; \
	fi
	@if [ ! -d dist ]; then \
		echo "Error: dist directory not found. Run build first."; \
		exit 1; \
	fi
	cp -a dist/. ./
	rm -rf dist
	git add -A
	@if ! git diff --cached --quiet; then \
		git commit -m "Deploy latest build"; \
		git push origin gh-pages; \
		echo "Deployment successful."; \
	else \
		echo "No changes to deploy."; \
	fi
