import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { sandboxApi } from "./AxiosService.js"
import { AppState } from "../AppState.js"





class GiftsService {
    async createGift(giftData) {
        const res = await sandboxApi.post('api/gifts', { params: giftData })
        AppState.gifts.tag = giftData.tag
        AppState.gifts.url = giftData.url
        AppState.gifts = res.data.results.map(c => new Gift(c))
        // AppState.gifts.push(res.data)
    }

    async getGifts() {
        const res = await sandboxApi.get('api/gifts')
        logger.log('getting gifts', res.data)
        AppState.gifts = res.data.map(g => new Gift(g))
    }
}

export const giftsService = new GiftsService()