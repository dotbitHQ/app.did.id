<template>
  <Dialog
    class="tx-pending-dialog"
    :showing="value"
    :actionButtonText="$tt('Got it')"
    closeButton
    enableCloseAction
    @close="onClose"
  >
    <div class="dialog_icon">📡</div>
    <div class="dialog_title">{{ $tt('Transaction pending') }}</div>
    <div class="account_pending">
      {{ $tt('It is expected to take 3 minutes to be confirmed on chain.') }}
    </div>
  </Dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Dialog from '~/components/Dialog.vue'

export default Vue.extend({
  name: 'TxPendingDialog',
  components: {
    Dialog
  },
  props: {
    value: {
      type: Boolean
    }
  },
  methods: {
    onClose () {
      this.$emit('input', false)
    }
  }
})
</script>

<style lang="scss" scoped>
@import "src/assets/variables";

.tx-pending-dialog {
  text-align: center;

  .dialog_icon {
    font-size: 64px;
  }

  .dialog_title {
    margin-top: 12px;
    margin-bottom: 8px;
    font-size: $font-size-24;
  }

  .account_pending {
    padding-bottom: 40px;
  }
}
</style>
