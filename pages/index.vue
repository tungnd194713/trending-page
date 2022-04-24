<template>
  <div class="body">
    <div class="box-find text-center mb-4 mb-lg-5">
    <h3 id="out" class="text-white">Search trends</h3>
    <div class="row box-home-search mt-3 pt-2 pb-2 rounded-pill">
        <div class="col-custom">
            <input type="text" class="search-input" placeholder="Something...">
        </div>
        <div class="col-12  col-lg-auto">
            <button type="button" class="btn rounded-pill float-end btn-home-search-job">
                <img src="~/assets/images/users/icon_search.svg" alt="">
                <span class="px-2" @click="test()">Search</span>
            </button>
        </div>
    </div>
</div>
<main class="container my-4 my-lg-5">
    <div class="text-center box-home-title">
        <h2>Trends</h2>
    </div>

    <div class="row">
        <div v-for="(item, index) in data" :key="index" class="col-12 col-sm-6 col-lg-4 mb-2 mb-sm-3 mb-lg-3">
          <div class="category text-center">{{ item.category }}</div>
          <div class="box-home-content">
                <div class="img-content">
                    <img :src="item.news[0].img" class="item-img"/>
                </div>
                <div class="bt-content">
                    <div v-for="element in item.news" :key="element.id" class="new-content">
                        <div class="title-content">
                            <h4>
                                <a :href="element.url" class="only-2">
                                    {{ element.title }}
                                </a>
                            </h4>
                        </div>
                        <div class="desc-content">
                            {{ element.description }}
                        </div>
                        <div class="date-content">
                            {{ element.date }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="text-center box-home-title mt-4 mt-lg-5">
        <h2>特定技能14業種</h2>
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a href="#">
                        <img src="~/assets/images/users/draft/nganh-1.jpg"/>
                        <span class="text-white">介護業</span>
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="#">
                        <img src="~/assets/images/users/draft/nganh-2.jpg"/>
                        <span class="text-white">建設業</span>
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="#">
                        <img src="~/assets/images/users/draft/nganh-3.jpg"/>
                        <span class="text-white car">自動車整備業</span>
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="#">
                        <img src="~/assets/images/users/draft/nganh-4.jpg"/>
                        <span class="text-white">農業</span>
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="#">
                        <img src="~/assets/images/users/draft/nganh-5.jpg"/>
                        <span class="text-white weld">産業機
                            械製造業</span>
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="#">
                        <img src="~/assets/images/users/draft/nganh-6.jpg"/>
                        <span class="text-white">航空業</span>
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="#">
                        <img src="~/assets/images/users/draft/nganh-2.jpg"/>
                        <span class="text-white">建設業</span>
                    </a>
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </div> -->

</main>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'IndexPage',

  data() {
    return {
      data: []
    }
  },

  async mounted() {
    await axios.get('http://localhost:3000' + '/posts').then((res) => {
        this.data = res.data
      })
    console.log(this.data)
  },

  methods: {

  },


}
</script>
<style lang='scss' scoped>
  @import '../styles/pages/_home.scss';
</style>
