<template lang="">
  <theHeader />
  <div class="container menu-wrap">
    <sidebar />

    <!-- <div class="card-products card-container flex" :class="classTesting">
      <div class="card" v-for="product in products" :key="product.id">
        <img class="card-thumb" src="{{ product.image }}" />
        <h6>{{ product.name }}</h6>
        <p>{{ product.price }}</p>
      </div>
    </div> -->
    <!-- v-for="product in products" :key="product.id" -->

    <div class="container collections" style="display: block">
      <div class="product-title">
        <h3>Cà Phê</h3>
      </div>
      <div class="card-products">
        <div class="menu-list-collectiions">
          <div class="card" v-for="product in products" :key="product.id">
            <router-link
              :to="{
                name: 'offerProduct',
                params: { id: product._id },
                components: product,
              }"
              style="text-decoration: none !important"
            >
              <!-- <div class="Coffee-type" v-if="product.type === 'Ca Phe' "> -->
              <img class="card-thumb" v-bind:src="product.image" />
              <div class="card-info">
                <h6>{{ product.name }}</h6>
                <p>
                  {{
                    new Intl.NumberFormat()
                      .format(product.price)
                      .replaceAll(",", ".")
                  }}
                  đ
                </p>
              </div>
            </router-link>
            <!-- v-if="products.type === 'Ca Phe' " -->
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <theFooter />
</template>
<script>
import theHeader from "../components/theHeader.vue";
import theFooter from "../components/theFooter.vue";
import sidebar from "./sidebar.vue";
import axios from "../services/axios";
// import createFunction from "../views/product.vue";
// import { created } from "../views/product.vue";
export default {
  components: {
    theHeader,
    theFooter,
    sidebar,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    axios.get(`/product/getAllProduct`).then((res) => {
      this.products = res.data.filter((products) => products.type === "Ca Phe");
    });
  },

  methods: {},
};
</script>

<style>
.menu-wrap {
  max-width: 1440px;
  height: 4116px;
  margin-top: 56px;
  padding: 40px 0 50px;
}

body .menu-bar {
  transform: translateY(-60px);
  position: relative;
}

#sidebar {
  background-color: #fff;
}
.container .collections {
  padding-left: 72px;
}
div .card-products {
  display: block;
  flex-direction: row;
}
div .card {
  display: block;
  border-style: hidden;
  text-align: center;
  align-items: flex-start;
  justify-content: flex-start;
  box-shadow: 0px 0px 13px 0px #00000040;
  width: 270px;
  height: 270px;
  /* margin-bottom: 30px;
  margin-left: 30px; */
  margin: 0 15px 40px;
  border-radius: 10px;
}
.card .card-thumb {
  width: 270px;
  height: 270px;
  border-radius: 10px;

  box-sizing: border-box;
}
div .product-title {
  float: none;
  display: inline-block;
  margin-bottom: 24px;
  position: relative;
  margin-bottom: 30px;
  margin-top: 0;
  font-size: 24px;
  font-family: "SF Pro Display", sans-serif;
}

div .menu-list-collectiions {
  display: flex;
  flex-wrap: wrap;
}
</style>
