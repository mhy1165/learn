/*
 * @Author: mhy
 * @Date: 2021-06-30
 * @LastEditors: mhy
 */
export const projectName = "mhy项目";
export const baseURL = process.env.baseURL;
// export const uploadURL = process.env.uploadURL;
// export const logURL = process.env.logURL;
// export const wsURL = process.env.wsURL;
export const isOpenWs = true; //是否开启websocket
// export const showMessageCount = 2; //设置消息展示数量
// export const previewURL = process.env.baseURL+"/onlinePreview?url=";//预览服务地址
// export const printURL = process.env.baseURL+"/onlinePreview?officePreviewType=pdf&url=";//打印预览服务地址
export function getGlobalConfig() {
    return {
        baseURL: baseURL,
        // uploadURL: uploadURL,
        // logURL: logURL,
        // wsURL: wsURL,
        isOpenWs: isOpenWs,
        // showMessageCount: showMessageCount,
        // previewURL: previewURL,
        // printURL: printURL
    }
}