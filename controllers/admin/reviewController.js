const getAllReportedReviews = async(req,res) => {
    res.send('get All Reported Reviews')
}
const changeReviewStatues = async(req,res) => {
    res.send('change Review Statues')
}

export {getAllReportedReviews,changeReviewStatues}