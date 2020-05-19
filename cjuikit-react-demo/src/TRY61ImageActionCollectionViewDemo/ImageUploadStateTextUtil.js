/**
 * ImageUploadStateTextUtil.js
 *
 * @Description: LuckinImageUtil
 *
 * @author      ciyouzen
 * @email       dvlproad@163.com
 * @date        2020-01-07 20:16:11
 *
 * Copyright (c) dvlproad. All rights reserved.
 */

/// 图片的上传状态类型
export var ImageUploadType = {
    NotNeed: 0,     /**< 不需要上传 */
    Waiting: 1,     /**< 等待上传 */
    Uploading: 2,   /**< 正在上传 */
    Success: 3,     /**< 上传成功 */
    Failure: 4,     /**< 上传失败 */
};

export default class ImageUploadStateTextUtil {
    /**
     * 获取正式的信息
     */
    static getFormalImageStateText=(uploadType, uploadProgress)=> {
        let formalImageStateText = '';
        switch (uploadType) {
            case ImageUploadType.Waiting: {
                formalImageStateText = '准备上传';
                break;
            }
            case ImageUploadType.Uploading: {
                formalImageStateText = this.__changeTwoDecimal_f(uploadProgress) + '%';
                break;
            }
            case ImageUploadType.Success: {
                formalImageStateText = '上传成功';
                break;
            }
            case ImageUploadType.Failure: {
                formalImageStateText = '重新上传';
                break;
            }
            default: {
                formalImageStateText = '';
                break;
            }
        }
        return formalImageStateText;
    }

    /**
     * 始终保留两位小数的方法
     * @param x 要处理的数字
     * @returns {string|*}
     */
    static __changeTwoDecimal_f(x) {
        try {
            let f_x1 = parseFloat(x);
            if (isNaN(f_x1)) {
                return x;
            }
            let f_x = Math.round(x * 100) / 100;
            let s_x = f_x.toString();
            let pos_decimal = s_x.indexOf('.');
            if (pos_decimal < 0) {
                pos_decimal = s_x.length;
                s_x += '.';
            }
            while (s_x.length <= pos_decimal + 2) {
                s_x += '0';
            }
            return s_x;
        } catch (e) {
            return '0.00';
        }
    }

    /**
     * 获取调试的信息
     */
    static getDebugImageStateText=(buttonIndex, isNetworkImage)=> {
        let debugImageStateText = 'ButtonIndex:' + buttonIndex;
        debugImageStateText += '\nisNetworkImage:' + (isNetworkImage?'true':'false');
        debugImageStateText += this.__getDebugImageUploadStateText();

        // let imageSource = this.props.imageSource;
        // if (imageSource.hasOwnProperty('uri') && typeof imageSource['uri'] === 'string') {
        //     debugImageStateText += '\n' + imageSource['uri'];
        // }
        return debugImageStateText;
    }

    static __getDebugImageUploadStateText=(uploadType, uploadProgress)=> {
        let debugImageUploadStateText = '';
        switch (uploadType) {
            case ImageUploadType.NotNeed: {
                debugImageUploadStateText += '\n' + '不需要上传';
                break;
            }
            case ImageUploadType.Waiting: {
                debugImageUploadStateText += '\n' + '等待上传';
                break;
            }
            case ImageUploadType.Uploading: {
                debugImageUploadStateText += '\n' + 'uploadProgress:' + uploadProgress;
                break;
            }
            case ImageUploadType.Success: {
                debugImageUploadStateText += '\n' + '上传成功';
                break;
            }
            case ImageUploadType.Failure: {
                debugImageUploadStateText += '\n' + '上传失败';
                break;
            }
            default: {
                debugImageUploadStateText += '\n' + '什么情况';
                break;
            }
        }
        return debugImageUploadStateText;
    }
}
