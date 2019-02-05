<template lang="pug">
  footer.st-Footer
    .st-Inner
      small.st-Footer_Copyright Copyright&copy; Gurunavi, Inc. All rights reserved.
</template>

<style lang="stylus">
  .st-Footer
    border-top: 1px solid #ccc
    margin-top  120px
    padding-top: 1rem
    text-align: center
    width 100%
    
    &__Copyright
      font-size 3.2rem

@media (max-width: 600px)
  .st-Footer
    width: 100%
    margin-top: 50px;

</style>
