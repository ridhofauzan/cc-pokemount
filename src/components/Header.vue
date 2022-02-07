<template>
    <div>
        <div class="poke-logo">
            <img class="poke-logo__img" src="./../assets/logo/pokemon.png" alt="">
        </div>
        <ul class="poke-menu">
            <li><router-link to="/">Pokedex</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
        </ul> 
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.poke {
  &-logo {
    padding: 20px;
    &__img {
      width: 200px;
      margin: 0 auto;
      display: block;
    }
  }
  &-menu {
    margin-top: 20px;
    margin: 0 auto;
    padding: 0;
    display: table;
    li {
      display: inline-flex;
      flex-wrap: wrap;
      padding: 16px 32px;
      color: #FFFFFF;
      a {
        color: #FFFFFF;
        text-decoration: none;
      }
      &:hover {
        background: #c4ead8;
        border-radius: 4px;
        color: #43b781;
        cursor: pointer;
        a {
          color: #43b781;
        }
      }
    }
  }
}
</style>