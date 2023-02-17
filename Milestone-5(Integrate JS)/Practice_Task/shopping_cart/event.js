

document.getElementById('phn_minus_btn').addEventListener('click' , function(){

    const phn_count = parseInt(document.getElementById('phn_count').value);
     const new_phn_count = phn_count - 1;
     document.getElementById('phn_count').value = new_phn_count;

     
     const new_phn_price = new_phn_count * 1219;
     document.getElementById('phn_price').innerText = new_phn_price;

     const case_price = parseFloat(document.getElementById('case_price').innerText);
     const new_subtotal = new_phn_price + case_price; 
     document.getElementById('subtotal').innerText = new_subtotal;

     
     const new_tax = (new_subtotal * 0.1).toFixed(2);
     document.getElementById('tax').innerText = new_tax;

     const total = parseInt(document.getElementById('total').innerText);
     const tax = parseFloat(document.getElementById('tax').innerText);
     const subtotal1= parseFloat(document.getElementById('subtotal').innerText);

     const new_total = subtotal1 + tax; 

    //  const new_total = total + prev_total;
     document.getElementById('total').innerText = new_total.toFixed(2);

})

document.getElementById('phn_plus_btn').addEventListener('click' , function(){

    const phn_count = parseInt(document.getElementById('phn_count').value);
     const new_phn_count = phn_count + 1;
     document.getElementById('phn_count').value = new_phn_count;
        
     const new_phn_price = new_phn_count * 1219;
     document.getElementById('phn_price').innerText = new_phn_price;

     const case_price = parseFloat(document.getElementById('case_price').innerText);
     const new_subtotal = new_phn_price + case_price; 
     document.getElementById('subtotal').innerText = new_subtotal;

     
     const new_tax = (new_subtotal * 0.1).toFixed(2);
     document.getElementById('tax').innerText = new_tax;

     const total = parseInt(document.getElementById('total').innerText);
     const tax = parseFloat(document.getElementById('tax').innerText);
     const subtotal1= parseFloat(document.getElementById('subtotal').innerText);

     const new_total = subtotal1 + tax; 

    //  const new_total = total + prev_total;
     document.getElementById('total').innerText = new_total.toFixed(2);
     
})

document.getElementById('case_minus_btn').addEventListener('click' , function(){

    const case_count = parseInt(document.getElementById('case_count').value);
     const new_case_count = case_count - 1;
     document.getElementById('case_count').value = new_case_count;

        
     const new_case_price = new_case_count * 59;
     document.getElementById('case_price').innerText = new_case_price;

     const phn_price = parseFloat(document.getElementById('phn_price').innerText);
     const new_subtotal = new_case_price + phn_price; 
     document.getElementById('subtotal').innerText = new_subtotal;

     
     const new_tax = (new_subtotal * 0.1).toFixed(2);
     document.getElementById('tax').innerText = new_tax;

     const total = parseInt(document.getElementById('total').innerText);
     const tax = parseFloat(document.getElementById('tax').innerText);
     const subtotal1= parseFloat(document.getElementById('subtotal').innerText);

     const new_total = subtotal1 + tax; 

    //  const new_total = total + prev_total;
     document.getElementById('total').innerText = new_total.toFixed(2);

})

document.getElementById('case_plus_btn').addEventListener('click' , function(){

    const case_count = parseInt(document.getElementById('case_count').value);
     const new_case_count = case_count + 1;
     document.getElementById('case_count').value = new_case_count;

          
     const new_case_price = new_case_count * 59;
     document.getElementById('case_price').innerText = new_case_price;

     const phn_price = parseFloat(document.getElementById('phn_price').innerText);
     const new_subtotal = new_case_price + phn_price; 
     document.getElementById('subtotal').innerText = new_subtotal;

     
     const new_tax = (new_subtotal * 0.1).toFixed(2);
     document.getElementById('tax').innerText = new_tax;

     const total = parseInt(document.getElementById('total').innerText);
     const tax = parseFloat(document.getElementById('tax').innerText);
     const subtotal1= parseFloat(document.getElementById('subtotal').innerText);

     const new_total = subtotal1 + tax; 

    //  const new_total = total + prev_total;
     document.getElementById('total').innerText = new_total.toFixed(2);
     
})