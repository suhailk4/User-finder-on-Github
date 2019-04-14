
const github=new Github();
const ui=new UI();

const searchUser=document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=>{



 const userText=e.target.value;

 if(userText!==''){

     
    github.getUser(userText).then(data=>{

       // console.log(data);
        if(data.profile.message==='Not Found'){


            //display user doesnt exist
            ui.showAlert('User Not Found','alert alert-danger');

        }
        else{

            // display user
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);

        }


    })
  


 }
 else{

    // Clear Profile

    ui.clearProfile();
 }



});