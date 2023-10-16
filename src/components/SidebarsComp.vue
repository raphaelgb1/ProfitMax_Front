<template>
    <!-- <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <slot></slot>
        </div>
    </div> -->
    <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasDark" role="button"
        aria-controls="offcanvasExample">
        Link with href
    </a>
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDark"
        aria-controls="offcanvasExample">
        Button with data-bs-target
    </button>
    <!-- <div ref="offcanvas" class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <slot name="header"></slot>
        </div>
        <div class="offcanvas-body">
            <slot name="body"></slot>
        </div>
    </div> -->
    <div ref="offcanvas" class="offcanvas offcanvas-start show text-bg-dark" tabindex="-1" id="offcanvasDark" aria-labelledby="offcanvasDarkLabel">
        <div class="offcanvas-header">
            <slot name="header"></slot>
        </div>
        <div class="offcanvas-body">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Offcanvas } from 'bootstrap';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SidebarsComp',
    data() {
        return {
            OffcanvasMethods: {} as Offcanvas
        }
    },
    mounted() {
        this.OffcanvasMethods = new Offcanvas(this.$refs.offcanvas as HTMLElement, {
            keyboard: false
        });
    },
    watch: {
        OffcanvasOpen() {
            this.OffcanvasMethods.hide();
        }
    }
})
</script>