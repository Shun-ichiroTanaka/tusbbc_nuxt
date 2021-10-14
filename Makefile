up:
	npm run dev
deploy:
	npm run build && npm run generate && firebase deploy
npm-reset:
	rm -rf node_modules && rm package-lock.json && npm cache clear --force && npm cache clean --force && npm i
