import userData from "../../data/data.json";
import { v4 as uuidv4 } from 'uuid';
import articleData from "../../data/articles.json"; 

const fs = require('fs')

export default (req, res) => {
    const data = req.body; 
    let tempData = userData; 

    console.log(data);
    //update song 
    if (data["song_link"]) {
        tempData[data["writer"]]["song_link"] = data["song_link"] 
    }

    //update book link 
    if (data["book_link"]) {
        tempData[data["writer"]]["book_link"] = data["book_link"] 
    }

    //update work link 
    if (data["work_link"]) {
        tempData[data["writer"]]["work_link"] = data["work_link"] 
    }

    //update articles 
    if (data["title"] && data["body"] && data["createdAt"]) {
        let dateDiff = 1; 
        let articleID = uuidv4();
        if (tempData[data["writer"]]["articles"]) {
            let tempDiff = Math.round((parseInt(data["createdAt"]) - parseInt(tempData[data["writer"]]["articles"]["1"]["createdAt"]))/(1000*3600*24));
            if (tempDiff > 1) dateDiff = tempDiff;
        }
        console.log("datediff: ", dateDiff);
        if (!tempData[data["writer"]]["articles"]) tempData[data["writer"]]["articles"] = {} 
        tempData[data["writer"]]["articles"][dateDiff] = {
            unique_id : articleID
        }
        
        let articleObj = {
            "title" : data["title"],
            "body" : data["body"],
            "createdAt" : data["createdAt"]
        }

        let tempArticleData = articleData; 
        tempArticleData[articleID] = articleObj; 
        tempArticleData = JSON.stringify(tempArticleData);
        fs.writeFile('./data/articles.json', tempArticleData, err => {
            if (err) {
                console.error(err)
                return
            }
        })
    }

    console.log(tempData);
    tempData = JSON.stringify(tempData)

    fs.writeFile('./data/data.json', tempData, err => {
    if (err) {
        console.error(err)
        return
    }
    })
    res.send('success');
}