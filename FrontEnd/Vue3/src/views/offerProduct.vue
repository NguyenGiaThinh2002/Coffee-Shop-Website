<template>
  <theHeader />
  <div class="container thisProduct">
    <div class="thisproduct-container">
      <div>
        <img
          class="card-thumb"
          v-bind:src="product.image"
          style="width: 570px; height: 570px"
        />
      </div>
      <div class="container card-info-thisProduct">
        <h1>{{ product.name }}</h1>
        <p>
          {{
            new Intl.NumberFormat().format(calculateTotal).replaceAll(",", ".")
          }}
          đ
          <!-- {{ calculateTotal }} -->
        </p>
        <h6>Số lượng</h6>
        <div class="product-quantity" style="">
          <button @click="decreaseQuantity" class="button-decrease">-</button>
          <span>{{ quantity }}</span>
          <button @click="increaseQuantity" class="button-increase">+</button>
        </div>

        <h3>Chọn size</h3>
        <div class="product-sizes" style="display: flex; flex-direction: row">
          <input
            type="radio"
            v-model="selectedSizes"
            class="btn-check"
            name="options"
            value="option1"
            id="option1"
            autocomplete="off"
            checked
          />
          <label class="btn btn-secondary" for="option1">Nhỏ +0 đ</label>
          <div v-for="size in product.sizes" :key="size._id">
            <input
              type="radio"
              class="btn-check"
              name="options"
              :id="'size-' + size.name"
              :value="size"
              v-model="selectedSizes"
              autocomplete="off"
            />
            <label class="btn btn-secondary" :for="'size-' + size.name"
              >{{ size.name }} +{{
                new Intl.NumberFormat().format(size.price).replaceAll(",", ".")
              }}
              đ</label
            >
          </div>
        </div>

        <h3>Toppings</h3>
        <div class="product-toppings" style="display: flex; flex-wrap: wrap">
          <div v-for="topping in product.toppings" :key="topping._id">
            <input
              type="checkbox"
              class="btn-check"
              name="options"
              :id="'topping-' + topping.name"
              :value="topping"
              v-model="selectedToppings"
              autocomplete="off"
            />
            <label class="btn btn-secondary" :for="'topping-' + topping.name"
              >{{ topping.name }}
              {{
                new Intl.NumberFormat()
                  .format(topping.price)
                  .replaceAll(",", ".")
              }}
              đ</label
            >
          </div>
        </div>
        <div class="Order-product" style="display: flex;">
          <router-link to ="/offerProduct/cart" style="text-decoration: none!important;">
          <button type="button" class="btn-order"  @click="cartPage()">
            <h5>Đặt hàng</h5>
          </button>
          </router-link>
          <button type="button" class="btn-order" @click="AddToBasket()">
            <h5>Thêm vào vỏ</h5>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="product-related-info">
    <div>
      <h4>Mô tả sản phẩm</h4>
      <h6>{{ product.description }}</h6>
    </div>
    <div>
      <h4>Sản phẩm liên quan</h4>
    </div>
    <div class="container collections" style="display: block">
      <div class="product-title"></div>
      <div class="card-products">
        <div class="menu-list-collectiions">
          <div
            class="card"
            v-for="item in relatedProducts"
            :key="item.id"
            style="width: 170px; height: 170px"
            @click="changePage()"
          >
            <router-link
              :to="{
                name: 'offerProduct',
                params: { id: item._id },
                components: item,
              }"
              style="text-decoration: none"
            >
              <img
                class="card-thumb"
                v-bind:src="item.image"
                style="width: 170px; height: 170px"
              />
              <div class="card-info">
                <h6>{{ item.name }}</h6>
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

