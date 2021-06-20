<template>
  <header class="ds-header">
    <router-link to="/"
    class="ds-header-main">
        desapega
    </router-link>
    <nav>
      <router-link to="/"
      class="ds-header-nav">
        buscar
      </router-link>
      <router-link to="/anuncios"
      class="ds-header-nav">
        desapegar
      </router-link>
      <router-link to="/quem-somos"
      class="ds-header-nav">
        quem somos
      </router-link>
      <router-link to="/perfil"
      class="ds-header-nav">
        <DsIcon name="profile" />
      </router-link>
    </nav>
  </header>
</template>

<style lang="scss">
.ds-header {
  background-color: $ds-purple;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 90px;
  margin-bottom: 30px;
  padding: 0px 20px 20px;

  a {
    color: white;
    font-family: 'Chewy';
  }

  nav {
    display: flex;
    align-items: flex-end;
    gap: 30px;
  }

  svg {
    height: 35px;
  }

  &-main {
    font-size: 40px;
  }

  &-nav {
    font-size: 24px;
    transition: opacity $time;

    &, svg {
      opacity: .5;
    }

    &.router-link-exact-active {
      &, svg {
        opacity: 1;
      }
    }
  }
}
</style>
