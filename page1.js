const data = [
    {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: { rate: 3.9, count: 120 }
    },
    {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        rating: { rate: 4.1, count: 259 }
    },
    {
        id: 3,
        title: 'Mens Cotton Jacket',
        price: 55.99,
        description: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        rating: { rate: 4.7, count: 500 }
    },
    {
        id: 4,
        title: 'Mens Casual Slim Fit',
        price: 15.99,
        description: 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        rating: { rate: 2.1, count: 430 }
    },
    {
        id: 5,
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 4.6, count: 400 }
    },
    {
        id: 6,
        title: 'Solid Gold Petite Micropave ',
        price: 168,
        description: 'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 3.9, count: 70 }
    },
    {
        id: 7,
        title: 'White Gold Plated Princess',
        price: 9.99,
        description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 3, count: 400 }
    },
    {
        id: 8,
        title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
        price: 10.99,
        description: 'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
        category: 'jewelery',
        image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 1.9, count: 100 }
    },
    {
        id: 9,
        title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
        price: 64,
        description: 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
        rating: { rate: 3.3, count: 203 }
    },
    {
        id: 10,
        title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
        price: 109,
        description: 'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/ write speeds of up to 535MB / s / 450MB / s(Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.) ',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
        rating: { rate: 2.9, count: 470 }
    },
    {
        id: 11,
        title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
        price: 109,
        description: '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC(Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
        rating: { rate: 4.8, count: 319 }
    },
    {
        id: 12,
        title: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
        price: 114,
        description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
        rating: { rate: 4.8, count: 400 }
    },
    {
        id: 13,
        title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
        price: 599,
        description: '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
        rating: { rate: 2.9, count: 250 }
    },
    {
        id: 14,
        title: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',
        price: 999.99,
        description: '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag', category: 'electronics',
        image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
        rating: { rate: 2.2, count: 140 }
    },
    {
        id: 15,
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        description: 'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
        rating: { rate: 2.6, count: 235 }
    },
    {
        id: 16,
        title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        description: '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
        rating: { rate: 2.9, count: 340 }
    },
    {
        id: 17,
        title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
        price: 39.99,
        description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.", category: "women's clothing",
        image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
        rating: { rate: 3.8, count: 679 }
    },
    {
        id: 18,
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        description: '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        rating: { rate: 4.7, count: 130 }
    },
    {
        id: 19,
        title: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        description: '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
        rating: { rate: 4.5, count: 146 }
    },
    {
        id: 20,
        title: 'DANVOUY Womens T Shirt Casual Cotton Short',
        price: 12.99,
        description: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual / Office / Beach / School / Home / Street.Season: Spring, Summer, Autumn, Winter.', category: "women's clothing",
        image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
        rating: { rate: 3.6, count: 145 }
    }
]



arrPic = document.getElementsByTagName("img")
for (let i = 0; i < arrPic.length; i++) {
    arrPic[i].src = data[i].image
}
arrh4 = document.getElementsByTagName("h4")
for (let i = 0; i < arrh4.length; i++) {
    arrh4[i].innerText = data[i].title
}
addCount = document.getElementsByClassName("addCount")
// console.log(addCount)
for (let i = 0; i < addCount.length; i++) {
    a = document.createElement("div")
    a.innerHTML = '<div class="add1">+1</div> <div class="addCo"> n </div> <div class=minus1>-1</div>'
    div3 = document.getElementsByClassName("addCount")[i]
    div3.appendChild(a);
}
addCoun = document.getElementsByClassName("addCo")
for (let i = 0; i < addCoun.length; i++) {
    addCoun[i].innerText = data[i].rating.count
}

but = document.getElementsByClassName("p1")

add = document.getElementById("add")
add.addEventListener("click", function () {
    addProduct()
})

for (let i = 0; i < but.length; i++) {
    but[i].addEventListener("click", function () {
        productPage(i)
    })
}

function productPage(i) {
    ma = document.getElementsByTagName("main");
    // a1 = ma[0]
    ma[0].style.display = "none"
    na = document.getElementsByTagName("nav");
    // na1 = na[0]
    na[0].style.display = "none";
    nav = document.createElement("nav");
    nav.id = "nav"
    nav.innerHTML = `
            <div id="iis">
                <i class="material-icons">arrow_back</i>
                <i class="material-icons" id="editProduct">create</i>
                <i class="material-icons">home</i>
            </div>
            <div id="h2">
                <h2>Product Page</h2>
            </div>
        `;
    document.body.appendChild(nav)
    // add main
    cont = document.createElement("div");
    cont.id = "container"

    main = document.createElement("main");
    main.id = "main2"
    // add img
    pic = document.createElement("img")
    pic.id = "img2"
    pic.src = data[i].image
    main.appendChild(pic)
    // add text
    text = document.createElement("div")
    text.id = "textID"
    h1 = document.createElement("h3")
    h1.innerText = "Title"
    p1 = document.createElement("p")
    p1.class = "p1"
    title = data[i].title
    p1.innerText = title

    h2 = document.createElement("h3")
    h2.innerText = "Description"
    p2 = document.createElement("p")
    p2.class = "p1"
    title = data[i].description
    p2.innerText = title

    h3 = document.createElement("h3")
    h3.innerText = "Category"
    p3 = document.createElement("p")
    p3.class = "p1"
    title = data[i].category
    p3.innerText = title


    h4 = document.createElement("h3")
    h4.innerText = "Price"
    p4 = document.createElement("p")
    p4.class = "p1"
    title = data[i].price
    p4.innerText = title


    h5 = document.createElement("h3")
    h5.innerText = "Quantity"
    p5 = document.createElement("p")
    p5.class = "p1"
    title = data[i].rating.count
    p5.innerText = title

    main.appendChild(text)

    text.appendChild(h1)
    text.appendChild(p1)

    text.appendChild(h2)
    text.appendChild(p2)

    text.appendChild(h3)
    text.appendChild(p3)

    text.appendChild(h4)
    text.appendChild(p4)

    text.appendChild(h5)
    text.appendChild(p5)

    document.body.appendChild(cont)
    cont.appendChild(main)
    document.body.style.background = "#F9F5EB"

    newTab = document.getElementById("editProduct")
    console.log(newTab)
    newTab.addEventListener("click", function () {
        editProduct(i)
    })
}

