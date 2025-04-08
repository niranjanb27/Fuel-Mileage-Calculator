let butt=document.getElementById('mil');//This line selects the "Calculate Mileage" button by its ID (mil) and stores it in the variable butt.
butt.addEventListener('click',()=>{ //When the button is clicked, the code inside the arrow function ()=>{} will run.
    //reads the user inputs, parseInt() to convert the input values (which are strings by default) into numbers.
    const dis=parseInt(document.getElementById('dis').value);
    const fuel=parseInt(document.getElementById('fuel').value);
    const rate=parseInt(document.getElementById('rate').value);
    const result=document.getElementById('output'); //where actual mileage will get stored
    let dis_status=false,fuel_status=false;

    if(dis ==='' || isNaN(dis) || (dis <=0)){
        document.getElementById('dis_error').innerHTML = 'please provide a valid distance';
    }else{
        document.getElementById('dis_error').innerHTML='';
        dis_status=true;
        }

        if(fuel ==='' || isNaN(fuel) || (fuel <=0)){
        document.getElementById('fuel_error').innerHTML = 'please provide a valid amount of fuel';
    }else{
        document.getElementById('fuel_error').innerHTML='';
        fuel_status=true;
        }

        //calculates mileage using the formula:

    if(dis_status && fuel_status){
        const mil=((dis*rate)/fuel).toFixed(2);
        result.innerHTML='Your vehicle mileage is : '+mil  ;
    }
    
    
});
    //Fuel Calculator
 
let but=document.getElementById('amt');
but.addEventListener('click',()=>{
    const dist=parseInt(document.getElementById('dist').value);
    const mileage=parseInt(document.getElementById('mileage').value);
    const res=document.getElementById('out');
    let dist_status=false,mileage_status=false;

    if(dist ==='' || isNaN(dist) || (dist <=0)){
        document.getElementById('dist_error').innerHTML = 'please provide a valid distance';
    }else{
        document.getElementById('dist_error').innerHTML='';
        dist_status=true;
        }

        if(mileage ==='' || isNaN(mileage) || (mileage <=0)){
        document.getElementById('mileage_error').innerHTML = 'please provide a valid mileage';
    }else{
        document.getElementById('mileage_error').innerHTML='';
        mileage_status=true;
        }

    if(dist_status && mileage_status){
        const amt=((dist*105)/mileage).toFixed(2);
        res.innerHTML='Fuel required is Rs. '+amt  ;
    }
    
    
});