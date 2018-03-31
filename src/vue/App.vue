<!-- script -->
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Nav from '@/vue/components/Nav.vue';

@Component<VueComponent>({
    components: {
        Nav,
    },
})
export default class VueComponent extends Vue { }
</script>

<!-- template -->
<template>
    <div>
        <Nav /><br>
        <div id="main-screen">
            <router-view id="box-left"></router-view>
            <router-view id="box-right"></router-view>
        </div>
    </div>
</template>

<!-- style -->
<style lang="scss">
body {
    color: red;
}

.column {
    height: 100vh;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

#main-screen {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

#box-left {
    width: 50%;
}
#box-right {
    width: 50%;
}
</style>

