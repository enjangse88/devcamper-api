//@desc Get all bootcamps
//@route GET /api/v1/bootcamps

const Bootcamp = require('../models/Bootcamp');
const Bootcamps = require('../models/Bootcamp');

//@access Public
exports.getBootcamps = async (req, res, next) => {
    //res.status(200).json ({ success: true, msg: 'Show all bootcamps'});
    try {
        const bootcamp = await Bootcamps.find();
        res.status(200).json({ success: true, data: bootcamp });
    } catch (err) {
        res.status(400).json ({ success: false});
    }
};
 
//@desc Get a bootcamp
//@route GET /api/v1/bootcamps/:id
//@access Public
exports.getBootcamp = async (req, res, next) => {
    //res.status(200).json ({ success: true, msg: `Show bootcamps ${req.params.id} `});
    try { 
        const bootcamp = await Bootcamps.findById(req.params.id);
        res.status(200).json({ success: true, data: bootcamp});
    } catch(err)  {
        res.status(400).json({ success: false});
    }

};

//@desc create a bootcamps
//@route POST /api/v1/bootcamps
//@access Public
exports.createBootcamp = async (req, res, next) => {
    //res.status(200).json ({ success: true, msg: 'Create new bootcamp'});
    try {
    const bootcamp = await Bootcamps.create(req.body);
    res.status(201).json({
        success: true,
        data: bootcamp
    });
    } catch(err) {
        res.status(400).json({ success: false });
    }
};

//@desc update a bootcamp
//@route PUT /api/v1/bootcamps/:id
//@access Public
exports.updateBootcamp = async (req, res, next) => {
    //res.status(200).json ({ success: true, msg: `Update bootcamp ${req.params.id}`});
    try {
        const bootcamp = await Bootcamps.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!bootcamp){
            return res.status(400).json({ success: false});
        }
        res.status(200).json({ success: true, data: bootcamp});
    }catch (err) {
        res.status(400).json({ success: false });
    }
};

//@desc Delete a bootcamp
//@route DELETE /api/v1/bootcamps/:id
//@access Public
exports.deleteBootcamp = async (req, res, next) => {
    //res.status(200).json ({ success: true, msg: `Delete bootcamp ${req.params.id}`});
    try {
        const bootcamp = await Bootcamps.findByIdAndDelete(req.params.id);
        res.status(200).json ({ success: true, msg: `Data ${req.params.id} berhasil dihapus`});
    } catch (err) {
        res.status(400).json({ success: false});
    }
}

