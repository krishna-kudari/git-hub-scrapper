const request=require("request");
const cheerio=require("cheerio");
const path=require("path");
const fs = require("fs");
const pdfkit=require("pdfkit");
function issuepage(url,repoName,topic){
    request(url,cb);
    function cb(error,response,html){
        if(error){
            console.log(err);
        }else{
            getissues(html,url);
        }
    }


function getissues(html,url){
    let $ =cheerio.load(html);
    let issuesArr=$(".d-block.d-md-none.position-absolute.top-0.bottom-0.left-0.right-0")
    let issuelinkArr =[];
    console.log(repoName);
    for(let i=0;i<5;i++){
        let issuelink=$(issuesArr[i]).attr("href");
        issuelink="https://github.com"+issuelink;
        console.log(issuelink);
        issuelinkArr.push(issuelink);
    }
    let folderPath=path.join(__dirname,topic);
    dirCreator(folderPath);
    let filePath=path.join(folderPath,repoName+".pdf");
    let text=JSON.stringify(issuelinkArr);
    let pdfDoc=new pdfkit();
    pdfDoc.pipe(fs.createWriteStream(filePath));
    pdfDoc.text(text);
    pdfDoc.end();
    // fs.writeFileSync(filePath,);

}
}

module.exports=issuepage;
function dirCreator(folderPath){
    if(fs.existsSync(folderPath)==false){
        fs.mkdirSync(folderPath);
    }
}