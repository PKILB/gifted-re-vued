<template>
    
<div class="card">
    <img :src="gift.url" alt="">
    <div class="card-body text-center">
        <p>{{ gift.tag }}</p>
    </div>
</div>
</template>


<script>

import { Gift } from '../models/Gift.js';

export default {
    props: {
        gift: {type: Gift}
    },
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>