
const pageviews = ["10K PAGEVIEWS", "50K PAGEVIEWS", 
                    "100K PAGEVIEWS", "500K PAGEVIEWS", "1M PAGEVIEWS"];

const price = ["$08.00", "$12.00", "$16.00", "$24.00", "$36.00"];
let i = 0;
const views = document.getElementById("view");
const prices = document.getElementById("demo");
const slider = document.getElementById("sliderRange");

button = document.getElementById("buttonID");

button.addEventListener("click", function(){
    i++; 
    console.log(i);
    // if( i%2 !== 0){
    //     document.getElementById("discountText").style.backgroundColor = "hsl(13, 52%, 75%)";
    //     prices.innerHTML = "$" + (parseFloat((prices.innerHTML.toString()).substring(1,3)) * 0.75) + ".00";
        
    // }else{
    //     document.getElementById("discountText").style.backgroundColor = "hsl(14, 92%, 95%)";
        
    // }
});


views.innerHTML = pageviews[2];
prices.innerHTML = price[2];

slider.oninput = function(){

    switch(parseFloat(this.value)){
        case 10.0:
            views.innerHTML = pageviews[0];
            prices.innerHTML = (i%2 !== 0 ? parseFloat(price[0])*0.75 :parseFloat(price[0]));
            break;

        case 32.5:
            views.innerHTML = pageviews[1];
            prices.innerHTML = price[1];
            break;

        case 55.0:
            views.innerHTML = pageviews[2];
            prices.innerHTML = price[2];
            break;

        case 77.5:
            views.innerHTML = pageviews[3];
            prices.innerHTML = price[3];
            break;

        case 100.0:
            views.innerHTML = pageviews[4];
            prices.innerHTML = price[4];
            break;

        default:

    }
}



