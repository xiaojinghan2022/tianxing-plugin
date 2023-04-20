//所有的注释都是看着代码理解的，没有进行系统学习，[doge]保命
import path from "path";

const _path = process.cwd() + '/plugins/tianxing-plugin';

//锅巴支持
export function supportGuoba () {
    return{
        pluginInfo: {
            name: 'xianting-plugin',
            title: '天星插件',
            author: '@zy',
            authorLink: 'https://gitee.com/xiaojinghan2022',
            link: 'https://gitee.com/xiaojinghan2022/tianxing-plugin，https://github.com/xiaojinghan2022/tianxing-plugin',
            isV3: true,
            isV2: false,
            description: '乱写的插件',
            // 显示图标，此为个性化配置
            // 图标可在 https://icon-sets.iconify.design 这里进行搜索
            icon: 'mdi:stove',
            // 图标颜色，例：#FF0000 或 rgb(255, 0, 0)
            iconColor: '#1a7dbf',
            // 如果想要显示成图片，也可以填写图标路径（绝对路径）
            iconPath: path.join(_path , /resources/images/icon/gaoda.png)
        }
        /**
        // 配置项信息
        configInfo: {
            // 配置项 schemas
            schemas: [
                { 
                    field: 'unknown.think',
                    label: '未知',
                    bottomHelpMessage: '构思中',
                    component: 'Input',
                    required: true,
                    componentProps: {
                        placeholder: '写点什么吧',
                    },
                },
            ],
            // 获取配置数据方法（用于前端填充显示数据）
            getConfigData() {
                
            },
            // 设置配置的方法（前端点确定后调用的方法）
            setConfigData(data, {Result}) {
                
                return Result.ok({}, '保存成功~')
            }, 
        }*/
    }
}