<template>
    <div ref="modal" class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="header"></slot>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
import { defineComponent } from 'vue';
import { Modal } from 'bootstrap';
export default defineComponent({
    name: 'ModalComp',
    props:{
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
        if(this.ModalOpen)
            this.ModalMethods.show();
    },
    watch: {
        ModalOpen () {
            this.ModalMethods.toggle();
        }
    }
})
</script>
<style></style>