import { logger } from "../utils/Logger.js"
import { sandboxApi } from "./AxiosService.js"





class GiftsService {
    async getGifts() {
        const res = await sandboxApi.get('api/gifts')
        logger.log('getting gifts', res.data)
    }
}

export const giftsService = new GiftsService()