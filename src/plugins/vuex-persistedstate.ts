import { Context } from '@nuxt/types'
import createPersistedState from 'vuex-persistedstate'
import { appNmae } from '~~/config'
import { COMMON_KEYS } from '~/store/common'

export const VuexPersistedStateKey = appNmae + 'v3'

export default ({ store }: Context) => {
  createPersistedState({
    key: VuexPersistedStateKey,
    paths: [
      COMMON_KEYS.namespace,
      'reverse.config',
      'reverse.dasReverse',
      'me.connectedAccount',
      'me.inviter',
      'me.channel'
    ]
  })(store)
}
