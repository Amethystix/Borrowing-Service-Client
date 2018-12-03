<template>
  <div id="about">
    <div class="container">
      <div class="page-title">About PalmTree</div>
      <div class="page-text">
        PalmTree is dedicated to helping you to do something with all
        of the stuff that you have sitting around your house!  Too many people
        have tons of things that they barely even know what to do with, but would
        feel too bad throwing those things out. That's where we come in- simply
        list those items with PalmTree, and we'll find you someone who will
        help you to make those items that would normally collect dust, collect cash!
      </div>
      <div class="page-text">
        Who are we, and why do we want to help you?  Simple- this project was
        made for the class Large Scale Web Applications at New York University,
        and when picking our project, we noticed there are no real platforms for
        borrowing things online!
      </div>
      <div class="page-text">
        For more information, check out our social links on the bottom
        of the page.  Happy lending!
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/stylesheets/variables';

#about {

  .container {
    background-color: $white;
    box-sizing: border-box;
    margin: 25px auto;
    padding: 50px;
    width: 650px;
  }

  .page-text {
    margin: 20px auto;
  }

  @media (max-width: $tablet-screen) {

    .container {
      width: 100%;
    }
  }
}
</style>

