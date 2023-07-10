import React, {ChangeEvent, useEffect, useState} from 'react'
import {Box, FormControl, InputBase, InputLabel} from "@material-ui/core";
import FileUploadStyles from "./FileUploadStyles";
import {ErrorMessage, Field, useFormikContext} from "formik";

interface IFileUpload {
    id: string;
    label?: string;
    file: File | null;
    setFile: (file: any | null) => void;
    placeholder?: string;
    labelPopup?: string;
}

const FileUpload: React.FC<IFileUpload> = React.memo((props: IFileUpload) => {

    const classes = FileUploadStyles();
    const {id, label, file, setFile, placeholder, labelPopup} = props;
    const [removeText, setRemoveText] = useState(null)

    const handleChange = (event: ChangeEvent) => {
        setFile((event.target as any).files[0])
        setRemoveText((event.target as any).files[0].name)
    };

    useEffect(() => {
        console.log(removeText)
    }, [removeText])
    return (
        <Box className={classes.container}
             style={{zIndex: removeText ? 100 : 0}}>
            <Box className={classes.input__container}>
                <FormControl>
                    <InputLabel
                        className={classes.label}
                    htmlFor={"inputFile"}>
                        {label}
                        {removeText && <Box className="labelPopup">&ensp;{removeText}</Box>}
                    </InputLabel>
                    <Field
                        component={InputBase}
                        id={"inputFile"}
                        name={"inputFile"}
                        readOnly
                        value={file ? file.name : ""}
                        className={classes.input_style}
                    />
                </FormControl>
            </Box>
            <Box className={classes.overlay}>
                <input
                    id = {"inputFile"}
                    name={"inputFile"}
                    onChange={handleChange}
                    type="file"
                    style={{display: "none"}}
                />
            </Box>
        </Box>
    );
});

export default FileUpload;
