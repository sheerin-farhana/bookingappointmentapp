let itemList = document.getElementById('items');
        function onsignup(event){
            event.preventDefault();
            let li = document.createElement('li');
            //li.className = "list-group-item";

            let deleteButton = document.createElement('input');
            deleteButton.type = "button"
            deleteButton.id = "delete";
            deleteButton.value = "DELETE";
            //console.log(deleteButton);
            
            let details_obj = {name:event.target.name.value,
                        email:event.target.email.value,
                        phone:event.target.phone.value.toString(),
                        }
            
            let userdetails_obj = JSON.stringify(details_obj);
            localStorage.setItem(event.target.name.value ,userdetails_obj );
            li.appendChild(document.createTextNode(event.target.name.value + " - "));
            li.appendChild(document.createTextNode(event.target.email.value + " - "));
            li.appendChild(document.createTextNode(event.target.phone.value.toString() ));
            li.appendChild(deleteButton);
            itemList.appendChild(li);
            


            //let deleteElement = document.getElementsByTagName('li').firstElementChild;
            //console.log(deleteElement);
            deleteButton.addEventListener('click',ondelete);
            let keyValue = event.target.name.value;
        

        function ondelete(e){
            e.preventDefault();
            let parentNode = e.target.parentNode;
            parentNode.remove();
            //let details = e.target
            localStorage.removeItem(keyValue);

        }



            /*console.log(event.target.name.value);
            console.log(event.target.email.value);
            console.log(event.target.phone.value);
            console.log(event.target.date.value);
            console.log(event.target.time.value);*/
        }
        





        const form =document.querySelector("form");
        form.addEventListener(submit , e =>{
            if(!form.checkValidity()){
                e.preventDefault();

            }
            form.classList.add('was-validated');
        })