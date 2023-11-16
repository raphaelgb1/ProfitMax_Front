<template>
    <button v-if="button" @click="button.callback" class="button font btn-black">
        <slot name="icon"></slot>
        {{ button.name }}
    </button>
</template>
    
<script lang="ts">
import { ButtonCallback } from '@/entyti/index.js';
import { defineComponent } from 'vue';

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Btn',
    props: {
        button: {
            type: Object as () => {
                name: string;
                callback: ButtonCallback;
            },
            default: null
        }
    }
});
</script>
    
<style scoped>
.button {
    background-color: #17181A;
    gap: 8px;
    color: white;
    border: none;
    padding: 16px 24px 16px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 12px;
}

@media screen and (max-width: 768px) {
    .header {
        flex-direction: column;
        align-items: flex-start;
    }

    .button {
        margin-top: 10px;
    }
}
</style>
    