up:
	npm run dev
deploy:
	npm run build && npm run generate && firebase deploy
login:
	firebase logout && firebase login
reset:
	rm -rf node_modules
	rm package-lock.json
	npm cache clear --force
	npm cache clean --force
	npm i
lint:
	npm run lintfix
package:
	npm install --save-exact @nuxtjs/auth
eslint:
	npm i eslint babel-eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue eslint-loader prettier -D
cache:
	rm -rf node_modules/.cache/hard-source/
ana:
	npx nuxt build --a
git-clean:
	git checkout .
	git clean -df
git-cache:
	git rm -r --cached .
