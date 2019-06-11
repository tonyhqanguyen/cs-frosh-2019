<template>
  <div class="typewriter">
    <h1 class="line1">The CSSU Presents: Frosh 2019!</h1>
    <h1 class="line2">Please stay tuned for more details.</h1>
  </div>
</template>

<script>
export default {
  name: "typing-welcome-text"
};
</script>

<style lang="scss">

.typewriter .line1 {
	width: auto;
	display: block;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(40, end);
  color: white;
  font-size: 4.5vw;
	text-shadow: 3px 3px 6px black;
}

.typewriter .line2 {
  width: auto;
	display: block;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  color: white;
  font-size: 4.5vw;
  text-shadow: 3px 3px 6px black;

  opacity: 0;
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;

  -webkit-animation-fill-mode: forwards; 
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-duration: 1.5s;
  -moz-animation-duration: 1.5s;
  animation-duration: 1.5s;
  animation-delay: 2.2s;
}



/* The typing effect */
@keyframes typing {
  from { max-width: 0 }
  to { max-width: 100% }
}

@-webkit-keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@-moz-keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>