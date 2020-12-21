<template>
    <div class="home">
        <Header/>
        <h1>Home Component...</h1>
    </div>
    
</template>

<script>
import Header from './Header';

export default {
    name: "home",
    components: {
        Header
    }
}
</script>