//////////////smooth-scrolling/////////////
// const scroll = new LocomotiveScroll({
//   el: document.querySelector("body"),
//   smooth: true,
// });
//////////////smooth-scrolling/////////////

let setTextColor = document.querySelector("#text-color-change");
let setTextColor2 = document.querySelector("#text-color-change2");
let backgroundSvg = document.getElementsByClassName("background-svg")[0];
let productContainer = document.querySelector(".product-grid");
let productContainer2 = document.getElementsByClassName("product-grid")[1];
let shoeObject = document.getElementsByClassName("shoe-card");

let count = 0;
let shoeName = "";
let shoePrice = null;
let counter = document.getElementById("counter");
let shoeImgSrc = "";
console.log(backgroundSvg);
console.log(setTextColor);
let check = true;
setInterval(() => {
  if (check) {
    setTextColor.style.color = "#94CB00";
    setTextColor2.style.color = "#8EB8E0";
    backgroundSvg.style.backgroundColor = "#8EB8E0";

    check = false;
  } else {
    setTextColor.style.color = "#8EB8E0";
    setTextColor2.style.color = "#94CB00";
    backgroundSvg.style.backgroundColor = "rgb(178, 228, 103)";

    check = true;
  }
}, 800);
////////// SHOE ARRAY////////
let shoeArray = [
  {
    name: "nike air 200",
    price: 3000,
    imageSrc: "3.png",
    isAdded: false,
  },
  {
    name: "nike air 200",
    price: 2200,
    imageSrc: "4.png",
    isAdded: false,
  },
  {
    name: "nike air 200",
    price: 2200,
    imageSrc: "3.png",
    isAdded: false,
  },
  {
    name: "nike air 200",
    price: 2200,
    imageSrc: "4.png",
    isAdded: false,
  },
  {
    name: "nike air 200",
    price: 2200,
    imageSrc: "5.png",
    isAdded: false,
  },
  {
    name: "nike air 200",
    price: 2200,
    imageSrc: "6.png",
    isAdded: false,
  },
  {
    name: "nike air 200",
    price: 2200,
    imageSrc: "5.png",
    isAdded: false,
  },
  {
    name: "jordan shoe",
    price: 100000,
    imageSrc: "2.png",
    isAdded: false,
  },
  {
    name: "campus",
    price: 4000,
    imageSrc: "4.png",
    isAdded: false,
  },
];
let shoeArray2 = [
  {
    name: "jordan sre",
    price: 3000,
    imageSrc: "public/shoearray21.png",
  },
  {
    name: "retro red",
    price: 4000,
    imageSrc: "public/shoearray21.png",
  },
  {
    name: "miranda",
    price: 3000,
    imageSrc: "public/shoearray21.png",
  },
  {
    name: "navidro ried",
    price: 3800,
    imageSrc: "public/shoearray21.png",
  },
  {
    name: "navidro ried",
    price: 3800,
    imageSrc: "public/shoearray21.png",
  },
  {
    name: "navidro ried",
    price: 3800,
    imageSrc: "public/shoearray21.png",
  },
  {
    name: "navidro ried",
    price: 3800,
    imageSrc: "public/shoearray21.png",
  },
];
/////////// SHOE ARRAY///////   /
///////////// slider shoe array//////////
const sliderShoeArray = [
  {
    src: "slider1.png",
    color: "#F3BD00",
  },
  {
    src: "slider2.png",
    color: "#FF4547",
  },
];
///////////// slider shoe array//////////
////////// REUSABLE COMPONENT//////////
let i = 0;
shoeArray.forEach((item) => {
  let shoeCard = document.createElement("div");

  shoeCard.setAttribute("class", "shoe-card");
  shoeName = item.name;
  shoeImgSrc = item.imageSrc;
  shoePrice = "$" + item.price;
  shoeCard.innerHTML = ` <div class="shoe-img">
<img src="${shoeImgSrc}"></img>
</div>
<div class="shoe-desp">
    <p class="shoe-name">${shoeName}</p>
     <p class="shoe-price">${shoePrice}</p>
</div> 
<div class="addToCartBtn" >
    <button >Add</button>
</div>`;

  shoeCard.setAttribute("isAdded", false);

  productContainer.append(shoeCard);
});
shoeArray2.forEach((item) => {
  let shoeCard2 = document.createElement("div");
  shoeCard2.setAttribute("class", "shoe-card");
  shoeName = item.name;
  shoeImgSrc = item.imageSrc;
  shoePrice = "$" + item.price;
  shoeCard2.innerHTML = ` <div class="shoe-img">
<img src="${shoeImgSrc}"></img>
</div>
<div class="shoe-desp">
    <p class="shoe-name">${shoeName}</p>
     <p class="shoe-price">${shoePrice}</p>
</div> 
<div class="addToCartBtn" >
    <button >Add</button>
</div>`;
  productContainer2.append(shoeCard2);
});
////////// REUSABLE COMPONENTE //////////

