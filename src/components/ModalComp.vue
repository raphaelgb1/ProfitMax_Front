<template>
    <div ref="modal" class="modal fade" tabindex="-1" aria-hidden="true">
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
import { ModalVue } from '@/entyti/Modal';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ModalComp",
    props: {
        Modal: {
            type: ModalVue,
            required: true
        }
    },
    mounted() {
        this.Modal.setModal(this.$refs.modal as Element);
    },
})
</script>