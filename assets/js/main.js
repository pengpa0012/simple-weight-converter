const firstInput = document.querySelector('.one input');
const secondInput = document.querySelector('.two input');

const firstOption = document.querySelector('.one select');
const secondOption = document.querySelector('.two select');

firstInput.addEventListener('input', firstConvert);
secondInput.addEventListener('input', firstConvert);

        function firstConvert(){
            
            if(firstOption.value === 'kilogram'){
                if(secondOption.value === 'kilogram'){
                    secondInput.value = firstInput.value;
                }else if(secondOption.value === 'gram'){                 
                    secondInput.value = (firstInput.value * 1000);
                }else if(secondOption.value === 'ounces'){                 
                    secondInput.value = (firstInput.value * 35.274);
                }else if(secondOption.value === 'milligram'){
                    secondInput.value = (firstInput.value * 1e+6);
                }
            }

            if(firstOption.value === 'gram'){
                if(secondOption.value === 'kilogram'){
                    secondInput.value = (firstInput.value / 1000);
                }else if(secondOption.value === 'gram'){                 
                    secondInput.value = firstInput.value;
                }else if(secondOption.value === 'ounces'){                 
                    secondInput.value = (firstInput.value / 28.35);
                }else if(secondOption.value === 'milligram'){
                    secondInput.value = (firstInput.value * 1000);
                }
            }

            if(firstOption.value === 'ounces'){
                if(secondOption.value === 'kilogram'){
                    secondInput.value = (firstInput.value / 35.274);
                }else if(secondOption.value === 'gram'){                 
                    secondInput.value = (firstInput.value * 28.35);
                }else if(secondOption.value === 'ounces'){                 
                    secondInput.value = firstInput.value;
                }else if(secondOption.value === 'milligram'){
                    secondInput.value = (firstInput.value * 28350);
                }
            }

            if(firstOption.value === 'milligram'){
                if(secondOption.value === 'kilogram'){
                    secondInput.value = (firstInput.value / 1e+6);
                }else if(secondOption.value === 'gram'){                 
                    secondInput.value = (firstInput.value / 1000);
                }else if(secondOption.value === 'ounces'){                 
                    secondInput.value = (firstInput.value / 29.574);
                }else if(secondOption.value === 'milligram'){
                    secondInput.value = firstInput.value;
                }
            }
        }