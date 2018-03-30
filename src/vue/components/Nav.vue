<!-- script -->
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component<VueComponent>({
})
export default class VueComponent extends Vue {
}
</script>

<!-- template -->
<template>
    <div id="nav">
        <ul>
            <li class="first">
                <router-link :to="{ name: 'index' }">Index</router-link>
            </li>
            <li class="last">
                <router-link :to="{ name: 'config' }">Config</router-link>
            </li>
        </ul>
    </div>
</template>

<!-- style -->
<style lang="scss" scoped>
#nav {
    margin: 50px 25px 0;
}
#nav ul {
    list-style-type: none;
}
#nav li {
    float: left;
    border-right: 1px solid #aaa;
    text-align: center;
}
#nav li a { 
    display: block;
    width: 120px;
    line-height: 25px;
}
#nav li.first {
    border-left: 1px solid #aaa;
}
#nav li a:link, #nav li a:visited {
    color: #000;
    text-decoration: none;
}
#nav li a:hover {
    background-color: #eaebb2;
}
</style>
