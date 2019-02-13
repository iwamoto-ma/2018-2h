<template lang="pug">
  div
    StHeader
    router-view
    StFooter
</template>

<script>
'use strict'

import StHeader from '@/components/structure/Header'
import StFooter from '@/components/structure/Footer'

export default {
  components: {
    StHeader,
    StFooter
  }
}
</script>
