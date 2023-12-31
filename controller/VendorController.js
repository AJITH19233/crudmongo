const VendorData = require("../models/VendorData");

const index = (req, res, next) => {
    VendorData.find()
        .then(response => {
            res.json({
                response
            });
        })
        .catch(error => {
            res.json({
                message: 'An Error Occurred'
            });
        });
};

const store = (req, res, next) => {
    let vendor = new VendorData({
        Vendor_name: req.body.Vendor_name,
        Account_no: req.body.Account_no,
        Bank_name: req.body.Bank_name,
        Address_Line1: req.body.Address_Line1,
        Address_Line2: req.body.Address_Line2,
        Zip_Code: req.body.Zip_Code
    });

    vendor.save()
        .then(response => {
            res.json({
                message: "Vendor Added Successfully"
            });
        })
        .catch(error => {
            res.json({
                message: 'An Error Occurred'
            });
        });
};

const Update = (req, res, next) => {
    let VendorID = req.body.VendorID;

    let updateData = {
        Vendor_name: req.body.Vendor_name,
        Account_no: req.body.Account_no,
        Bank_name: req.body.Bank_name,
        Address_Line1: req.body.Address_Line1,
        Address_Line2: req.body.Address_Line2,
        Zip_Code: req.body.Zip_Code
    };

    VendorData.findByIdAndUpdate(VendorID, { $set: updateData })
        .then(() => {
            res.json({
                message: 'Vendor Updated Successfully'
            });
        })
        .catch(error => {
            res.json({
                message: 'An error Occurred'
            });
        });
};

const destroy = (req, res, next) => {
    let VendorID = req.body.VendorID;
    VendorData.findByIdAndRemove(VendorID)
        .then(() => {
            res.json({
                message: "Vendor Deleted Successfully"
            });
        })
        .catch(error => {
            res.json({
                message: "An error occurred"
            });
        });
};

module.exports = {
    index,
    store,
    Update,
    destroy
};
