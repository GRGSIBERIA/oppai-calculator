<!-- script -->
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';


@Component<InputForm>({})
export default class InputForm extends Vue {
    @Prop({default: "test", type: String}) title: string;
    @Prop({default: "test", type: String}) dataValue: string;
}

</script>

<!-- template -->
<template>
    <div>
        <p>
            hoge
        </p>
        <p>
            {{ title }}
        </p>
    </div>
</template>

<!-- style -->
<style lang="scss">

</style>
