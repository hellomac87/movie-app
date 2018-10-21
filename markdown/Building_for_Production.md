# Building for Production

## github page
`github page`는 `static files`를 호스팅 할 수 있는 서비스이다 .

`static files` 는 html,css,js 등 프론트엔드 파일을 뜻한다. backend 파일은 안된다.

필요사항
1) github 계정
2) github project
3) github project branch (gh-pages)

우선 빌드 명령어를 실행하자
```bash
$ yarn build
```
그럼 빌드가 완료된 후에 build 디렉터리가 생성되고 다음과 같은 메세지가 출력된다.

```bash
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",
```

pakage.json 에 나의 깃헙 계정명과 프로젝트 이름변경하여 다음과 같이 추가한다.

```json
"homepage": "http://hellomac87.github.io/movie_app"
```

다시 빌드

```bash
$ yarn build
```

성공적으로 수행되었다면 다음과 같은 메세지가 출력된다.

```bash
The build folder is ready to be deployed.
To publish it at http://hellomac87.github.io/movie_app, run:

  yarn add --dev gh-pages

Add the following script in your package.json.

    // ...
    "scripts": {
      // ...
      "predeploy": "yarn build",
      "deploy": "gh-pages -d build"
    }

Then run:

  yarn run deploy
```

다음 명령어를 실해하자

```bash
$ yarn add --dev gh-pages
```

그리고 다음 코드를 pakage.json 에 추가하자

```json
"homepage": "http://hellomac87.github.io/movie-app",
```
그리고
```bash
$ yarn run deploy
```
실행하면
```bash
To publish it at http://hellomac87.github.io/movie-app,
```
드루가서 확인해보쟝 쨔쟌
