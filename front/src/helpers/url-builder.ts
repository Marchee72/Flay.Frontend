//Cambiar cuando necesite hacer un get url/controler/method?id="value"
export default function URL(controller: string, method: string): string {
    const server = "http://localhost:60304";
    return server + "/" + controller + "/" + method;
}