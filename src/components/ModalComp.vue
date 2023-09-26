<template>
    <div ref="modal" class="modal-dialog modal-lg">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <!-- <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    <slot name="header"></slot>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                    <!-- <p>Modal body text goes here.</p> -->
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                    <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import bootstrap from 'bootstrap';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ModalComp',
    mounted() {
        const elemento = this.$refs.modal
        if(elemento){
            const Modal = new bootstrap.Modal(elemento as Element, {
                keyboard: false
            });
            Modal.show();
        }
    },
})
</script>
<style></style>