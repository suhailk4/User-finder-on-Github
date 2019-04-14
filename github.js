class Github{

    constructor(){
        this.client_id='fb8a25f87971015aceb8';
        this.client_secret='1febabfe65dd35fb499c56d533b9c6070af3e46b';
        this.repos_count=6;
        this.repos_sort="created: asc";

    }



   async getUser(user){

        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile=await profileResponse.json();

        const repos=await repoResponse.json();

        return {
            profile, //profile:profile
            repos
          
        }


    }

     
}