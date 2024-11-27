<script setup>
// Init
import NavSpace from "@/components/Other/NavSpace.vue";
import { ref, onMounted } from "vue";
import DiscordStatus from "@/components/HomePage/DiscordStatus.vue";
import { marked } from "marked";
// Ref
const moreAbout = ref(false);
const handPickedImages = ref(false);
const name = ref("Default Name");
const otherCoolText = ref("Default Text");
const codinghistory = ref();

// Coding History List
async function getCodingHistoryMD() {
  console.log("getCodingHistoryMD");
  const mdfile = await fetch("/mds/history.md");
  const mdtext = await mdfile.text();
  codinghistory.value = marked(mdtext);
}
// Picker
function abcdpicker() {
  const randomValue = Math.random();
  if (randomValue < 0.25) {
    return "D";
  } else if (randomValue < 0.5) {
    return "B";
  } else if (randomValue < 0.75) {
    return "C";
  } else {
    return "A";
  }
}
// Dynamic Name
//function abcdpicker1() {
// const randomValue = (Math.random() * 4);
// switch (randomValue) {
//    case 0:
//      return "D";
//    case 1:
//      return "B";
//    case 2:
//      return "C";
//    case 3:
//      return "A";
//  }
//}
const abtestvar = abcdpicker();
function updatename() {
  if (abtestvar === "A") {
    name.value = "Yuan-Hau Wu";
  } else if (abtestvar === "B") {
    name.value = "元皓";
  } else if (abtestvar === "C") {
    name.value = "Howard Wu";
  } else {
    name.value = "吳元皓";
  }
}
updatename();
// Dynamic Other Text aka I use some vim btw.
const dytextabcd = abcdpicker();
function dyothertext() {
  if (dytextabcd === "A") {
    return "";
  } else if (dytextabcd === "B") {
    return "print('Hello World!')";
  } else if (dytextabcd === "C") {
    return "I use some vim btw.";
  } else if (dytextabcd === "D") {
    return "";
  }
}
onMounted (otherCoolText.value = dyothertext());
if (codinghistory) {
  getCodingHistoryMD();
}
</script>
<template>
  <title>首頁 | 吳元皓</title>
  <meta property="og:title" content="首頁 | 吳元皓" />
  <meta property="og:site_name" content="首頁 | 吳元皓" />
  <link rel="prefetch" href="https://utfs.io/f/CCLPSN5W2HD5ziRBkeSZ5pJYf32lWLvIK8uGb41xkHCUnXm7" />
  <link rel="dns-prefetch" href="https://blogge.yuanh.xyz/" />
  <div class="background">
    <section id="aboutme" class="about">
      <br />
      <img
        alt="hpware"
        class="pfp"
        src="https://utfs.io/f/CCLPSN5W2HD5ziRBkeSZ5pJYf32lWLvIK8uGb41xkHCUnXm7"
        draggable="false"
        style="margin-bottom: 0em"
      />
      <h2 style="margin-top: 0em; margin-bottom: 0em">
        <span style="margin-bottom:0em;" id="zhname">{{name}}</span>
      </h2>
      <DiscordStatus />
      <p style="margin-top: 0em; margin-bottom: 0em">
        嗨! 我是一個資訊工程的五專生，我對<a
          href="#photo"
          style="color: white"
          >攝影</a
        >與前端方面有興趣。 <br />習慣並熟悉使用 HTML, CSS , Vercel 與 Git &
        Debian(Ubuntu) Cli<br />
        <span>{{otherCoolText}}</span>
      </p>
      <h3>
          <a class="not-a-button profilebutton" @click="moreAbout = !moreAbout"
          >更多資訊</a
        > | <a
          href="/projects"
          style="text-decoration: none"
          class="not-a-button profilebutton"
          >我的專案</a
        >
      </h3>
      <div v-if="moreAbout" id="moreabout">
        <span style="color: rgba(255, 255, 255, 0.57)"
          >滑動螢幕或滑鼠<i class="bi bi-mouse-fill"></i
        ></span>
      </div>

      <br />
    </section>
  </div>
  <section id="moreabout">
    <Transition name="fade">
      <div v-if="moreAbout" class="experience">
          <div v-ref="codinghistory" v-html="codinghistory"></div>
      </div>
    </Transition>
  </section>
  <hr />
  <!--<section id="tools">
    <h3><i class="bi bi-tools"></i>&nbsp;使用的工具</h3>
    <p>網頁: VSCode, Webstorm, Vim</p>
    <p>Python: VSCode, PyCharm</p>
    <p>OS: Windows 11, <del>Ubuntu 24.01</del>, MacOS, Debian 12</p>
  </section>
  <hr />-->
  <section id="stats" class="gitstats">
    <h3>GitHub 資料</h3>
    <img
      src="https://raw.githubusercontent.com/hpware/gitstats/master/generated/overview.svg#gh-dark-mode-only"
      alt="GitHub Stats Overview that displays what I have done in GitHub"
      draggable="false"
    />
    <img
      src="https://raw.githubusercontent.com/hpware/gitstats/master/generated/languages.svg#gh-dark-mode-only"
      alt="GitHub Stats Languages that displays what languages I have used on GitHub"
      draggable="false"
    />
  </section>
  <hr />
  <section id="photo">
    <h3>攝影</h3>
    <p>我喜歡拍照(但沒有拍很好)</p>
    <Transition name="fade">
      <div class="photolist">
        <a
          href="https://unsplash.com/photos/a-view-of-a-building-from-across-a-hedge-a8nTktTVmxI"
        >
          <img
            src="https://images.unsplash.com/photo-1721100152646-1bbfeb581505"
            draggable="false"
          />
        </a>
        <a href="https://unsplash.com/photos/9QlTkHc6O98">
          <img
            src="https://images.unsplash.com/photo-1710587526032-1077f7076543"
            draggable="false"
          />
        </a>
        <p style="font-size: 0.8em; margin-top: 0.5em">
          Free to use with the
          <a href="https://unsplash.com/license">Unsplash License</a>
        </p>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.background {
  background-image: url("https://utfs.io/f/CCLPSN5W2HD5Hjx9nW7XEuSOswWPIZ09j31aUTe7gopyNmnk");
  background-size: cover;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  margin-left: 1px;
  margin-right: 1px;
}
.about {
  text-align: center;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.38);
}
img.pfp {
  display: block;
  margin: 0 auto 2rem;
  transition: filter 300ms;
  align-items: center;
  border-radius: 50%;
}
img.pfp:hover {
  filter: drop-shadow(0 0 2em #444444aa);
}
section.gitstats {
  img {
    transition: filter 300ms;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
  img:hover {
    filter: drop-shadow(0 0 2em #444444aa);
  }
}
br.mobilei {
  display: none;
}
@media (max-width: 1274px) {
  br.mobilei {
    display: none;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
div.experience {
  background-size: cover;
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  animation: ease-in-out 100ms zoomIn;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  border-radius: 10px;
  padding: 0.2em;
}
@keyframes zoomIn {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
@keyframes zoomOut {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.5);
  }
}
.not-a-button {
  background-color: transparent;
  border: none;
  color: rgba(191, 191, 191, 0.7);
  font-size: 1em;
  cursor: pointer;
  margin-top: 0em;
  margin-bottom: 0em;
  margin-inside: 0em;
}
div.photolist {
  img {
    width: 40%;
    margin: 0.5em;
  }
  @media (max-width: 800px) {
    img {
      width: 90%;
    }
  }
  animation: ease-in-out 100ms zoomIn;
}
.profilebutton {
  color: rgb(201, 201, 201);
  transition: all 200ms;
}
.profilebutton:hover {
  color: rgba(154, 154, 154, 0.75);
}
@media (max-width: 800px) {
  .profilebutton {
  color: rgb(201, 201, 201);
  transition: all 200ms;
}
.profilebutton:hover {
  color: rgba(154, 154, 154, 0.75);
}
}
</style>