// import axios from 'axios';
import axios from "../services/axios";
export default {
  name: "thinh",
  components: {
    theHeader,
    theFooter,
  },
  data() {
    return {
      product: {},
      relatedProducts: [],
      // selectedSizes: [],
      selectedSizes: "",
      selectedToppings: [],
      quantity: 1,
      userId: "",
      totalPrice: 0,
      orderDetails: {},
    };
  },
  created() {
    this.userId = localStorage.getItem("userId");
    this.getProduct();
  },

  methods: {
    getProduct(){
      axios.get(`/product/getAllProduct`).then((res) => {
      console.log(res.data);
      this.product = res.data.find(
        (product) => product._id == this.$route.params.id
      );
      this.relatedProducts = res.data.filter(
        (products) =>
          products.type === this.product.type &&
          products._id !== this.product._id
      );
    });
      
    },
    changePage() {
      // location.reload();
      this.getProduct();
      this.selectedSizes = "option1";
      this.selectedToppings = [];
      this.quantity = 1;
    },
    cartPage(){
      // this.AddToBasket();
      if (!this.userId) {
        alert("Vui Long Dang Nhap");
      } else {
        this.orderDetails.orderId = this.product._id;
        this.orderDetails.userId = this.userId;
        this.orderDetails.quantity = this.quantity;
        this.orderDetails.totalPrice = this.totalPrice;
        this.orderDetails.size = this.selectedSizes;
        this.orderDetails.toppings = this.selectedToppings;
        this.orderDetails.name = this.product.name;
        axios
          .post(`/orderDetail`, this.orderDetails)
          .then((res) => {
            // this.orderDetails = "";
            // document.location.href = "/offerProduct/cart"
            // location.reload();
            
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    ,
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    AddToBasket() {
      if (!this.userId) {
        alert("Vui Long Dang Nhap");
      } else {
        this.orderDetails.orderId = this.product._id;
        this.orderDetails.userId = this.userId;
        this.orderDetails.quantity = this.quantity;
        this.orderDetails.totalPrice = this.totalPrice;
        this.orderDetails.size = this.selectedSizes;
        this.orderDetails.toppings = this.selectedToppings;
        this.orderDetails.name = this.product.name;
        axios
          .post(`/orderDetail`, this.orderDetails)
          .then((res) => {
            // this.orderDetails = "";
            // location.reload();
            this.getProduct();
            this.selectedSizes = "option1";
            this.selectedToppings = [];
            this.quantity = 1;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  mounted() {
    
  },
  computed: {
    calculateTotal() {
      let basePrice = this.product.price;
      if (this.selectedSizes === "option1") {
        basePrice = this.product.price;
      } else if (this.selectedSizes !== "option1") {
        basePrice = this.selectedSizes.price + this.product.price;
      }
      if (!this.selectedSizes) {
        basePrice = this.product.price;
      }
      const toppingPrice = this.selectedToppings.reduce(
        (total, topping) => total + topping.price,
        0
      );
      this.totalPrice = (basePrice + toppingPrice) * this.quantity;
      return (basePrice + toppingPrice) * this.quantity;
    },
  },
};
</script>

<style>
div .thisproduct-container {
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 50px;
}

div .thisProduct {
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
}

div .product-related-info {
  margin-left: 120px;
}

div .card-info-thisProduct {
  width: 570px;
  height: 570px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: flex-start;
}

.btn-secondary:hover {
  border-color: #e57905 !important;
  background: #e57905 !important;
  color: #fff !important;
}

.btn-check:checked + .btn-secondary {
  border-color: #e57905 !important;
  background: #e57905 !important;
  color: #fff !important;
}

label.btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  height: 40px;
  line-height: 1;
  font-weight: 400;
  margin-right: 16px;
  font-size: 14px;
  background-color: #fff;
  color: #666666;
}

label.btn {
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  color: #666666;
  height: 40px;
  padding: 0 15px;
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.15);
  position: relative;
  margin: 10px 20px 10px 0;
}

div .button-decrease {
  align-items: center;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  height: 20px;
  line-height: 1;
  font-weight: 400;
  margin-right: 16px;
  font-size: 14px;
  background-color: #fff;
  color: #666666;
}

div .button-increase {
  align-items: center;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  height: 20px;
  line-height: 1;
  font-weight: 400;
  margin-right: 16px;
  margin-left: 16px;
  font-size: 14px;
  background-color: #fff;
  color: #666666;
}

div .btn-order {
  background: #e57905;
  margin-top: 15px;
  border-radius: 8px;
  padding: 12px 0;
  text-align: center;
  width: 285px;
  height: 50px;
}

h5 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
}
</style>
