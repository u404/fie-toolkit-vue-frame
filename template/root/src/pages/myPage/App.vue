<template>
  <h5-fail-panel v-if="error"></h5-fail-panel>
  <h5-loading-panel v-else-if="loading"></h5-loading-panel>
  <div class="page" v-else>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex"
import { countdownEx, callAppUI, callApp, callAppHelper, callAppPage, getPosition } from "@sc/lib-web-utils"
import libUser from "@sc/lib-user"
import libShare from "@sc/lib-share"

export default {
  components: {
  },
  data () {
    return {
      error: false,
      loading: true
    }
  },

  methods: {
    ...mapMutations(["setState"]),
    ...mapActions(["getBaseData"])
  },

  beforeMount () {
    this.getBaseData().then(() => {
      this.loading = false
    }).catch(() => {
      this.loading = false
      this.error = true
    })
  },

  mounted () {
  }

}
</script>

<style lang="scss">
.page {
}
</style>
