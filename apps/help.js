//所有的注释都是看着代码理解的，没有进行系统学习，[doge]保命
import fs from 'fs';
import lodash from 'lodash';

export class tianxing_help extends plugin {
    constructor() { 
        super({
            /** 功能名称*/
            name: '天星帮助',
            /** 介绍||备注 */
            dsc: '天星插件的帮助',
            /** 事件 */
            event: 'message',
            /** 优先级，甚至可以-999999(这个应该不会冲突吧？) */
            priority: -11451409,
            /** 正则 */
            rule: [
                {
                    /** 
                     * 命令，|是或的意思，^代表前面有就匹配,$是后面。
                     * 为了方便，添加了特殊符号，输入’.q‘也可以触发帮助[doge]
                     */
                    reg: '^#?(tianxing|天星|。|.)(help|帮助|命令|使用帮助|q|bz)$',
                    /** 输出 */
                    fnc: 'help',
                },
                {
                    reg: '^#?(tianxing|天星)(admin|key)$',
                    fnc: 'lchelp',
                    
                },
                {
                    reg: '^#?(tianxing|天星)(version|VERSION|Version|版本|bb|级别| -v| -V| -Version|)',
                    fnc: 'version',
                }
            ]
        });
    };
/**   async init(){
        let firstHelpConfig = setting.getConfig("helpAboutTianXing");
        if (!firstHelpConfig.sent){
          await Common.relpyPrivate(config.masterQQ[0], '欢迎您使用天星插件！\n本插件有点简陋\n可能需要您了解一些报错的解决方法\n否则请在出问题后停用本插件！（本消息仅发送一次）')
          firstHelpConfig.sent = true
          setting.setConfig("helpAboutTianXing", firstHelpConfig)
        }
      } */ 
    async help(e) {
        await this.reply('咕咕咕')
//        return await help(this.e,'help');
    }
    async lchelp(e) {
        
    };
    async version(e) {
        
    }
};

async function help(e, key) {

}
