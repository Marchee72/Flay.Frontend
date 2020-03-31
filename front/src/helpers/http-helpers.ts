//Cambiar cuando necesite hacer un get url/controler/method?id="value"
export function URL(controller: string, method: string, key?: string, value?: string): string {
    const server = "http://localhost:60304";
    var url = server + "/" + controller + "/" + method;
    if(key && value) return url + "?" + key + ":" + value;
    return url;
}
