import articleData from "../../data/articles.json";

export default (req, res) => {
    const {articleID} = req.query; 
    return res.status(200).json(articleData[articleID]);  
}