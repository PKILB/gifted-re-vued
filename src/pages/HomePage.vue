<template>
   <div class="container-fluid h-80">
    <div class="row">
      <div class="col-4 bg-success">
        <form>
          <h1>Gifted</h1>
          <input v-model="editable.url" required type="text" class="form-control my-3" placeholder=""
              aria-label="Search gifts" aria-describedby="button-addon2">

          <input v-model="editable.tag" required type="text" class="form-control my-3" placeholder=""
              aria-label="Search gifts" aria-describedby="button-addon2">
              <button @click="createGift" class="btn btn-outline-secondary" type="onclick" id="button-addon2">
                SUBMIT
              </button>
              </form>
              <div class="row">
                <div class="col-10 d-flex justify-content-center align-items-center">
                  <input required type="text" class="form-control my-3" placeholder="Search gifts"
                  aria-label="Search gifts" aria-describedby="button-addon2">
                </div>
                <div class="col-2 d-flex justify-content-center align-items-center">
                      <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
                        <i class="mdi mdi-magnify"></i>
                      </button>
                </div>
              </div>
      </div>
      <div class="col-8">
        <div class="row">
          <div v-for="giftFromTheVFor in gifts" class="col-4">
            <GiftCard :gift="giftFromTheVFor" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed, ref } from 'vue';
import { AppState } from '../AppState.js';
import { giftsService } from '../services/GiftsService.js'
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import GiftCard from '../components/GiftCard.vue'

export default {
  setup() {
    const editable = ref({})
    async function getGifts() {
      try {
        await giftsService.getGifts()
      } catch (error) {
        Pop.error(error.message)
        logger.error(error)
      }
    }

   

    onMounted(() => {
      logger.log("Heyyy")
      getGifts()
      
    })

    return {
      editable,
      gifts: computed(() => AppState.gifts),
      
      async createGift() {
      try {
        let giftData = editable.value
        await giftsService.createGift(giftData)
        editable.value = {}
      } catch (error) {
        Pop.error(error.message)
        logger.error(error)
      }
    }
    }
  },
  components: {GiftCard}
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    .border-top {
      border-top: 2px solid white;
    }

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