function editProduct(i) {
    a = document.getElementById("container")
    a.style.display = "none";
    b = document.createElement("div")
    b.innerHTML = `<form>
    <div class="label-input">
        <label for="ftitle">Title:</label>
        <input  type="text" class="class1" id="ftitle" name="ftitle">
    </div>
    <div class="label-input">
        <label for="lcategory">Category:</label>
        <input type="text" class="class1" id="lcategory" name="lcategory">
    </div>
    <div class="label-input">
        <label for="lprice">price:</label>
        <input type="text" class="class1" id="lprice" name="lprice">
    </div>
    <div class="label-input">
        <label for="limageURL">imageURL:</label>
        <input type="text" class="class1" id="limageURL" name="limageURL">
    </div>
    <div class="label-input">
        <label for="lQuantity">Quantity:</label>
        <input type="text" class="class1" id="lQuantity" name="lQuantity">
    </div>
    <div class="label-input">
        <label for="ldescription">Description:</label>
        <input type="text" class="class1" id="lDescription" name="lDescription">
    </div>
    <div class="button-container">
        <button type="text" id="submit">שלח</button>
    </div>
</form>`
    document.body.appendChild(b)

    o = document.getElementsByClassName("class1")
    console.log(o)
    for (let j = 0; j < o.length; j++) {
        switch (j) {
            case 0:
                o[j].value = data[i].title
                break;
            case 1:
                o[j].value = data[i].category
                break;
            case 2:
                o[j].value = data[i].price
                break;
            case 3:
                o[j].value = data[i].image
                break;
            case 4:
                o[j].value = data[i].rating.count
                break;
            case 5:
                o[j].value = data[i].description
                break;
            default:
                break;
        }
    }
    // document.body.appendChild(b)
    bu = document.getElementById("submit")
    bu.addEventListener("click", function () {
        realEdit(i)
    })
}
// לא עובד
function realEdit(i) {
    o = document.getElementsByClassName("class1");
    const newTitle = o[0].value;
    const newCategory = o[1].value;
    const newPrice = parseFloat(o[2].value); // המרה לטיפוס מספרי
    const newImageURL = o[3].value;
    const newQuantity = parseInt(o[4].value); // המרה לטיפוס מספרי
    const newDescription = o[5].value;

    data[i].title = newTitle;
    data[i].category = newCategory;
    data[i].price = newPrice;
    data[i].image = newImageURL;
    data[i].rating.count = newQuantity;
    data[i].description = newDescription;

    const titleElement = document.getElementsByTagName("h4")[i];
    titleElement.innerText = newTitle;

    const countElement = document.getElementsByClassName("addCo")[i];
    countElement.innerText = newQuantity;

    console.log("Updated Data:");
    console.log(data);
}
function addProduct() {
    ma = document.getElementsByTagName("main");
    // a1 = ma[0]
    ma[0].style.display = "none"
    na = document.getElementsByTagName("nav");
    // na1 = na[0]
    na[0].style.display = "none";
    b = document.createElement("div")
    b.innerHTML = `<form>
    <div class="label-input">
        <label for="ftitle">Title:</label>
        <input type="text" id="ftitle" name="ftitle" placeholder="add Title">
    </div>
    <div class="label-input">
        <label for="lcategory">Category:</label>
        <input type="text" id="lcategory" name="lcategory" placeholder="add Category">
    </div>
    <div class="label-input">
        <label for="lprice">price:</label>
        <input type="text" id="lprice" name="lprice" placeholder="add Price">
    </div>
    <div class="label-input">
        <label for="limageURL">imageURL:</label>
        <input type="text" id="limageURL" name="limageURL" placeholder="add Image">
    </div>
    <div class="label-input">
        <label for="lQuantity">Quantity:</label>
        <input type="text" id="lQuantity" name="lQuantity" placeholder="add Quantity">
    </div>
    <div class="label-input">
        <label for="ldescription">Description:</label>
        <input type="text" id="lDescription" name="lDescription" placeholder="add Description">
    </div>
    <div class="button-container">
        <button type="submit" id="submit">שלח</button>
    </div>
</form>`
document.body.appendChild(b)
}