const AddIncorio = document.getElementById("addIncorio")
const DelIncorio = document.getElementById("delIncorio")
const incorio = document.getElementById("incorio")

const addHarry = document.getElementById("addHarry")
const delHarry = document.getElementById("delHarry")
const harry = document.getElementById("harry")

const addClassique = document.getElementById("addClassique")
const delClassique = document.getElementById("delClassique")
const classique = document.getElementById("classique")

const priceIncorio = 25000;
const priceHarry = 23000;
const priceClassique = 21500;

var nbIncorio = 0, nbHarry = 0, nbClassique = 0, totalSoldInc = 0, totalSoldHar = 0, totalSoldClass = 0, totalPrice = 0;

var g = 0, h = 0, i = 0;

/*------------------------ déclaration fonction add et del --------------------------*/

function addi(x,y,z){
x+=y;
console.log(x);
console.log(z);
return x;
}

function addNb(h){
    h++;
    return h;
    }


    function dele(r,s,b){
        while(b>0)
        {
            r-=s;
            --b;
            console.log(r);
            console.log(b)
            return r;
        }
        return 0;
    } 


    function delNb(h){
        while(h>0){
            --h;
        return h;
    }
        return 0;
        }


function haert(g,e) {
    if(g==0){
        e.style.color = "red";
        g=1; 
        return g;
    }
else
e.style.color = 'black';
g=0
return g;
}

    function updateTotalprice(){
        totalPrice = totalSoldInc + totalSoldHar + totalSoldClass;
        return totalPrice;
    }
    function updateTotal(){
        mnaBox3.textContent = "total :" + " " + totalPrice
    }

    function updateMnaValueText(x,y,z) {
        x.textContent = "nombre : "+" "+ y + " " +"|" +" " + "total :"+" "  + z;
    }


    const mnaBox=document.getElementsByClassName('mnaBox')[0];
    mnaBox.textContent = "incorio =>" + " " + " " +"nombre : "+" "+ nbIncorio + " " +"|" +" " + "total :"+" "  + totalSoldInc;
    
    const mnaBox1=document.getElementsByClassName('mnaBox1')[0];
    mnaBox1.textContent = "Harry =>" + " " + " " +"nombre : "+" "+ nbHarry + " " +"|" +" " + "total :"+" "  + totalSoldHar;

    const mnaBox2=document.getElementsByClassName('mnaBox2')[0];
    mnaBox2.textContent = "classique =>" + " " + " " +"nombre : "+" "+ nbClassique + " " +"|" +" " + "total :"+" "  + totalSoldClass;

    const mnaBox3=document.getElementsByClassName('mnaBox3')[0];
    mnaBox3.textContent = "total :" + " " + totalPrice

  

/*----------------------- Ajout d'évenements -------------------------*/
AddIncorio.addEventListener('click', function () {
    nbIncorio=addNb(nbIncorio);
    totalSoldInc=addi(totalSoldInc, priceIncorio, nbIncorio);
    totalPrice = updateTotalprice()
    updateMnaValueText(mnaBox,nbIncorio,totalSoldInc)
    updateTotal();
});

DelIncorio.addEventListener('click', function() {
    totalSoldInc=dele(totalSoldInc, priceIncorio, nbIncorio)
    nbIncorio=delNb(nbIncorio);
    totalPrice = updateTotalprice()
    updateMnaValueText(mnaBox,nbIncorio,totalSoldInc)
    updateTotal();
});

/*------------------------------------------------*/
addHarry.addEventListener('click', function () {
    nbHarry=addNb(nbHarry);
    totalSoldHar=addi(totalSoldHar, priceHarry, nbHarry);
    totalPrice = updateTotalprice()
    updateMnaValueText(mnaBox1,nbHarry,totalSoldHar)
    updateTotal();
});

delHarry.addEventListener('click', function() {
    totalSoldHar=dele(totalSoldHar, priceHarry, nbHarry)
    nbHarry=delNb(nbHarry);
    totalPrice = updateTotalprice()
    updateMnaValueText(mnaBox1,nbHarry,totalSoldHar)
    updateTotal();
});

/*------------------------------------------------*/
addClassique.addEventListener('click', function () {
    nbClassique=addNb(nbClassique);
    totalSoldClass=addi(totalSoldClass, priceClassique, nbClassique);
    totalPrice = updateTotalprice()
    updateMnaValueText(mnaBox2,nbClassique,totalSoldClass)
    updateTotal();
});

delClassique.addEventListener('click', function() {
    totalSoldClass=dele(totalSoldClass, priceClassique, nbClassique);
    nbClassique=delNb(nbClassique);
    totalPrice = updateTotalprice()
    updateMnaValueText(mnaBox2,nbClassique,totalSoldClass)
    updateTotal();
});

/*------------------- changement de couleur du coeur -----------------------------*/

incorio.addEventListener('click', function (){
    g=haert(g,incorio);
})

harry.addEventListener('click', function (){
    h=haert(h,harry);
})

classique.addEventListener('click', function (){
    i=haert(i,classique);
})



