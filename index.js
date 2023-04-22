//所有的注释都是看着代码理解的，没有进行系统学习，[doge]保命
import fs from 'node:fs'
import token from 'tianxing'

/**if (token == "NTGEFDVC4T3GK6") {*/
/**载入插件提示 */
logger.info('------------𒆙-----------');
logger.info("tianxing插件载入中");
logger.info('')
/**读取.js文件*/
const files = fs.readdirSync('./plugins/tianxing-plugin/apps').filter(file => file.endsWith('.js'))
logger.info("载入js中...");

let ret = [];

files.forEach((file) => {
  ret.push(import(`./apps/${file}`))
})

ret = await Promise.allSettled(ret)
/**加载插件*/
let apps = {};
/**检测.js文件*/
for (let i in files) {
    let name = files[i].replace('.js', '')

    /**若检测错误则报错*/
    if (ret[i].status != 'fulfilled') {
        logger.error(`载入插件错误：${logger.red(name)}`)
        logger.error(ret[i].reason)
        continue
    }
    /**成功载入插件 */
    apps[name] = ret[i].value[Object.keys(ret[i].value)[0]]
    logger.info(`载入${logger.blue(name)}成功`)
}
logger.info("𒆙𒆙𒆙𒆙𒆙𒆙𒆙𒆙")
/**}else{
  logger.info('------------𒆙-----------');
  logger.info("tianxing插件载入中");
  logger.info('')
  logger.info("tianxing插件载入失败");
  logger.info('------------𒆙-----------');
  let apps = {};
  logger.error('tianxing_token错误')
  apps[name] = [你的token呢]
} */
export { apps }
