const request=require("request");
const cheerio=require("cheerio");
const issuepage=require("./issues")
function repopage(url,topic){
    request(url,cb);
    function cb(error,response,html){
        if(error){
            console.log(err);
        }else{
            getreposLink(html,topic);
        }
    }


function getreposLink(html,topic){
    let $=cheerio.load(html);
    let reposlinks=$("a[data-ga-click='Explore, go to repository issues, location:explore feed']")
    console.log(topic);
    for(let i=0;i<5;i++){
        let repolink=$(reposlinks[i]).attr("href");
        
        let repoNamee=topic+i;
        // let repoNameArr=repoNamee.split("/");
        // let repoName=repoNameArr[0];
        repolink="https://github.com"+repolink;
        
        console.log(repolink)
        issuepage(repolink,repoNamee,topic);
    }
}
}
module.exports={
    repopage:repopage
}