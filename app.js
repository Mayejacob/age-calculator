// get UI
const   dateInput = document.getElementById('dob'),
        submitBtn = document.querySelector('#submit'),
        message = document.querySelector('.message');


// listen for age
submitBtn.addEventListener('click',function(e){
    // console.log('ok')
    let myDob = dateInput.value;

    if(myDob == ''){
        // console.log('oops');
        message.style.color = 'red';
        dateInput.style.borderColor = 'red';
        message.innerHTML = `<div> Please input a Date Value</div>`;
    }else{
        // console.log('ok');
        // this.birthday = new Date(myDob);
        let birthday = new Date(myDob);
            calculateAge = function(){
                const diff = Date.now() - birthday.getTime();
                const ageDate = new Date(diff);
                return Math.abs(ageDate.getUTCFullYear() - 1970);
            };
            // console.log(calculateAge());
            message.style.color = 'green';
            dateInput.style.borderColor = 'green';
            message.innerHTML = `<div> Hello Dear, Your Current Age is <b>${calculateAge()}</b></div>`;
    }
    e.preventDefault();
});
