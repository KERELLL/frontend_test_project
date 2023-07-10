import { createStyles, makeStyles } from "@material-ui/core";

const FileUploadStyles = makeStyles(() =>
    createStyles({
        container: {
            position: "relative",
        },
        overlay: {
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            bottom: 0,
            cursor: "pointer",
            zIndex: 1,
        },
        input__container: {
            position: "relative",
            width: '100%',
        },
        input_style:{
            display: 'flex',
            border: "1px dashed #D1D3D4",
            padding: '16px 10px',
            borderRadius: "3px",
            cursor: 'pointer',
        },
        input: {
            "& .MuiInput-root": {
                paddingRight: 130,
            },
        },
        button: {
            position: "absolute",
            right: 0,
            height: 48,
            bottom: 0,
            padding: "0 20px",
        },
        label: {
            position: "absolute",
            // left: "200px",
            // top: "50%",
            // left: "50%",
            // transform: "translate(-50%, -50%)",
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            color: 'black',
        },
    })
);

export default FileUploadStyles;
