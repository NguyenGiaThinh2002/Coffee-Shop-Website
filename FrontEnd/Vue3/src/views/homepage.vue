<template lang="">
  <!-- <link rel="icon" href="../assets/banner_home/p1.png">  -->
  <body class="body">
    <div class="loader_overlay loaded"></div>
    <theHeader />
    <!-- Carousel -->
    <section class="banner-home">
      <div id="demo" class="carousel slide" data-bs-ride="carousel">
        <!-- Indicators/dots -->
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <!-- The slideshow/carousel -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/banner_home/p1.png"
              alt="Los Angeles"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img src="../assets/banner_home/p2.png" alt="Chicago" class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/banner_home/p3.png"
              alt="New York"
              class="d-block w-100"
            />
          </div>
        </div>

        <!-- Left and right controls/icons -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
    <section class="menu-home">
      <div
        class="container"
        style="display: block; z-index: 1; position: relative"
      >
        <div
          class="menu_list_home flex_wrap display_flex"
          style="justify-content: center; align-item: center"
        >
          <div class="menu_item menu_banner">
            <a title="tra xanh" href="#"></a>
            <img
              id="p4"
              src="../assets/tra_xanh/traxanh.png"
              alt="New York"
              class="d-block"
            />
          </div>

          <div class="card-products card-container flex" >
            <router-link to= "/offerProduct/650adfda3131b7dfed308d01" style="text-decoration: none !important" >
               <!-- Look at Here  -->
            <div class="card">

              <img
                class="card-thumb no-underline"
                src="https://res.cloudinary.com/dlbfiyzfq/image/upload/v1695211482/ECMA/ca_den_da_vmndrx.jpg"
                style="text-decoration: none;"
              />
  
              <div class="card-info" >
                <h6 >Cà Phê Đen Đá</h6>
                <p>35.000 đ</p>
              </div>
            </div>
            </router-link>
          </div>

          <div class="card-products">
            <div class="card">
              <router-link to= "/offerProduct/65159528a7112d061fac5f24" style="text-decoration: none !important" >
              <img
                class="card-thumb" 
                src="https://res.cloudinary.com/dlbfiyzfq/image/upload/v1695913256/ECMA/tra_dao_cam_sa_nong_xs8dls.webp"
              />
              <!-- </router-link> -->
              <div class="card-info">
                <h6>Trà Đào Cam Sả Nóng</h6>
                <p>40.000 đ</p>
              </div>
              </router-link>
            </div>
          </div>
        </div>

        <div style="margin-top: 30px; display: flex; flex-direction: row">
          <div
            class="card-products"
            style="margin-left: 47px"
          >
            <div class="card">
              <router-link to= "/offerProduct/651596c9a7112d061fac5f2f" style="text-decoration: none !important" >
              <img
                class="card-thumb"
                src="https://res.cloudinary.com/dlbfiyzfq/image/upload/v1695913673/ECMA/tra_den_macchiato_x6togq.webp"
              />
              <div class="card-info">
                <h6>Trà Đen Macchiato</h6>
                <p>45.000 đ</p>
              </div>
              </router-link>
            </div>
          </div>
          <div class="card-products" >
            <div class="card">
              <router-link to= "/offerProduct/6515976aa7112d061fac5f35" style="text-decoration: none !important" >
              <img
                class="card-thumb"
                src="https://res.cloudinary.com/dlbfiyzfq/image/upload/v1695913834/ECMA/tra-sua-oolong-nuong-tran-chau_hwtem5.webp"
              />

              <div class="card-info">
                <h6>Trà sữa Oolong Nướng Trân Châu</h6>
                <p>45.000 đ</p>
              </div>
              </router-link>
            </div>
          </div>
          <div class="card-products" >
            <div class="card">
              <router-link to= "/offerProduct/6515988ea7112d061fac5f3c" style="text-decoration: none !important" >
              <img
                class="card-thumb"
                src="https://res.cloudinary.com/dlbfiyzfq/image/upload/v1695914125/ECMA/Frosty_Phin_Gato_z0wy4p.webp"
              />
              <div class="card-info">
                <h6>Frosty Phin Gato </h6>
                <p>55.000 đ</p>
              </div>
              </router-link>
            </div>
          </div>
          <div class="card-products" >
            <div class="card">
              <router-link to= "/offerProduct/651598fba7112d061fac5f42" style="text-decoration: none !important" >
              <img
                class="card-thumb"
                src="https://res.cloudinary.com/dlbfiyzfq/image/upload/v1695914235/ECMA/Frosty-Banh-Kem-Dau_rpf0lq.webp"
              />
              <div class="card-info">
                <h6>Frosty Bánh Kem Dâu</h6>
                <p>55.000 đ</p>
              </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <h1 style="margin-left: 97px;">Không Gian Quán </h1>
      </div>
      <div class="d-flex flex-wrap justify-content-around container">

          <img src="../assets/space/space1.jpg" class="shop_space" style="width: 45%;" alt="">


          <img src="../assets/space/space2.jpg" class="shop_space" style="width: 45%;" alt="">


          <img src="../assets/space/space3.jpg" class="shop_space" style="width: 45%;" alt="">


          <img src="../assets/space/space4.jpg" class="shop_space" style="width: 45%;" alt="">

      </div>
    </section>
    <section>
      <div class="container"  style="margin: 27px;">
        <!-- <h1>King Coffee </h1> -->
      </div>
      <div class="d-flex flex-wrap justify-content-around container">
          <img src="../assets/space/KingCoffee1.png" class="shop_space" style="width: 100%;" alt="">
      </div>
    </section>
    <section>
      <div class="container"  style="margin: 27px;">
        <h1>Về Công Ty King Coffee </h1>
      </div>
      <div class="d-flex flex-wrap justify-content-around container">
          <img src="../assets/space/KingCoffee.png" class="shop_space" style="width: 100%;" alt="">
      </div>
    </section>

  </body>
  <theFooter />
