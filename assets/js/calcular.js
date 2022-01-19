
function calcular(){
    const value_amount = document.getElementById('value_amount');
    const value_total = document.getElementById('value_total');
    const radios = document.getElementsByName('value_btn_tip');

    let input_bill = document.getElementById('bill').value;
    let input_people = document.getElementById('people').value;
    let input_custom = document.getElementById('custom').value;

    
    if(input_custom >= 1) {
        
        let input_custom_convert_decimal = input_custom / 100;
        let resultado_valor_gorjeta_custom = (input_bill * input_custom_convert_decimal) / input_people; 
        let resultado_total_custom = input_bill / input_people + resultado_valor_gorjeta_custom;
        
        value_amount.innerHTML = '$' + Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(resultado_valor_gorjeta_custom);
        value_total.innerHTML = '$' + Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(resultado_total_custom);
        
    }else if(input_custom === null || input_custom < 1) {
        
        for(i = 0; i < radios.length; i++) {
    
            if(radios[i].checked) {
                // radios[i].classList.toggle('active');

                let valor_radio_checked = radios[i].value;
                
                let resultado_valor_gorjeta = (input_bill * valor_radio_checked) / input_people;
                let resultado_total = input_bill / input_people + resultado_valor_gorjeta;
            
                value_amount.innerHTML = '$' + Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(resultado_valor_gorjeta);
                value_total.innerHTML = '$' + Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(resultado_total);

            }
            
        }

    }
    
}

btn.addEventListener('click', calcular);