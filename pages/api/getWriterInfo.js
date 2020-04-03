import data from "../../data/data.json";

export default (req, res) => {
    const {writer} = req.query; 
    return res.status(200).json(data[writer]);  
}