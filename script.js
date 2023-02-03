fetch('https://fakerapi.it/api/v1/persons?_quantity=12')
    .then(response => response.json())
    .then(commits => {
        let arrayData = commits.data;

        let personInfo = {
            id: 0,
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            address: ''
        }

        for(let i = 0; i < arrayData.length; i++){

            personInfo = {
                id: `${arrayData[i].id}`,
                firstname: `${arrayData[i].firstname}`,
                lastname: `${arrayData[i].lastname}`,
                email: `${arrayData[i].email}`,
                phone: `${arrayData[i].phone}`,
                address: `${arrayData[i].address.city} ${arrayData[i].address.street}`
            }

            let html = ` 
                    <div class="visits__item">
                        <div class="visits__contacts">
                            <div class="visits__phone">
                                <a href="tel:${personInfo.phone}">${personInfo.phone}</a>
                            </div>
                            <div class="visits__mail">
                                <a href="mailto:${personInfo.email}">${personInfo.email}</a>
                            </div>
                        </div>
                        <div class="visits__initials">
                            <h1>
                                ${personInfo.firstname}<br>
                                ${personInfo.lastname}
                            </h1>
                        </div>
                        <div class="visits__adress">
                            <h2>${personInfo.address}</h2>
                        </div>
                    </div>
            `

            let div = document.body.childNodes[1];
            div.insertAdjacentHTML('beforeend', html);
        }
    });


