import { LightningElement, track } from 'lwc';

export default class ProductOrderingSystem extends LightningElement {
  @track products = [
    {
      id:'1',
      item_image:'https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?t=st=1732360443~exp=1732364043~hmac=d441f6d8c9262f2d025497c0d4a673f16c36d2005df19639ccfca42ce70da570&w=740',
      rating:{
        stars:4.3,
        noOfReviews:6900,
      },
      company_name:'Nike',
      item_name:'Air Jordan Legacy Men Sneakers',
      current_price:12995,
      original_price:12995,
      discount:0,
  
      return_period: 14,
      delivery_date: '15 Jan 2024',
    },
    {
      id:'2',
      item_image:'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25742794/2024/3/8/8f396f61-3089-451a-97d9-c99b5e3d15db1709900547807-UNRL-Men-Graphic-Printed-Relaxed-Fit-Pure-Cotton-T-shirt-984-1.jpg',
      rating:{
        stars:4.3,
        noOfReviews:388,
      },
      company_name:'UNRL',
      item_name:'Printed Pure Cotton T-shirt',
      current_price:630,
      original_price:1147,
      discount:45,
  
      return_period: 14,
      delivery_date: '15 Jan 2024',
    },
    {
      id:'3',
      item_image:'https://img.freepik.com/premium-vector/smart-watch-realistic-icons-isolated-white-technology-electronic-gadgets-wrist-watch-vector-illustration_514344-1181.jpg',
      rating:{
        stars:4.3,
        noOfReviews:5690,
      },
      company_name:'WROGN',
      item_name:'Men Brown Leather Analouge Watch',
      current_price:1400,
      original_price:2800,
      discount:50,
  
      return_period: 14,
      delivery_date: '15 Jan 2024',
    },
    {
      id:'4',
      item_image:'https://images.fancode.com/media/catalog/product/j/e/je0095_1.jpg',
      rating:{
        stars:5.0,
        noOfReviews:10000,
      },
      company_name:'ADIDAS',
      item_name:'Indian Cricket ODI Jersey',
      current_price:999,
      original_price:999,
      discount:0,
  
      return_period: 14,
      delivery_date: '15 Jan 2024',
    },
    {
      id:'5',
      item_image:'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/27657946/2024/2/27/d69f1b3f-a5c1-4e24-9921-ded06231fd7a1709030875823-Roadster-Men-Tshirts-2791709030875512-1.jpg',
      rating:{
        stars:4.2,
        noOfReviews:3500,
      },
      company_name:'Roadster',
      item_name:'Pure Cotton T-shirt',
      current_price:489,
      original_price:1399,
      discount:65,
  
      return_period: 14,
      delivery_date: '15 Jan 2024',
    },
    {
      id:'6',
      item_image:'https://img.freepik.com/free-photo/man-sportswear-running-park_1301-6420.jpg?semt=ais_hybrid',
      rating:{
        stars:4.9,
        noOfReviews:5000,
      },
      company_name:'Nike',
      item_name:'Men ReactX Running Shoes',
      current_price:14995,
      original_price:14995,
      discount:0,
  
      return_period: 14,
      delivery_date: '15 Jan 2024',
    },
    {
      id:'7',
      item_image:'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/15314128/2021/9/18/0534cb99-7d1b-42d6-bb76-434fa467cbb81631957130762-The-Indian-Garage-Co-Men-Shorts-6851631957129848-1.jpg',
      rating:{
        stars:4.2,
        noOfReviews:388,
      },
      company_name:'The Indian Garage Co',
      item_name:'Men Slim Fit Regular Shorts',
      current_price:639,
      original_price:1599,
      discount:60,
  
      return_period: 14,
      delivery_date: '15 Jan 2024',
    },
    {
      id:'8',
      item_image:'https://img.freepik.com/premium-photo/freshstart-deodorant-with-water-splash-mint-cool-background_1264082-237154.jpg',
      rating:{
        stars:4.2,
        noOfReviews:3880,
      },
      company_name:'Nivea',
      item_name:'Men Fresh Deodrant 150ml',
      current_price:142,
      original_price:285,
      discount:50,
  
      return_period: 14,
      delivery_date: '15 Jan 2024',
    },
    {
      id:'9',
      item_image:'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/21514208/2023/1/12/5c0d8e24-082b-4a13-8e53-822cc99fb8451673499089467CUKOOPaddedBlackHalterNeckSwimwear1.jpg',
      rating:{
          stars:3,
      noOfReviews:24,
      },
      company_name:'CUKOO',
      item_name:'Women Padded Swimming Dress',
      current_price:1507,
      original_price:2599,
      discount:42,
  
      return_period: 14,
      delivery_date: '15 Jan 2024',
    },
    {
      id:'10',
      item_image:'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/16314994/2021/12/1/e80e042d-2f55-47be-8dcb-52cd29aa86bb1638341486208BerrylushWomenRedWhitePrintedAboveKnee-LengthA-LineSkirt1.jpg',
      rating:{
        stars:4.1,
        noOfReviews:249,
      },
      company_name:'NUEVOSDAMAS',
      item_name:'Women Red & White Knee-Length Skirts',
      current_price:495,
      original_price:1599,
      discount:69,
  
      return_period: 14,
      delivery_date: '15 Jan 2024',
    },
    {
      id:'11',
      item_image:'https://www.themancompany.com/cdn/shop/products/2_7bfdae1e-010d-4f42-9c6b-e057d31f0a23.jpg?v=1722870907',
      rating:{
        stars:4.3,
        noOfReviews:4230,
      },
      company_name:'The Man Company',
      item_name:'Almond and Thyme Beard oil',
      current_price:250,
      original_price:500,
      discount:50,
  
      return_period: 14,
      delivery_date: '15 Jan 2024',
    },
    {
      id: '12',
      item_image:'https://indiandesigns.com/cdn/shop/files/il_fullxfull.2798244287_2r95.jpg?v=1721914964&width=1445',
      rating:{
        stars:4.5,
        noOfReviews:1400,
      },
      company_name:'Carlton London',
      item_name:'Rhodium-Plated CZ Floral Studs',
      current_price:606,
      original_price:1045,
      discount:42,
  
      return_period: 14,
      delivery_date: '15 Jan 2024',
    }
  ];

