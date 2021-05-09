# Getting Started with Create React App

[https://imseongtae.github.io/movie_app_2021/index.html](https://imseongtae.github.io/movie_app_2021/index.html)

## Deploy project
1. install `gh-pages`
1. include homepage path
1. setting npm scripts

```bash
yarn add gh-pages
```

```json
"homepage": "https://imseongtae.github.io/movie_app_2021/"
```


- setting npm scripts

```json
"deploy": "gh-pages -d build",
"predeploy": "npm run build",
```