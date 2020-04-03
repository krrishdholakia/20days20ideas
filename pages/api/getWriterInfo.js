import data from "../../data/data.json";

export default (req, res) => {
    const {writer} = req.query; 
    console.log("received: ", writer);
    return res.status(200).json(data[writer]);  
}