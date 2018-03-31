<!-- script -->
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import InputScreen from '@/vue/components/InputScreen.vue';
import CalculateScreen from '@/vue/components/CalculateScreen.vue';

@Component<VueComponent>({
    components: {
        InputScreen, CalculateScreen
    },
})
export default class VueComponent extends Vue { }
</script>

<!-- template -->
<template>
    <div>
        <div id="main-screen">
            <InputScreen id="box-left" />
            <CalculateScreen id="box-right" />
        </div>
    </div>
</template>

<!-- style -->
<style lang="scss">

#main-screen {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

#box-left {
    width: 50%;
    height: 100vh;
    background-color: #30499B;
    color: white;
    margin: 0 0 0 0;
    padding-left: 5vw;
}
#box-right {
    width: 50%;
    height: 100vh;
    background-color: #EB7B2D;
    color: white;
    margin: 0 0 0 0;
    padding-left: 5vw;
}
</style>

