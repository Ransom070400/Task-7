document.addEventListener('DOMContentLoaded',function(){

                    // By default, submit button is disabled 

                    document.querySelector('#submit').disabled = true;

                    document.querySelector('#task').onkeyup = function(){
                        if (document.querySelector('#task').value.length > 0){
                            document.querySelector('#submit').disabled = false;
                        } else {
                            document.querySelector('#submit').disabled = true;
                        }
                        
                    }
                  

                  

                    

                    document.querySelector('form').onsubmit = function(){
                       const task =  document.querySelector('#task').value;
                    const li =document.createElement('li')
                    li.innerHTML = task;
                    document.querySelector('#tasks').append(li);
                    document.querySelector('#task').value='';

                    
                    
                    
                        
                        // stop form from submitting

                        return false;

                    }

                });
