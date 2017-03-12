## CHANGELOG

#### [2017.03.08]
1. 混入redux， 目前完成秒杀部分
2. 加入indicator, 需要在项目根目录下执行react-native link命令, 将库添加为ios和android的依赖项

#### [2017.03.12]
1. 迭代更新发现作者页，混入redux
2. 去除common中的getScreenDimension方法，增加SCREEN_W, SCREEN_H常量
3. 抽象出ListView基类，秒杀模块和发现模块继承基类扩展自身特性

**在剥离基类的时候，有两种方案**

* 使用mixins特性，不过由于es6中的react不支持mixins特性，需使用变相方法-装饰器模式
1. [引入ViewControllerEnhancer装饰器](http://egorsmirnov.me/2015/09/30/react-and-es6-part4.html)
2. 引入babel-plugin-transform-decorators-legacy，babeljs插件，引入@decorator特性，优化装饰器语法

* 利用javascript中的继承特性，语法上采用es6语法

**本项目采用第二种**，简单方便。。也更符合未来发展趋势。。。