</template>
<!-- v-bind:src="products.p1" -->
<script>
import theHeader from "../components/theHeader.vue";
import theFooter from "../components/theFooter.vue";
export default {
  created() {
    this.userId = localStorage.getItem('userId');
  },
  data() {
    return {
      product: {
        userId: '',
      },
      products:[],
    };
  },
  components: {
    theFooter,
    theHeader,
  },
  mounted() {
  const userId = localStorage.getItem('userId');
  if (userId) {
    // You have the user ID, you can use it as needed
    console.log('User ID:', userId);
  } else {
    // User ID not found in localStorage
    console.log('User ID not found');
  }
}

};
</script>
<style>
body .body {

  max-width: 1440px;
  /* height: 4116px; */
  overflow: hidden;

  margin: 0;
  font-family: var(--bs-font-sans-serif);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
}
.a:hover {
  color: antiquewhite;
}

.menu_banner > a > img {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
section .menu-home {
  background: #ffffff;
  /* padding: 0px 0 32px; */
  position: relative;
  /* max-width: 1440px; */
}

.loader_overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #fff;
  transition: all 0.1s ease;
}
.loader_overlay.loaded {
  opacity: 0;
  visibility: hidden;
  z-index: -2;
}

.banner-home {
  transform: translateY(-60px);
  position: relative;
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
  margin-bottom: 30px;
  margin-left: 30px;
  border-radius: 10px;
}
.card .card-thumb {
  width: 270px;
  height: 270px;
  border-radius: 10px;


  box-sizing: border-box;
}

.menu_list_home {
  display: flex;
  flex-direction: row;
}

a:any-link {
color: -webkit-link;
cursor: auto;
}
#p4 {
  /* margin-left: 100px; */
  border-radius: 10px;
  width: 570px;
  height: 371px;
}
h6 {
  margin-top: 10px;
  margin-bottom: 4px;
  font-weight: 600;
  color: #191919;
  font-size: 16px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* line-height: 1.4;
  color: #000;
  font-weight: 600;
  font-family: 'SF Pro Display', sans-serif; */
}

p{
  font-size: 14px;
  color: #00000099;
  margin-bottom: 10px;
}

#menu-home-container {
  width: 1200px;
  height: 789px;
}
div .card-info{
  padding: 12px 0 0;
}

.shop_space {
  border-radius: 20px;
  margin-top: 40px;
}

.shop_space:hover {
  transition: all 0.2s ease-in-out;
  border: 3px #fffffe solid;
}
</style>