for (let a of shoeObject) {
  a.children[2].children[0].addEventListener("click", (e) => {
    console.log(a);
    if (e.target.innerHTML == "Add") {
      e.target.innerHTML = "Remove";
      console.log(e.target.innerHTML);
      count++;
      counter.innerHTML = `${count}`;
      console.log(a.children[2].children[0]);
      // e.target.innerHTML = "remove";
    } else {
      e.target.innerHTML = "Add";
      count--;
      counter.innerHTML = `${count}`;
      // e.target.innerHTML = "Add";
    }
  });
}
////////////////////////////////
///////////////shoe slider logic/////////////
let j = 0;
let sliderImg = document.getElementById("sliderImg");
setInterval(() => {
  sliderImg.src = `public/s${++j}.png`;
  if (j == 3) {
    document.getElementsByClassName("deyt")[0].style.color = "#016427";
  }
  if (j == 1) {
    document.getElementsByClassName("deyt")[0].style.color = "#306098";
  }
  if (j == 2) {
    document.getElementsByClassName("deyt")[0].style.color =
      "rgb(205, 176, 11)";
  }

  if (j >= 3) j = 0;
}, 2000);
///////////////shoe slider logic/////////////

//////////////////// testimonial slider/////////////
let byerArray = [
  { name: "viideo founs", src: "t1.png" },
  { name: " firere eeo", src: "t2.png" },
  { name: "huoeio owoe", src: "t3.png" },
  { name: "daiver morvous", src: "t3.png" },
  { name: "Renfef doie", src: "t4.png" },
];
let forward = document.querySelector(".forward");
let backward = document.querySelector(".backword");
let imageToChange = document.querySelector("#testmonialimg");
let nameToChange = document.querySelector("#testiname");
console.log(imageToChange);
console.log(nameToChange);
console.log(backward);
let k = 1;
forward.addEventListener("click", () => {
  if (k <= 5) {
    k++;
    console.log(k);

    imageToChange.src = `public/t${k}.png`;
    nameToChange.innerHTML = `${byerArray[k].name}`;
  } else if (k <= 6) {
    k = 1;
    k++;
    console.log(k);

    imageToChange.src = `public/t${k}.png`;
    nameToChange.innerHTML = `${byerArray[k].name}`;
  }
});
backward.addEventListener("click", () => {
  if (k >= 2) {
    k--;
    console.log(k);
    imageToChange.src = `public/t${k}.png`;
    nameToChange.innerHTML = `${byerArray[k].name}`;
  } else if ((k = 1)) {
    k = 5;
    console.log(k);
    imageToChange.src = `public/t${k}.png`;
    nameToChange.innerHTML = `${byerArray[k].name}`;
  }
});
//////////////////// testimonial slider/////////////
/////////////////////product-showcase animation////////
// var tl =gsap.timeline({scrollTrigger:{
//   trigger:".product-showcase-cont",
//   start:"0% 95%",
//   end:"60% 50%",
//   scrub:true,
//   markers:true
// }})
// tl.to("#heroimg",{
//   x:"-120%",
//   y:"170%",
//   // duration:5,
// },"orange")

var w = document.documentElement.clientWidth || window.innerWidth;
if (w > 900) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".product-showcase-cont",
      start: "-10% 95%",
      end: "50% 50%", // Corrected end value
      scrub: true, // Boolean value without quotes
      // markers: true,  // Boolean value without quotes
    },
  });

  tl.to(
    "#heroimg",
    {
      x: "-53%",
      y: "110%",
      rotate: "46deg",
      // duration: "2000",
    },
    "orange"
  );

  tl.to(
    ".p1",
    {
      y: "3%",
      opacity: "1",
    },
    "orange"
  );
  tl.to(
    ".p2",
    {
      y: "20%",
      opacity: "1",
    },
    "orange"
  );
  tl.to(
    ".p3",
    {
      y: "-10%",
      opacity: "1",
    },
    "orange"
  );
  tl.to(
    ".p4",
    {
      y: "-10%",
      opacity: "1",
    },
    "orange"
  );
} else if (700 <= w < 900) {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "70% 95%",
      end: "70% 50%",
      scrub: true,
    },
  });
  tl2.to(".heroimage", {
    rotate: "44deg",
  });
}

console.log(w);
let imgageArray = document.getElementsByClassName("ps2img");
if (w > 900) {
  imgageArray.style = "display:none;";
}
console.log(imgageArray);
if (w < 900) {
  for (let m = 1; m <= 4; m++) {
    let newimgae = document.createElement("img");
    newimgae.src = `public/p${m}.png`;
    if (m == 1) {
      document.querySelector(".p1").
      append(newimgae);
      newimgae.setAttribute('class',"tiuo")
      console.log(newimgae);
    } else if (m == 2) {
      document.querySelector(".p2").append(newimgae);
      newimgae.setAttribute('class',"tiuo")
      console.log(newimgae);
    } else if (m == 3) {
      document.querySelector(".p3").append(newimgae);
      console.log(newimgae);
      newimgae.setAttribute('class',"tiuo")
    } else {
      document.querySelector(".p4").append(newimgae);
      console.log(newimgae);
      newimgae.setAttribute('class',"tiuo")
    }
  }
}

//////////////////////////////////////////////////////

//////SEARCH BAR ANIMATION///////
const searchInput = document.getElementsByClassName("search-field")[0];
console.log(searchInput);
let bigOrNot = false;
if (w > 900) {
  searchInput.addEventListener("click", (e) => {
    e.preventDefault;
    if (!bigOrNot) {
      searchInput.style = "width:100%;";
      bigOrNot = true;
    } else {
      searchInput.style = "width:4rem";
      bigOrNot = false;
    }
  });
}
/////////////////////////////////
///////////product show case/////
if (w < 900) {
  document.getElementById("ps2").classList.remove("product-showcase-cont");
}
console.log(document.getElementById("ps2"));
