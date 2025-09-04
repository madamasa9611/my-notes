<script setup></script>

<template>
  <header class="site-header">
    <h1>my notes</h1>
    <nav>
      <ul>
        <li><a href="#">首頁</a></li>
      </ul>
    </nav>
  </header>
</template>

<style>
.site-header {
  /* 刪掉 height: 54px; */
  box-sizing: border-box; /* 保證 padding 不會再撐出意外高度 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem; /* 你原本的內距可保留 */
  background-color: aqua;
  color: white;
}

.site-header nav a {
  color: white;
  text-decoration: none;
}

.site-header nav a:hover {
  text-decoration: underline;
}
</style>
