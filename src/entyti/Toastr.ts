import { POSITION, PluginOptions, useToast } from "vue-toastification";

class Toastr {
    private readonly toast = useToast();
    private readonly options: PluginOptions = {
        timeout: 2038,
        closeOnClick: true,
        position: POSITION.TOP_RIGHT,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.8,
        showCloseButtonOnHover: true,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false
    }

    success(message: string) {
        this.toast.success(message, this.options)
    }

    warning(message: string) {
        this.toast.warning(message, this.options)
    }

    error(message: string) {
        this.toast.error(message, this.options)
    }
}

const toast = new Toastr()
export default toast