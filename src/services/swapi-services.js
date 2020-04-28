export default class SwapiService {

    _apiBase ='https://api.github.com/repos/octocat';

    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok){
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    }
    async getAllIssues(){
        const res = await this.getResource(`/Hello-World/issues`)
        return res;
    }


    getOneIssues(id){
        return this.getResource(`/Hello-World/issues/${id}`);
    }

}
