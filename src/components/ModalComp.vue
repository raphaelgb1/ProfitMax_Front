<template>
    <div ref="modal" class="modal" @click="fecharModalExterno">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="header"></slot>
                    <button ref="closeButton" type="button" class="btn-close" aria-label="Close"
                        @click="fecharModalExterno"></button>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Modal } from 'bootstrap';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ModalComp',
    props: {
        ModalOpen: {
            type: Boolean,
            required: true
        },
    },
    data() {
        return {
            ModalMethods: {} as Modal
        }
    },
    mounted() {
        this.ModalMethods = new Modal(this.$refs.modal as HTMLElement, {
            keyboard: false
        });
        if (this.ModalOpen)
            this.ModalMethods.show();
    },
    watch: {
        ModalOpen() {
            this.ModalMethods.toggle();
        }
    },
    methods: {
        fecharModalExterno(event: MouseEvent) {
            const { modal, closeButton } = this.$refs
            if ([modal, closeButton].includes(event.target)) {
                this.$emit('fechar');
                this.ModalMethods.hide();
            }
        }
    }
})
</script>
<style></style>