
const btn = document.getElementById('btn');

function style_input(){
    
    const input_bill_style = document.getElementById('bill');
    const input_people_style = document.getElementById('people');
    const erro_zero_bill_style = document.getElementById('erro_zero_bill');
    const erro_zero_people_style = document.getElementById('erro_zero_people');
    const input_custom_style = document.getElementById('custom');

    let input_bill = document.getElementById('bill').value;
    let input_people = document.getElementById('people').value;
    let input_custom = document.getElementById('custom').value;

    if(input_bill >= 1){
        
        input_bill_style.style.border = '1px solid #26c0ab';
        erro_zero_bill_style.style.display = 'none';
        
    }else{
        
        input_bill_style.style.border = '1px solid red';
        erro_zero_bill_style.style.display = 'inline';
        
    }
    
    if(input_people >= 1){
        
        input_people_style.style.border = '1px solid #26c0ab';
        erro_zero_people_style.style.display = 'none';
        
    }else{
        
        input_people_style.style.border = '1px solid red';
        erro_zero_people_style.style.display = 'inline';

    }

    if(input_custom >= 1){
        
        input_custom_style.style.border = '1px solid #26c0ab';
        
    }else{
        
        input_custom_style.style.border = '1px solid red';

    }
    
}

btn.addEventListener('click', style_input);