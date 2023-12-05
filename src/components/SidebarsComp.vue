<template>
    <NavbarComp>
        <template v-slot:Logo>
            <a class="navbar-brand" data-bs-toggle="offcanvas" href="#offcanvasDark" role="button"
                aria-controls="offcanvasExample">
                ProfitMax
            </a>
        </template>
    </NavbarComp>
    <div ref="offcanvas" class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDark"
        aria-labelledby="offcanvasDarkLabel">
        <div class="offcanvas-header">
            <slot name="header"></slot>
        </div>
        <div class="offcanvas-body">
            <slot name="body">

            </slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Offcanvas } from 'bootstrap';
import { defineComponent } from 'vue';
import NavbarComp from './NavbarComp.vue';

export default defineComponent({
    name: "SidebarsComp",
    data() {
        return {
            OffcanvasMethods: {} as Offcanvas
        };
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
    },
    components: { NavbarComp }
})
</script>