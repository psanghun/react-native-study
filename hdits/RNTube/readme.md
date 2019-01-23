MobX 및 Decorator 적용 문제

1. 문제점 원인
    - MobX 상위버전에서 지원하지 않는 문제
    - Babel 설정 문제
    
1. 해결방안
    - MobX 버전 DownGrade
    - Babel 관련 모듈 추가
    - Babel 설정 변경
    
    
1. babelrc
{
  "presets": ["module:metro-react-native-babel-preset", "@babel/preset-flow"],
  "plugins": [["@babel/plugin-proposal-decorators", { "legacy": true }]]
}

2. package.json
{
  "name": "mobxtest",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest"
  },
  "dependencies": {
    "mobx": "4.3.1",
    "mobx-react": "5.2.8",
    "react": "16.6.3",
    "react-native": "0.57.8"
  },
  "devDependencies": {
    "@babel/plugin-proposal-decorators": "^7.3.0",
    "@babel/preset-flow": "^7.0.0",
    "babel-jest": "23.6.0",
    "babel-plugin-transform-decorators-legacy": "^1.3.5",
    "babel-preset-react-native": "^4.0.1",
    "jest": "23.6.0",
    "metro-react-native-babel-preset": "0.51.1",
    "react-test-renderer": "16.6.3"
  },
  "jest": {
    "preset": "react-native"
  }
}
