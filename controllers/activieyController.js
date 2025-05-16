const {recordActivity} = require('services/activityService.js')

exports.handleActivity = async (req, res) => {
    const {username} = req?.params;

    const data = req.body

    const allowedTypes = ["page_view", "clicks", "form_submit"]
    if(!allowedTypes.includes(data?.event_type)){
        res.status(400).json({message : "Invalid event_type"})
    }

    try {
        const result = await recordActivity(username, data);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}