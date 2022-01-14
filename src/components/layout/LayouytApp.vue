<template>
  <div class="menu">
    <div class="container">
      <div class="link-div">
        <b-link :to="{ name: 'Home' }" class="menu-link" variant="link">
          <span>Inicio</span>
        </b-link>
      </div>
      <div class="link-div">
        <b-link :to="{ name: 'Graphics' }" class="menu-link" variant="link">
          <span>Graphics</span>
        </b-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu {
  width: 100%;
  background: #f5f5f5;
  height: 10vh;
}

.menu-link {
  margin-right: 10px;
  text-decoration: none;
  color: #052333;
  font-weight: 600;
}

.container{
  display: flex;
  height: 100%;
}

.link-div {
  height: 100%;
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: center;
}

.link-div:hover{
  background: #24C6AB;
}
</style>
