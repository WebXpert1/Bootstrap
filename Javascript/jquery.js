// $("#btn").hide(2000)
// $("#btn").show(2000)
// $("#btn").toggle(2000)

// $("#btn").click( ()=>{
//     // alert("hello world")
//     $(".box").show(2000)
// })


// fadeIn fadeOut fadeToggle fadeTo
// $("#btn").click( ()=>{
//     $("#box").fadeTo(2000,0.4)
// })

// slideUp slideDown slideToggle
// $("#btn").click( ()=>{
//     $("#box").slideToggle()
// })

// Animate
// $("#btn").click( ()=>{
//     $("#box").animate({
//         height: "400px",
//         width:  "400px"
//     }).hide(2000) .slidedown() .animate({
//         height: "200px",
//         width: "200px"
//     })
// })

// $("#btn").click( ()=>{
//     $(".box").animate({
//         backgroundColor: "pink",
//         boxRadius:  "50px"
//     }).hide(2000)  .animate({
//         backgroundColor: "yellow",
//         boxRadius: "20px"
//     })
// })

// Attr() , removeAttr() , css() , text() , html() , val() , addClass() , removeClass() , toggleClass()
// $("#btn").click( ()=>{
//         alert($("#btn").css({
//         fontSize:"20px",
//         backgroundColor:"yellow",
//         borderRadius:"50px"
//         }))
//     })

//     $("#btn").click( ()=>{
//         alert($("#btn").text("Text changed"))
//     })

//     $("#btn").click( ()=>{
//         alert($("#btn").html("<h1>Text changed</h1>"))
//     })

    // $("#btn").click( ()=>{
    //     alert($("input").val())
    // })

// Promise (then,catch)
// console.log("before promise")
// console.log("before promise")
// let p =new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('promise resolved after 3 seconds');
//     },3000)
    
// }) 
// console.log(p)
//     console.log("after promise")
//     console.log("after promise")

// then , catch
// console.log("before promise")
// console.log("before promise")
// let p =new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('promise resolved after 3 seconds');
//     })
// }) 
// then works when promise is fulfilled
// p.then((value)=>{       
// console.log(value);
// })
// catch works when promise is rejected
// p.catch((err)=>{
// console.log(err+"promise is rejected")
// })

// Promo (try,catch)
// let promo= async()=>{
//     return("hello world")
// }
// promo().then((value)=> {
//     console.log(value);
// })

//  function getData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("hello world");
//         },3000)
//     })
//  }
//  async function showData() {
//     console.log("fetching data...");
//     let data = await getData();
//     console.log("data printed");
//  }


// jquery Transversing

// Ancestors
// parent()
// parents()
// parentsUntil()
// $(document).ready(function(){
//     $("span").parentsUntil(".ancestors").css({"color":"red","border":"5px solid red"});
// });

// Descendants
// children()
// find()
// $(document).ready(function(){
//     $("span").children(".ancestors").css({"color":"red","border":"5px solid red"});
//     });

// siblings
// next
// prev(), prevAll() , prevUntil()



//parent methods - parent,parents,parentsuntil

// $("span").parents(".ancestors").css({
//     height:"200px",
//     width:"200px",
//     background:"pink",
//     border:"1px solid black",
//     color:"white"
// })

//parent select only nearest single parent and parents select all parents of elements

//children methods - children,find

// $("h1").children().css({    
//     height:"200px",
//     width:"200px",
//     background:"pink",
//     border:"1px solid black",
//     color:"white"
// })         
    
// filtering methods 
// first() , last() , eq() , filter() , not()