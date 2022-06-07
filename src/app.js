const app =  Vue.createApp({
    data(){

        return {
            firstName : "Hama",
            lastName : "Cool",
            email : "boualiHama@drachenya.com",
            gender : "male",
            picture : "https://randomuser.me/api/portraits/men/10.jpg",
        }
    },
    methods :{
        async getUser(){
            function removeAllChildNodes(parent) {
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }
            }
            if(document.getElementById("appRoute").hasChildNodes())
            removeAllChildNodes(document.getElementById("appRoute"))
            const res = await fetch("https://randomuser.me/api")
            const { results } = await res.json()
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
            console.log(results)
            //to be added soon
             this.extras = {
                age: results[0].dob.age,
                date_ofBirth: results[0].dob.date,
                cellPhone: results[0].cell,
                phone: results[0].phone,
                nationality: results[0].nat,
                id: results[0].id.value,
                country: results[0].location.country,
                city: results[0].location.city,
                postcode: results[0].location.postcode,
                state: results[0].location.state,
                streetNumber: results[0].location.street.number,
                streetName: results[0].location.street.name,
                timezone: results[0].location.timezone.description,
                timeZoneOffset: results[0].location.timezone.offset,
                login: JSON.stringify(results[0].login)
            }


        },
        async getMoreInfo(){
            function removeAllChildNodes(parent) {
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }
            }
            const myDiv =  document.getElementById("appRoute");
            if(myDiv.childElementCount != 0){
                removeAllChildNodes(myDiv)
            }
            for(key in this.extras){
                var newP = document.createElement("p"); 
	            var textNode = document.createTextNode(`${key} : ${this.extras[key]}`); 
	            newP.appendChild(textNode);
                myDiv.appendChild(newP)
            }

        }
    }

})

app.mount("#app");