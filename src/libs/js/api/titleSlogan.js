import { service } from '@/libs/js/request.js'
export function titleSlogan(){
    return service.request({
        method: "get"
    })
}