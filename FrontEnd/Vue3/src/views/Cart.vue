<template lang="">
  <div>
    <theHeader />
  </div>

  <div class="body" style="margin: 80px; ">
    <div class="Order-checkout" style="">
      <span v-if="!offerSuccess">
        <h1>Xác nhận đơn hàng</h1>
      </span>
      <span v-if="offerSuccess">
        <h1>Đặt Hàng Thành Công</h1>
      </span>

      <div class="Order-info">
        <div class="user-info">
          <div class="Payment-info">
            <div><h4>Giao Hàng</h4></div>
            <div class="shipper" style="display: flex; margin-top: 10px">
              <img
                v-bind:src="shipper.shipper"
                alt="Chicago"
                class="d-block w-100"
                style="width: 30px !important"
              />
              <h6 style="margin-left: 10px">Người Giao Hàng: Nguyễn Văn Lăm</h6>
            </div>

            <p>Nhận Hàng Trong Ngày</p>
            <p>Thời Gian Giao Hàng: 15-30 Phút</p>
            <p>Miễn Phí Ship Trong Vòng 10km</p>
            <p>Thanh Toán Khi Nhận Hàng</p>

            <br />
            <div class="user">
              <div style="display: flex; justify-content: space-between">
                <h6 style="margin-left: 75px">Người Nhận Hàng</h6>
                <span v-if="editIndex === 0">
                  <button
                    @click="edit()"
                    v-if="!offerSuccess"
                    class="btn btn-sm btn-outline-secondary mr-2"
                  >
                    Sửa
                  </button>
                </span>
                <span v-if="editIndex === 1">
                  <button
                    @click="save()"
                    class="btn btn-sm btn-outline-secondary mr-2"
                  >
                    Lưu
                  </button>
                </span>
              </div>
              <span v-if="editIndex === 0">
                <p>Họ và Tên: {{ this.UserDetails.username }}</p>
                <p>Số Điện Thoại: {{ this.UserDetails.phone }}</p>
                <p>Địa Chỉ: {{ this.UserDetails.address }}</p>
              </span>

              <span v-if="editIndex === 1">
                <p>
                  Họ và Tên:
                  <input
                    v-model="this.UserDetails.username"
                    placeholder="Enter Size Name"
                    style="width: 300px"
                  />
                </p>
                <p>Số Điện Thoại: {{ this.UserDetails.phone }}</p>
                <p>
                  Địa Chỉ
                  <input
                    v-model="this.UserDetails.address"
                    placeholder="Enter Size Name"
                    style="width: 300px"
                  />
                </p>
              </span>
            </div>
          </div>
        </div>

        <div class="order-info">
          <div
            style="display: flex; flex-direction: row"
            class="content-order-heading"
          >
            <h4 style="padding: 10px">Các món đã chọn</h4>
            <router-link to="/collections/AllCollections">
            <div v-if="!offerSuccess">
              <button
                type="button"
                class="btn btn-light"
                style="justify-content: flex-end"
                
              >
                <p style="color: black">Thêm món</p>
              </button>
            </div>
            </router-link>

          </div>

          <div class="orderDetails-info">
            <div
              v-for="item in OrderDetails"
              :key="item.id"
              class="each-orderDetail"
            >
              <h6>{{ item.quantity }}x {{ item.name }}</h6>
              <div v-for="size in item.size" :key="size._id">
                <p style="margin-top: 0; margin-bottom: 0px" v-if="!size">
                  Nhỏ
                </p>
                <p style="margin-top: 0; margin-bottom: 0px" v-if="size">
                  {{ size.name }}
                </p>
              </div>

              <div class="toppings-container">
                <div
                  v-for="(topping, index) in item.toppings"
                  :key="index"
                  class="topping-item"
                >
                  <p style="margin-top: 0; margin-bottom: 0">
                    {{ topping.name }}
                    <span v-if="index < item.toppings.length - 1">
                      +&nbsp
                    </span>
                  </p>
                </div>
              </div>
              <!-- style="float: right;" -->
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                "
              >
                <h6 style="margin-top: 10px">
                  {{
                    new Intl.NumberFormat()
                      .format(item.totalPrice)
                      .replaceAll(",", ".")
                  }}
                  đ
                </h6>
                <div>
                  <button
                    v-if="!offerSuccess"
                    @click="deleteProduct(item)"
                    class="btn btn-sm btn-outline-secondary mr-2"
                  >
                    Xoá
                  </button>
                </div>
              </div>
            </div>
            <div
              style="
                display: flex;
                flex-direction: row;
                justify-content: space-between;
              "
            >
            <!-- <h6>{{ getUserOrder}}</h6> -->

              <h6 style="margin: 15px 10px 5px 10px">Tổng Cộng</h6>
              <!-- <h6 style="margin: 15px 10px 5px 10px">{{cartQuantity}} </h6> -->
              <h6 style="margin: 15px 10px 5px 10px">
                {{
                  new Intl.NumberFormat()
                    .format(getTotalPrice)
                    .replaceAll(",", ".")
                }}
                đ
              </h6>
            </div>
            <!-- {{ this.t }} -->
            <button
              v-if="!offerSuccess"
              type="button"
              class="btn-order"
              style="width: 100%"
              @click="order()"
            >
              <h5>Đặt hàng</h5>
            </button>
            <div
              v-if="offerSuccess"
              class="offer-alert"
              style="margin-top: 10px; margin-left: 10px"
            >
              <p>Đơn Hàng Của Bạn Đang Được Xử Lý!</p>
            </div>
            <div v-if="offerSuccess" style="margin-left: 10px">
              <p>Ngày Đặt Hàng: {{ formattedDate }}</p>
              <h6 style="margin: 15px 10px 5px 10px" v-if="getUserOrder > 0 && (getUserOrder == 0 || getUserOrder > 0)">Cảm ơn bạn đã quay lại cửa hàng</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <h6>{{ this.OrderDetails }}</h6> -->
  <theFooter />
