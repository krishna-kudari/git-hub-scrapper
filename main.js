const url="https://github.com/topics";
const repopage=require("./repopage");
const fs=require("fs");
const path=require("path");
const request=require("request");
const cheerio=require("cheerio");
const pdfkit=require("pdfkit")
request(url,cb);
function cb(error,response,html){
    if(error){
        console.log(err);
    }else{
        get3links(html);
    }
}
function get3links(html){
    let $=cheerio.load(html);
    let links=$(".d-flex.flex-wrap.flex-justify-start.flex-items-stretch.list-style-none.gutter.my-4 a");
    for(let i=0;i<links.length;i++){
        href=$(links[i]).attr("href");
        let topic=href.split("/").pop();
        fulllink="https://github.com"+href;
        repopage.repopage(fulllink,topic);
        
    }
    
}