  @track cartItems = [];
  @track orderedItems = [];
  @track cartSize=false;
  @track orderSize=false;
  @track showCartItems = false;
  @track totalItems = 0;
  @track totalMRP = 0;
  @track totalDiscount = 0;
  @track finalPayment = 0;
  currentPage = 1;
  itemsPerPage = 4;

  // Computed properties for button states

  get isPlaceOrderDisabled() {
    return this.cartItems.length === 0;
  }


  handleAddToCart(event) {
    this.cartSize=true;
    const { product, quantity, color} = event.detail;
    const existingItem = this.cartItems.find((item) => item.id === product.id  && item.color === color);
    if (existingItem) {
      existingItem.quantity += quantity;
      
    }else {
      this.cartItems = [
        ...this.cartItems,
        { ...product, quantity, color }
      ];
    }
    this.updateCartSummary();
  }

  handleRemoveFromCart(event) {
    const itemId = event.detail; // Product ID to remove
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    this.updateCartSummary();
  }

  updateCartSummary() {
    this.totalItems = this.cartItems.reduce((total, item) => total + item.quantity, 0);
    this.totalMRP = this.cartItems.reduce((total, item) => total + item.original_price * item.quantity, 0);
    this.totalDiscount = this.cartItems.reduce((total, item) => total + (item.original_price - item.current_price) * item.quantity, 0);
    this.finalPayment = this.totalMRP - this.totalDiscount;
    if(this.finalPayment > 500){
      return this.finalPayment;
    }
    else{
      this.finalPayment += 99;
      return this.finalPayment;
    }
}

  placeOrder() {
    this.orderSize=true;
    this.cartSize=false;
    this.orderedItems = [...this.cartItems];
    this.cartItems = [];
  }

  get buttonLabel() {
    return this.showCartItems ? 'Hide Cart Items' : 'Show Cart Items';
  }

  get totalCartItems() {
    return this.cartItems.length;
  }

  toggleCartItems() {
    this.showCartItems = !this.showCartItems;
  }

}