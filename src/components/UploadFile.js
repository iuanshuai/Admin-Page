import React from "react";
import {Button} from "shards-react";

const UploadFile = () => (
    <div className="custom-file mb-3">
        <input type="file" className="custom-file-input mb-3" id="customFile2"/>
        <label className="custom-file-label" htmlFor="customFile2">
            Choose file...
        </label>


        <Button theme="primary" className="mb-3 mr-1">
            Submit
        </Button>

    </div>
);

export default UploadFile;
