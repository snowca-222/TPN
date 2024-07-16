import { service } from '@/libs/js/request.js'
export function memberLists() {
    return service.request({
        method: "get",
    })
}