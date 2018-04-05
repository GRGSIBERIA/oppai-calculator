<!-- script -->
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';


@Component<InputForm>({})
export default class InputForm extends Vue {
    @Prop() title: string;
    @Prop() value: string;
    @Prop() unit: string;
}

</script>

<!-- template -->
<template>
    <div class="form-parent">
        <div class="form-title">
            {{title}}
        </div>
        <input class="form-value" type="number" name="title"/>
        <div class="form-unit">
            ({{unit}})
        </div>
    </div>
</template>

<!-- style -->
<style lang="scss">
.form-parent {
    width: 100%;
    display: flex;
}
.form-title {
    width: 30%;
}
.form-value {
    width: 30%;
    text-align: right;
}
.form-unit {
    padding-left: 8px;
}
</style>
