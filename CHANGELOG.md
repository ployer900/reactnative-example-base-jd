<!--
@Author: hongliang yu <yuhongliang>
@Date:   08-Mar-2017
@Email:  yuhongliang900@163.com
@Filename: CHANGELOG.md
@Last modified by:   yuhongliang
@Last modified time: 21-Mar-2017
@License: MIT
@Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
-->


## CHANGELOG

#### [2017.03.08]
1. 混入redux， 目前完成秒杀部分
2. 加入indicator, 需要在项目根目录下执行react-native link命令, 将库添加为ios和android的依赖项
3. 混入redux-thunk中间件，控制异步action

#### [2017.03.12]
1. 迭代更新发现作者页，活动页面，发现清单页，混入redux
2. 去除common中的getScreenDimension方法，增加SCREEN_W, SCREEN_H常量
3. 优化tabbar，添加icon，icon图使用sketch绘制
3. 抽象出ListView基类，秒杀模块和发现模块继承基类扩展自身特性

**在剥离基类的时候，有两种方案**

* 使用mixins特性，不过由于es6中的react不支持mixins特性，需使用变相方法-装饰器模式
1. [引入ViewControllerEnhancer装饰器](http://egorsmirnov.me/2015/09/30/react-and-es6-part4.html)
2. 引入babel-plugin-transform-decorators-legacy，babeljs插件，引入@decorator特性，优化装饰器语法

* 利用javascript中的继承特性，语法上采用es6语法

**本项目采用第二种**，简单方便。。也更符合未来发展趋势。。。


#### [2017.03.20]
1. 接入redux-saga中间件，移除redux-thunk中间件，使用es6特性
2. 代码文件，添加作者信息
3. 剥离action type至单独文件，方便管理
4. 接入reselect，避免不必要的状态更新导致的重绘，购物车场景很需要

#### [2017.03.21]
1. tabbar部分代码优化，减少代码量
2. swiper部分代码优化，减少代码量
3. 添加资讯列表，替换原来的清单列表
