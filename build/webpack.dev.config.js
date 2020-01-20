module.exports = {
    /**
     * 官方推荐配置
     * cheap: source map忽略列信息
     * module: 定位ts源码
     * eval-source-map: 将sourcemap以data url形式打包到文件中,提高重编译速度
     */
    devtool: 'cheap-module-eval-source-map' 
}