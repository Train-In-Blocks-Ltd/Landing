<template>
  <div>
    <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <router-link class="input--option" to="/">Welcome</router-link>
      <router-link class="input--option" to="/features">Demo</router-link>
      <router-link class="input--option" to="/pricing">Pricing</router-link>
      <router-link class="input--option" to="/roadmap">Roadmap</router-link>
      <router-link class="input--option" to="/Explore">Explore</router-link>
    </ul>
  </div>
  </div>
</template>

<style scoped>
/* Hidden checkbox */
#menuToggle {
  position: relative;
  margin: 0 auto;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none
}
#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  -webkit-touch-callout: none
}

/* Hamburger */
#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background-color: #282828;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0;
  transition:
    transform .5s cubic-bezier(.77, .2, .05, 1),
    background-color .5s cubic-bezier(.77, .2, .05, 1),
    opacity .55s ease
}
#menuToggle span:first-child {
  transform-origin: 0% 0%
}
#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%
}
#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px)
}
#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(.2, .2)
}
#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px)
}

/* Menu box */
#menu {
  display: grid;
  margin: 0;
  padding: 1rem 0;
  top: -5px;
  right: 60px;
  justify-items: center;
  grid-template-rows: repeat(5, 1fr);
  opacity: 0;
  position: absolute;
  width: fit-content;
  background: #fff;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  box-shadow: 0 0 20px 12px rgba(0, 0, 0, .05);
  transition: all .5s cubic-bezier(.165, .84, .44, 1)
}
#menu > a {
  margin: .6rem 2rem
}
#menu > a.router-link-exact-active {
  font-weight: 700
}
#menuToggle input:checked ~ ul {
  opacity: 1
}
</style>