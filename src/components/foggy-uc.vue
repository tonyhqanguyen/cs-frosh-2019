<template>
  <div class="background-page">
    <section class="fog">
      <figure
        class="absolute-bg"
        style="background-image: url('https://wallpapercave.com/wp/2w9pZKq.jpg');"
      >
        <div class="space"/>
        <typing-welcome-text class="welcome-text"/>
      </figure>
      <div class="fog__container">
        <div class="fog__img fog__img--first"></div>
        <div class="fog__img fog__img--second"></div>
      </div>
    </section>
  </div>
</template>

<script>
import TypingWelcomeText from "../components/typing-welcome-text.vue";

export default {
  name: "foggy-background",
  components: {
    TypingWelcomeText
  }
};
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: inherit;
}

figure {
  margin: 0;
  opacity: 0.85;

  .space {
    height: 13%
  }
}

.absolute-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  height: 100%;
  width: 100%;

  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}

.fog {
  position: relative;

  height: 100vh;
  width: 100%;
  
  background-color: #000;

  &__container {
    position: absolute;

    height: 100%;
    width: 100%;

    overflow: hidden;
  }

  &__img {
    position: absolute;
 
    height: 100vh;
    width: 300vw;

    &--first {
      background: url('https://s3.envato.com/files/558f4bf2-7b95-4b52-a1b7-fa1748a381d5/inline_image_preview.jpg') repeat-x;
      background-size: contain;
      background-position: center;
      animation: marquee 60s linear infinite;
    }

    &--second {
      background: url('https://s3.envato.com/files/558f4bf2-7b95-4b52-a1b7-fa1748a381d5/inline_image_preview.jpg') repeat-x;
      background-size: contain;
      background-position: center;
      animation: marquee 40s linear infinite;
    }
  }
}

@keyframes marquee {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-200vw, 0, 0); }
}
</style>