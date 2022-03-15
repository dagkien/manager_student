const Comment_Model = require('../models/comment');

const getCurrentDate = () => {
  return new Date();
};

var that = module.exports = {
  postComment: async (req, res) => {
    //check params here use Utils
    const isCheck = await Utils.checkMissingParams({arrCheck, arrQuery});
    if(!isCheck){
      return res.status(200).json({
        code: 200, status: 'success', elements: 'Missing key'
      })
    }

    //nếu ok chạy tiếp 
    const isCreComment = await Comment_Model.create(req.query || req.body)
    if(!isCreComment){  
      return res.status(200).json({
        code: 200, status: 'success', elements: 'Create is Failed!!'
      })
    }

    return res.status(200).json({
        code: 200, status: 'success', elements: isCreComment._id
    })
  }
}