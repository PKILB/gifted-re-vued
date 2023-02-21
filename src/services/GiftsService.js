import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { sandboxApi } from "./AxiosService.js"
import { AppState } from "../AppState.js"





class GiftsService {
    async getGifts() {
        const res = await sandboxApi.get('api/gifts')
        logger.log('getting gifts', res.data)
        AppState.gifts = res.data.map(g => new Gift(g))
    }
}

export const giftsService = new GiftsService()