</template>

<script>
import theHeader from "../components/theHeader.vue";
import theFooter from "../components/theFooter.vue";
import shipper from "../assets/banner_home/shipper.png";
import axios from "../services/axios";
export default {
  components: {
    theHeader,
    theFooter,
  },
  created() {
    this.userId = localStorage.getItem("userId");
    this.getProduct();
    axios.get(`/order/getOrder`).then((res) => {
        this.Orders = res.data;
    });
    // this.t = this.getUserOrder();
  },

  data() {
    return {
      userId: "",
      UserDetails: {},
      OrderDetails: [],
      shipper: {
        shipper: shipper,
      },
      editIndex: 0,
      Orders: [],
      Order: {},
      offerSuccess: 0,
      t: null,
      tt: 0,
    };
  },
  computed: {
    // cartQuantity() {
    //   // Calculate the total quantity in the cart
    //   return this.OrderDetails.reduce((total, product) => total + product.quantity, 0);
    // },
    getUserOrder() {
      return this.Orders.reduce((total, product) => {
        if (product.isShipped && product.phone == this.userId) {
          return total + product.quantity;
        }
        return total;
      }, 0);
    },
    // z(){
    //   console.log(this.getUserOrder);
    // },
    getTotalPrice() {
      // Use Array.reduce to sum the prices of selected products
      return this.OrderDetails.reduce(
        (total, product) => total + product.totalPrice,
        0
      );
    },
    reload() {
      if ((this.offerSuccess = 1)) {
        location.reload();
      }
    },
    formattedDate() {
      const date = new Date();
      return date.toLocaleString(); // Use a format that suits your needs
    },
  },
  mounted() {},

  methods: {
    getProduct(){
      axios.get(`/user/findUser`).then((res) => {
      this.UserDetails = res.data.find((user) => user.phone == this.userId);
      axios.get(`/orderDetail/findOrderDetail`).then((res) => {
        this.OrderDetails = res.data.filter(
          (order) => order.userId == this.userId
        );
      });
    });
    },
    deleteProduct(item) {
      axios
        .post(`/orderDetail/deleteOrderDetail`, item)
        .then((res) => {
          // location.reload();
          // this.created();
          this.getProduct();

        })
        .catch((err) => {
          console.log(err);
        });
    },

    edit() {
      this.editIndex = 1;
    },

    save() {
      axios
        .post(`/user/updateUser`, this.UserDetails)
        .then((res) => {
          // alert("Chinh sua thanh cong")
        })
        .catch((err) => {
          console.log(err);
        });
      this.editIndex = 0;
    },

    order() {
      this.Order.orderDate = this.formattedDate;
      this.Order.isShipped = false;
      this.Order.username = this.UserDetails.username;
      this.Order.phone = this.UserDetails.phone;
      this.Order.address = this.UserDetails.address;
      for (const item of this.OrderDetails) {
        this.Order.orderId = item.orderId;
        this.Order.userId = item.userId;
        this.Order.quantity = item.quantity;
        this.Order.totalPrice = item.totalPrice;
        this.Order.size = item.size;
        this.Order.toppings = item.toppings;
        this.Order.name = item.name;
        axios
          .post(`/order`, this.Order)
          .then((res) => {
            // this.deleteProduct(item);
            // this.Order = "";
            axios.post(`/orderDetail/deleteOrderDetail`, item);
            // console.log(item);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      // alert("Đặt hàng thành công");
      // location.reload();
      this.offerSuccess = 1;
    },
  },
};
</script>
<style>
div .Order-checkout {
  display: block;
  text-align: center;
  align-items: center;
  /* background-color: aqua; */
}

div .user-info {
  display: inline-flex;
  align-items: center;
  margin-right: 100px;
}

div .order-info {
  box-sizing: border-box;
  border: 10px;
  display: inline-flex;
  flex-direction: column;
  align-items: left;
  margin-top: 30px;
  border-radius: 10px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.12);
  padding: 0;
}

div .content-order-heading {
  position: relative;
  width: 470px;
  height: 54px;
}

div .content-order-heading::after {
  content: "";
  /* Required for ::after pseudo-element */
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  /* Adjust the height for your desired border thickness */
  background-color: #000;
}

div .orderDetails-info {
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* width: 433px; */
  margin: 0px;
}

div.each-orderDetail {
  margin: 20px 0px 0px 20px;
  width: 420px;
  position: relative;
  border-bottom: 1px solid black;
}

div .toppings-container {
  display: flex;
  /* Use flexbox to arrange toppings horizontally */
  flex-wrap: wrap;
  margin-left: 20px;
  /* Prevent toppings from wrapping to the next row */
}

.topping-item {
  margin-left: -20px;
  margin-right: 10px;
  /* Add spacing between toppings */
  padding: 5px;
  /* Add some padding for better appearance */
}

.btn.btn-light {
  border-radius: 20px;
  /* border: #000;  */
  border: 1px solid black !important;
  width: 100px;
  height: 40px;
  background-color: white;
  margin-left: 150px;
  margin-top: 7px;
}
</style>
// this.Order.push({ // orderDate: orderDate, // userId: item.userId, //
orderId: item.orderId, // quantity: item.quantity, // totalPrice:
item.totalPrice, // size: item.size, // toppings: item.toppings, // name:
item.name, // TotalOrderPrice: TotalOrderPrice, // });
