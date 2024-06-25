import { service } from '@/libs/js/api/request.js'
export function userLists() {
    return service.request({
        method: "get",
    })
}