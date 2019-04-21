class GitHub {
    constructor() {
        this.clientId = '1bd05e48f1e95292e67e';
        this.clientSecret = '8c3064a99bc8a0ef5ad98d2051d0d1b73785f807';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    // get user method
    async getUsers(username) {
        // fetch profile data
        const profileResponse = await fetch(`https://api.github.com/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();


        return {
            profile,
            repos
        }
    }
}