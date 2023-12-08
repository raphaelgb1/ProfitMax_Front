import { ActiveLoader, useLoading } from 'vue-loading-overlay'
class Loading {

    private readonly loading = useLoading()
    private loader: ActiveLoader = null as unknown as ActiveLoader

    show () {
        this.loader = this.loading.show({
            canCancel: true, // default false
            color: '#8C1F33',
            loader: 'orbit',
            width: 150,
            height: 150,
            backgroundColor: '#212326',
            opacity: 0.5,
            zIndex: 999,
          })
    }

    hide () {
        this.loader.hide()
    }
}

const load = new Loading()
export default load